# validate-action

## 1.2.0

### Minor Changes

- 70e7f4c: Bundles `@okforest/validate` 0.4.0: a `.okforest/tree.yml` file is now reported as an error (only `.okforest/tree.yaml` is read, so its settings were silently ignored), and the new `okforest/tree-yaml-keys` rule warns about settings OKForest doesn't know, such as a misspelled key. Every setting is described at https://www.okforest.ai/docs/tree-settings/.

## 1.1.0

### Minor Changes

- e3d24f5: Findings link to their rule's documentation on www.okforest.ai: the job summary's Rule column links each rule's page, each annotation ends with it, and each finding in the JSON report carries `docs`, its URL. Bundles `@okforest/validate` 0.3.0.

## 1.0.3

### Patch Changes

- e7b3556: Releases ship the exact build CI tested: the release runs only after every check and the self-test on Linux, macOS, and Windows pass on the merged commit, and tags that same `dist/`. The action itself is unchanged.

## 1.0.2

### Patch Changes

- 9219eec: Releases are now built from source by the Release workflow: `dist/` is committed only onto each release tag, not to `main`. The action itself is unchanged.

## 1.0.1

### Patch Changes

- ac2f78b: Mermaid diagrams are checked with Mermaid 12.2 (was 12.1), and the bundled validator is `@okforest/validate` 0.2.1 (no rule changes).

## 1.0.0

### Major Changes

- 2a4c2be: First release: validate an OKF v0.2 tree with `@okforest/validate` 0.2, with annotations on each finding's file and line, a job summary listing every finding, the JSON report as an output, `fail-on` to choose what fails the step, and D2 and Mermaid diagram syntax checks (Mermaid bundled; D2 downloaded on demand and checked against a pinned checksum).
