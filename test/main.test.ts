import { mkdtemp, readFile, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { fileURLToPath } from "node:url"
import type { D2Module, MermaidModule, ValidationReport } from "@okforest/validate"
import { failureMessage, run, TOOL } from "../src/main.js"

const workspace = fileURLToPath(new URL("..", import.meta.url))
const diagrams = {
  d2: () => import("@d2lang/d2") as Promise<D2Module>,
  mermaid: () => import("mermaid") as Promise<MermaidModule>,
}

interface Run {
  stdout: string[]
  outputs: Record<string, string>
  summary: string
  report: ValidationReport
  exitCode: typeof process.exitCode
}

/** Run the action as GitHub would: inputs and files through the environment. */
async function act(
  inputs: Record<string, string>,
  options: { tree?: string; env?: Record<string, string>; defaultDiagrams?: boolean } = {},
): Promise<Run> {
  const temp = await mkdtemp(join(tmpdir(), "validate-action-"))
  const files = { output: join(temp, "output"), summary: join(temp, "summary") }
  await writeFile(files.output, "")
  await writeFile(files.summary, "")
  const env = {
    GITHUB_OUTPUT: files.output,
    GITHUB_STEP_SUMMARY: files.summary,
    GITHUB_ACTION: "__okforest_validate",
    GITHUB_SERVER_URL: "https://github.com",
    GITHUB_REPOSITORY: "acme/knowledge",
    GITHUB_SHA: "abc123",
    GITHUB_EVENT_PATH: join(temp, "missing-event.json"),
    RUNNER_TEMP: temp,
    ...Object.fromEntries(Object.entries(inputs).map(([k, v]) => [`INPUT_${k.toUpperCase()}`, v])),
    ...options.env,
  }
  for (const [key, value] of Object.entries(env)) vi.stubEnv(key, value)
  const stdout: string[] = []
  vi.spyOn(process.stdout, "write").mockImplementation((chunk) => {
    stdout.push(String(chunk).trimEnd())
    return true
  })
  process.exitCode = undefined
  await run({
    ...(options.defaultDiagrams ? {} : { diagrams }),
    workspace: options.tree ?? workspace,
  })
  const exitCode = process.exitCode
  process.exitCode = undefined
  vi.restoreAllMocks()

  const outputs: Record<string, string> = {}
  for (const m of (await readFile(files.output, "utf8")).matchAll(
    /^(\w+)<<(\S+)\n([\s\S]*?)\n\2$/gm,
  )) {
    outputs[m[1] as string] = m[3] as string
  }
  const report = outputs.report
    ? (JSON.parse(await readFile(outputs.report, "utf8")) as ValidationReport)
    : (undefined as unknown as ValidationReport)
  return { stdout, outputs, summary: await readFile(files.summary, "utf8"), report, exitCode }
}

afterEach(() => vi.unstubAllEnvs())

describe("the action", () => {
  it("annotates, summarizes, reports, and fails on errors", async () => {
    const result = await act({ path: "fixtures/broken" })
    expect(
      result.stdout.filter((line) => line.startsWith("::") && !line.startsWith("::debug")),
    ).toEqual([
      "::warning title=okf/description,file=fixtures/broken/diagrams.md,line=1,col=1::No `description`: index entries, search snippets, and previews use it.%0A%0ARule docs: https://www.okforest.ai/docs/rules/okf/description/",
      "::error title=okforest/d2-syntax,file=fixtures/broken/diagrams.md,line=10,col=1::D2 syntax error: connection missing destination%0A%0ARule docs: https://www.okforest.ai/docs/rules/okforest/d2-syntax/",
      "::error title=okforest/d2-syntax,file=fixtures/broken/diagrams.md,line=10,col=8::D2 syntax error: maps must be terminated with }%0A%0ARule docs: https://www.okforest.ai/docs/rules/okforest/d2-syntax/",
      "::error title=okforest/mermaid-syntax,file=fixtures/broken/diagrams.md,line=15,col=1::Mermaid syntax error: Parse error on line 3: Expecting 'AMP', 'COLON', 'PIPE', 'TESTSTR', ..., got 'EOF'%0A%0ARule docs: https://www.okforest.ai/docs/rules/okforest/mermaid-syntax/",
      "::warning title=okf/broken-link,file=fixtures/broken/diagrams.md,line=18,col=10::`missing.md` does not exist in this tree.%0A%0ARule docs: https://www.okforest.ai/docs/rules/okf/broken-link/",
      "::warning title=okf/description,file=fixtures/broken/no-type.md,line=1,col=1::No `description`: index entries, search snippets, and previews use it.%0A%0ARule docs: https://www.okforest.ai/docs/rules/okf/description/",
      "::error title=okf/type,file=fixtures/broken/no-type.md,line=1,col=1::Missing `type`, the one required key.%0A%0ARule docs: https://www.okforest.ai/docs/rules/okf/type/",
      "::error::OKForest found 4 errors in fixtures/broken.",
    ])
    expect(result.stdout).toContain(
      "4 errors, 3 warnings, and 0 info in fixtures/broken (2 concepts, 3 files)",
    )
    expect(result.exitCode).toBe(1)
    expect(result.outputs).toEqual({
      ok: "false",
      errors: "4",
      warnings: "3",
      infos: "0",
      report: join(process.env.RUNNER_TEMP ?? "", "okforest-validate", "__okforest_validate.json"),
    })
    expect(result.report).toMatchObject({
      schemaVersion: 1,
      tool: TOOL,
      path: "fixtures/broken",
      summary: { ok: false, errors: 4, warnings: 3, infos: 0, concepts: 2, files: 3 },
    })
    expect(result.report.findings).toHaveLength(7)
    expect(result.summary).toContain("❌ 4 errors, 3 warnings, 0 info · 2 concepts in 3 files")
    expect(result.summary).toContain(
      "[fixtures/broken/no-type.md:1:1](https://github.com/acme/knowledge/blob/abc123/fixtures/broken/no-type.md#L1)",
    )
    expect(result.summary).toContain("[`okf/type`](https://www.okforest.ai/docs/rules/okf/type/)")
  })

  it("passes a clean tree", async () => {
    const result = await act({ path: "fixtures/clean" })
    expect(result.exitCode).toBeUndefined()
    expect(result.outputs.ok).toBe("true")
    expect(result.stdout.filter((line) => /^::(error|warning|notice)/.test(line))).toEqual([])
    expect(result.summary).toContain("✅ No problems")
  })

  it("never fails with fail-on: never", async () => {
    const result = await act({ path: "fixtures/broken", "fail-on": "never" })
    expect(result.exitCode).toBeUndefined()
    expect(result.outputs.errors).toBe("4")
  })

  it("fails on warnings with fail-on: warning", async () => {
    const tree = await mkdtemp(join(tmpdir(), "tree-"))
    await writeFile(join(tree, "a.md"), "---\ntype: note\ntitle: A\n---\n\n# A\n")
    const result = await act({ path: ".", "fail-on": "warning" }, { tree })
    expect(result.outputs.ok).toBe("true")
    expect(result.exitCode).toBe(1)
    expect(result.stdout).toContain("::error::OKForest found 1 warning in . (fail-on: warning).")
  })

  it("skips diagram checks with diagrams: false", async () => {
    const result = await act({ path: "fixtures/broken", diagrams: "false" })
    expect(result.report.findings.map((f) => f.ruleId)).not.toContain("okforest/d2-syntax")
    expect(result.report.findings.map((f) => f.ruleId)).not.toContain("okforest/mermaid-syntax")
    expect(result.outputs.errors).toBe("1")
  })

  it("leaves out annotations and the summary when asked", async () => {
    const result = await act({ path: "fixtures/broken", annotations: "false", summary: "false" })
    expect(result.stdout.filter((line) => line.startsWith("::error title="))).toEqual([])
    expect(result.summary).toBe("")
    expect(result.exitCode).toBe(1)
  })

  it("links to the pull request's head commit", async () => {
    const temp = await mkdtemp(join(tmpdir(), "event-"))
    const event = join(temp, "event.json")
    await writeFile(event, JSON.stringify({ pull_request: { head: { sha: "head456" } } }))
    const result = await act({ path: "fixtures/broken" }, { env: { GITHUB_EVENT_PATH: event } })
    expect(result.summary).toContain("/blob/head456/fixtures/broken/no-type.md#L1")
  })

  it("checks Mermaid with the bundled engine by default", async () => {
    const tree = await mkdtemp(join(tmpdir(), "tree-"))
    const concept = "---\ntype: note\ntitle: A\n---\n\n```mermaid\ngraph TD\n  A -->\n```\n"
    await writeFile(join(tree, "a.md"), concept)
    const result = await act({ path: "." }, { tree, defaultDiagrams: true })
    expect(result.report.findings.map((f) => f.ruleId)).toContain("okforest/mermaid-syntax")
  })

  it("fails with a clear message when the path is not a directory", async () => {
    const result = await act({ path: "fixtures/nowhere" })
    expect(result.stdout).toContain(
      "::error::No such directory: fixtures/nowhere (the path input is the tree's root folder).",
    )
    expect(result.exitCode).toBe(1)
    expect(result.outputs).toEqual({})
  })

  it("fails with a clear message on a bad input", async () => {
    const result = await act({ path: "fixtures/clean", "fail-on": "sometimes" })
    expect(result.stdout).toContain(
      '::error::fail-on must be one of error, warning, never (got "sometimes").',
    )
    expect(result.exitCode).toBe(1)
  })
})

describe("failureMessage", () => {
  const report = (errors: number, warnings: number) =>
    ({ path: "docs", summary: { errors, warnings } }) as ValidationReport

  it.each([
    ["error", 1, 0, "OKForest found 1 error in docs."],
    ["error", 0, 2, undefined],
    ["warning", 2, 2, "OKForest found 2 errors in docs."],
    ["warning", 0, 2, "OKForest found 2 warnings in docs (fail-on: warning)."],
    ["warning", 0, 0, undefined],
    ["never", 3, 3, undefined],
  ] as const)(
    "fail-on: %s with %i errors and %i warnings",
    (failOn, errors, warnings, expected) => {
      expect(failureMessage(report(errors, warnings), failOn)).toBe(expected)
    },
  )
})
