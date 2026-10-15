import { readFileSync } from "node:fs"
import { appendFile, mkdir, readFile, stat, writeFile } from "node:fs/promises"
import { join, resolve } from "node:path"
import * as core from "@actions/core"
import { readTree } from "@okforest/okf/node"
import {
  type DiagramLoaders,
  type MermaidModule,
  type ReportFinding,
  toReport,
  type ValidationReport,
  validate,
} from "@okforest/validate"
import { d2Loader } from "./d2.js"
import { type FailOn, readInputs } from "./inputs.js"
import { linksFromEnvironment, workspacePath } from "./locations.js"
import { summaryMarkdown } from "./summary.js"

/** The action's own name and version, as the JSON report records them. */
export const TOOL = {
  name: "okforest/validate-action",
  version: (
    JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8")) as {
      version: string
    }
  ).version,
}

const DIAGRAM_RULES = [
  "okforest/d2-syntax",
  "okforest/mermaid-syntax",
  "okforest/diagram-unchecked",
]

export interface RunOptions {
  /** Diagram engines; defaults to bundled Mermaid and D2 downloaded on demand. */
  diagrams?: DiagramLoaders
  env?: NodeJS.ProcessEnv
  /** The workspace the `path` input is relative to; defaults to the current directory. */
  workspace?: string
}

/** The action: validate the tree, then annotate, summarize, report, and pass or fail. */
export async function run(options: RunOptions = {}): Promise<void> {
  try {
    await validateTree(options)
  } catch (error) {
    core.setFailed(error instanceof Error ? error.message : String(error))
  }
}

async function validateTree(options: RunOptions): Promise<void> {
  const env = options.env ?? process.env
  const workspace = options.workspace ?? process.cwd()
  const inputs = readInputs((name) => core.getInput(name))
  const root = resolve(workspace, inputs.path)
  const info = await stat(root).catch(() => undefined)
  if (!info?.isDirectory()) {
    throw new Error(`No such directory: ${inputs.path} (the path input is the tree's root folder).`)
  }

  const result = await validate(await readTree(root), {
    diagrams: options.diagrams ?? {
      d2: d2Loader({ warn: (message) => core.warning(message) }),
      mermaid: () => import("mermaid") as Promise<MermaidModule>,
    },
    ...(inputs.diagrams
      ? {}
      : { severity: Object.fromEntries(DIAGRAM_RULES.map((id) => [id, "off"])) }),
  })
  const report = toReport(result, { tool: TOOL, path: inputs.path })
  const toWorkspace = workspacePath(workspace, inputs.path)

  const reportPath = await writeReport(report, env)
  core.setOutput("ok", String(report.summary.ok))
  core.setOutput("errors", String(report.summary.errors))
  core.setOutput("warnings", String(report.summary.warnings))
  core.setOutput("infos", String(report.summary.infos))
  core.setOutput("report", reportPath)

  if (inputs.annotations) {
    for (const finding of report.findings) annotate(finding, toWorkspace(finding.file))
  }
  if (inputs.summary && env.GITHUB_STEP_SUMMARY) {
    const event = await readEvent(env)
    const links = linksFromEnvironment(env, event)
    await appendFile(
      env.GITHUB_STEP_SUMMARY,
      summaryMarkdown(report, { toWorkspace, ...(links ? { links } : {}) }),
    )
  }

  core.info(totals(report))
  const failure = failureMessage(report, inputs.failOn)
  if (failure) core.setFailed(failure)
}

const ANNOTATE = { error: core.error, warning: core.warning, info: core.notice } as const

/** One annotation per finding, titled with its rule, and ending with the
 * rule's documentation page. */
function annotate(finding: ReportFinding, file: string): void {
  ANNOTATE[finding.severity](`${finding.message}\n\nRule docs: ${finding.docs}`, {
    title: finding.ruleId,
    file,
    ...(finding.line === undefined ? {} : { startLine: finding.line }),
    ...(finding.column === undefined ? {} : { startColumn: finding.column }),
  })
}

/** Why the step fails under `fail-on`, or undefined when it passes. */
export function failureMessage(report: ValidationReport, failOn: FailOn): string | undefined {
  const { errors, warnings } = report.summary
  if (failOn === "never") return undefined
  if (errors > 0) return `OKForest found ${plural(errors, "error")} in ${report.path}.`
  if (failOn === "warning" && warnings > 0) {
    return `OKForest found ${plural(warnings, "warning")} in ${report.path} (fail-on: warning).`
  }
  return undefined
}

function totals({ summary, path }: ValidationReport): string {
  return `${plural(summary.errors, "error")}, ${plural(summary.warnings, "warning")}, and ${summary.infos} info in ${path} (${plural(summary.concepts, "concept")}, ${plural(summary.files, "file")})`
}

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`

/** Writes the report under RUNNER_TEMP, one file per step, and returns its path. */
async function writeReport(report: ValidationReport, env: NodeJS.ProcessEnv): Promise<string> {
  const dir = join(env.RUNNER_TEMP ?? process.cwd(), "okforest-validate")
  await mkdir(dir, { recursive: true })
  const step = (env.GITHUB_ACTION ?? "report").replace(/[^\w.-]/g, "_")
  const path = join(dir, `${step}.json`)
  await writeFile(path, `${JSON.stringify(report, null, 2)}\n`)
  return path
}

async function readEvent(env: NodeJS.ProcessEnv) {
  if (!env.GITHUB_EVENT_PATH) return undefined
  try {
    return JSON.parse(await readFile(env.GITHUB_EVENT_PATH, "utf8"))
  } catch {
    return undefined
  }
}
