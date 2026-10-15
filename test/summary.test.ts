import { type Finding, ruleUrl, type ValidationReport } from "@okforest/validate"
import { cell, summaryMarkdown } from "../src/summary.js"

const report = (findings: Finding[]): ValidationReport => ({
  schemaVersion: 1,
  tool: { name: "okforest/validate-action", version: "1.0.0" },
  path: "docs",
  summary: {
    ok: !findings.some((f) => f.severity === "error"),
    errors: findings.filter((f) => f.severity === "error").length,
    warnings: findings.filter((f) => f.severity === "warning").length,
    infos: findings.filter((f) => f.severity === "info").length,
    concepts: 3,
    files: 4,
  },
  findings: findings.map((f) => ({ ...f, docs: ruleUrl(f.ruleId) })),
})

const toWorkspace = (file: string) => `docs/${file}`
const links = { server: "https://github.com", repository: "acme/knowledge", sha: "abc123" }

describe("summaryMarkdown", () => {
  it("says so when there are no findings", () => {
    expect(summaryMarkdown(report([]), { toWorkspace })).toBe(
      "## OKForest Validate\n\n✅ No problems · 3 concepts in 4 files · `docs`\n",
    )
  })

  it("lists every finding with a link to its line", () => {
    const markdown = summaryMarkdown(
      report([
        {
          ruleId: "okf/type",
          severity: "error",
          message: "Missing `type`.",
          file: "a.md",
          line: 1,
          column: 1,
        },
        {
          ruleId: "okf/broken-link",
          severity: "warning",
          message: "`b.md` does not exist.",
          file: "a.md",
          line: 9,
        },
        {
          ruleId: "okf/okf-version",
          severity: "info",
          message: "Declare the OKF version.",
          file: "index.md",
        },
      ]),
      { toWorkspace, links },
    )
    expect(markdown).toBe(
      [
        "## OKForest Validate",
        "",
        "❌ 1 error, 1 warning, 1 info · 3 concepts in 4 files · `docs`",
        "",
        "| | Location | Finding | Rule |",
        "|---|---|---|---|",
        "| ❌ Error | [docs/a.md:1:1](https://github.com/acme/knowledge/blob/abc123/docs/a.md#L1) | Missing `type`. | [`okf/type`](https://www.okforest.ai/docs/rules/okf/type/) |",
        "| ⚠️ Warning | [docs/a.md:9](https://github.com/acme/knowledge/blob/abc123/docs/a.md#L9) | `b.md` does not exist. | [`okf/broken-link`](https://www.okforest.ai/docs/rules/okf/broken-link/) |",
        "| ℹ️ Info | [docs/index.md](https://github.com/acme/knowledge/blob/abc123/docs/index.md) | Declare the OKF version. | [`okf/okf-version`](https://www.okforest.ai/docs/rules/okf/okf-version/) |",
        "",
      ].join("\n"),
    )
  })

  it("passes with a check mark when there are only warnings", () => {
    const markdown = summaryMarkdown(
      report([
        {
          ruleId: "okf/description",
          severity: "warning",
          message: "No description.",
          file: "a.md",
        },
      ]),
      { toWorkspace },
    )
    expect(markdown).toContain("✅ 0 errors, 1 warning, 0 info")
    expect(markdown).toContain("| ⚠️ Warning | docs/a.md | No description. |")
  })

  it("leaves rows past the limit to the JSON report", () => {
    const findings: Finding[] = ["a", "b", "c"].map((name) => ({
      ruleId: "okf/type",
      severity: "error",
      message: "Missing `type`.",
      file: `${name}.md`,
    }))
    const markdown = summaryMarkdown(report(findings), { toWorkspace, maxRows: 2 })
    expect(markdown).toContain("docs/b.md")
    expect(markdown).not.toContain("docs/c.md")
    expect(markdown).toContain(
      "…and 1 more. Every finding is in the JSON report (the `report` output).",
    )
  })
})

describe("cell", () => {
  it("keeps a table cell on one line and escapes pipes and HTML outside code", () => {
    expect(cell("a | b\n<br> & `x | <y>`")).toBe("a \\| b &lt;br&gt; &amp; `x \\| <y>`")
  })
})
