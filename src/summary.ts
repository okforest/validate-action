import type { ReportFinding, ValidationReport } from "@okforest/validate"
import { findingUrl, type Links } from "./locations.js"

/** Rows beyond this are left to the JSON report (a step summary is capped at 1 MiB). */
export const MAX_ROWS = 1000

const ICON = { error: "❌", warning: "⚠️", info: "ℹ️" } as const
const LABEL = { error: "Error", warning: "Warning", info: "Info" } as const

/** The job summary: totals, then every finding as a table row. */
export function summaryMarkdown(
  report: ValidationReport,
  options: { toWorkspace: (file: string) => string; links?: Links; maxRows?: number },
): string {
  const { summary, findings } = report
  const max = options.maxRows ?? MAX_ROWS
  const scope = `${plural(summary.concepts, "concept")} in ${plural(summary.files, "file")}`
  const tree = `\`${report.path}\``
  const out = ["## OKForest Validate", ""]
  if (findings.length === 0) {
    out.push(`✅ No problems · ${scope} · ${tree}`)
    return `${out.join("\n")}\n`
  }
  const counts = `${plural(summary.errors, "error")}, ${plural(summary.warnings, "warning")}, ${summary.infos} info`
  out.push(`${summary.ok ? "✅" : "❌"} ${counts} · ${scope} · ${tree}`, "")
  out.push("| | Location | Finding | Rule |", "|---|---|---|---|")
  for (const finding of findings.slice(0, max)) {
    out.push(row(finding, options.toWorkspace(finding.file), options.links))
  }
  if (findings.length > max) {
    out.push(
      "",
      `…and ${findings.length - max} more. Every finding is in the JSON report (the \`report\` output).`,
    )
  }
  return `${out.join("\n")}\n`
}

function row(finding: ReportFinding, path: string, links: Links | undefined): string {
  const position =
    finding.line === undefined
      ? ""
      : `:${finding.line}${finding.column ? `:${finding.column}` : ""}`
  const text = `${path}${position}`
  const url = findingUrl(links, path, finding)
  const location = url ? `[${cell(text)}](${url})` : cell(text)
  const severity = `${ICON[finding.severity]} ${LABEL[finding.severity]}`
  // The rule links to its documentation page on www.okforest.ai.
  const rule = `[\`${finding.ruleId}\`](${finding.docs})`
  return `| ${severity} | ${location} | ${cell(finding.message)} | ${rule} |`
}

/**
 * Text that is safe inside a GitHub-flavored markdown table cell: one line,
 * pipes escaped (GFM does this before parsing code spans, so it holds inside
 * them too), and HTML escaped outside code spans, where entities would show
 * literally.
 */
export function cell(text: string): string {
  return text
    .replace(/\r?\n/g, " ")
    .split(/(`[^`]*`)/)
    .map((part, i) =>
      i % 2 === 1 ? part : part.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"),
    )
    .join("")
    .replace(/\|/g, "\\|")
}

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`
