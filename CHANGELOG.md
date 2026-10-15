# validate-action

## 1.0.2

### Patch Changes

- 9219eec: Releases are now built from source by the Release workflow: `dist/` is committed only onto each release tag, not to `main`. The action itself is unchanged.

## 1.0.1

### Patch Changes

- ac2f78b: Mermaid diagrams are checked with Mermaid 12.2 (was 12.1), and the bundled validator is `@okforest/validate` 0.2.1 (no rule changes).

## 1.0.0

### Major Changes

- 2a4c2be: First release: validate an OKF v0.2 tree with `@okforest/validate` 0.2, with annotations on each finding's file and line, a job summary listing every finding, the JSON report as an output, `fail-on` to choose what fails the step, and D2 and Mermaid diagram syntax checks (Mermaid bundled; D2 downloaded on demand and checked against a pinned checksum).
