# OKForest Validate

[![CI](https://github.com/okforest/validate-action/actions/workflows/ci.yml/badge.svg)](https://github.com/okforest/validate-action/actions/workflows/ci.yml)
[![Coverage](https://codecov.io/gh/okforest/validate-action/graph/badge.svg)](https://codecov.io/gh/okforest/validate-action)
[![License: Apache-2.0](https://img.shields.io/badge/license-Apache--2.0-green)](./LICENSE)

A GitHub Action that validates [Open Knowledge Format (OKF)](https://github.com/GoogleCloudPlatform/open-knowledge-format)
v0.2 trees on every pull request: the OKF specification, OKForest
conventions, and D2 and Mermaid diagram syntax. Each finding is annotated on
its file and line, the job summary lists them all, and errors fail the check.
It runs [`@okforest/validate`](https://github.com/okforest/cli/tree/main/packages/validate),
the same rules as `npx okforest validate`.

```yaml
# .github/workflows/okforest-validate.yml
name: OKForest Validate

on:
  pull_request:
  push:
    branches: [main]

permissions:
  contents: read

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: okforest/validate-action@v1
```

No Node setup or install step is needed. The action runs on Linux, macOS, and
Windows runners.

## Inputs

| Input | Default | What it does |
|---|---|---|
| `path` | `.` | The tree's root folder, relative to the workspace. |
| `fail-on` | `error` | What fails the step: `error`, `warning` (errors or warnings), or `never` (report only). |
| `diagrams` | `true` | Check D2 and Mermaid diagram syntax. `false` skips the checks. |
| `annotations` | `true` | Annotate each finding on its file and line. |
| `summary` | `true` | List every finding in the job summary. |

Warnings and info never fail the step by default. A conformant tree with, say,
a broken link still passes: the OKF specification says never to reject a bundle
for that.

## Outputs

| Output | What it is |
|---|---|
| `ok` | `true` when there are no errors (warnings and info allowed). |
| `errors`, `warnings`, `infos` | How many findings of each severity. |
| `report` | Path to the JSON report: the same document as `okforest validate --format json` (schema version 1). |

For example, to keep the report with the run:

```yaml
      - uses: okforest/validate-action@v1
        id: okf
        with:
          path: knowledge
          fail-on: never
      - uses: actions/upload-artifact@v7
        with:
          name: okf-report
          path: ${{ steps.okf.outputs.report }}
```

## Diagram checks

Mermaid is bundled with the action. D2 is about 32 MB (mostly WebAssembly), so
it is downloaded from the npm registry only when the tree has a `d2` code
block, checked against the checksum pinned in this release, and kept in the
runner's tool cache for later steps in the job (and later jobs on self-hosted
runners). If the download fails, for example on a runner without internet
access, D2 diagrams are reported as not checked (`info`) and the rest of the
validation runs as usual.

Some Mermaid diagram types (pie, gitGraph, and others) need a browser to parse
and are reported as not checked.

## Annotations

GitHub keeps at most 10 error, 10 warning, and 10 notice (info) annotations
per step, and 50 per job. The job summary always lists every finding, linked
to its line.

Each finding names its rule, which links to the rule's page on
[www.okforest.ai/docs/rules](https://www.okforest.ai/docs/rules/): from the
job summary's Rule column, at the end of each annotation, and as `docs` on
each finding in the JSON report.

## Versions

`okforest/validate-action@v1` follows the latest 1.x release. Pin a release
(`@v1.0.0`) or a commit SHA for fully reproducible runs. See
[CHANGELOG.md](CHANGELOG.md) and the [releases](https://github.com/okforest/validate-action/releases).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Licensed under [Apache 2.0](LICENSE);
the bundled third-party licenses are in each release's `dist/licenses.txt`
([latest](https://github.com/okforest/validate-action/blob/v1/dist/licenses.txt)).
OKForest™ is a trademark of Preneur LLC ([trademarks](TRADEMARKS.md)).
