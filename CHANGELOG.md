# validate-action

## 1.5.1

### Patch Changes

- bbe67ce: Bundles `@okforest/validate` 0.16.1 (was 0.16.0): on a tree that declares OKF 0.3, `okf/extension-key` suggests plain `x-` names (`owner` → `x-owner`) rather than `x-<producer>-<name>`. OKF 0.3 promises never to define a key starting with `x-`, so that's what keeps a tree's own fields apart from a later version's; they belong to the tree's knowledge, not to a tool or company name that can change. Any key starting with `x-` is still accepted. ([okforest 0.16.1](https://github.com/okforest/cli/releases/tag/okforest%400.16.1))

## 1.5.0

### Minor Changes

- 3f000aa: Bundles `@okforest/validate` 0.16.0 (was 0.15.0), the same rules as the OKForest CLI 0.16.0, which checks each tree by the OKF version its root `index.md` declares. OKF now lives at [open-knowledge-format/open-knowledge-format](https://github.com/open-knowledge-format/open-knowledge-format).
  
  - **A tree that declares `okf_version: "0.3"` gets OKF 0.3's rules**: a `.md` file without frontmatter or a `type` isn't a concept (`okf/not-a-concept`, warning), so a `README.md` no longer needs `ignore:`; frontmatter keys OKF doesn't define are named `x-<producer>-<name>` (`okf/extension-key`, warning); `log.md` has no frontmatter (`okf/log-frontmatter`, error); the root `index.md` may give the bundle's `title`, `description`, and `license`; and each attested computation's parameter needs a `type`.
  - **A tree on 0.2, or no version, keeps 0.2's rules**, and is told that 0.3 is current, to move when it's ready (`okforest/okf-version-current`, warning). A tree that declares a newer version than the bundled validator knows is told to update the action.
  - `okf/datetime` accepts a date, the start of that day in UTC.
  - `okf/status` is a warning, not an error, for a status OKF doesn't define; under 0.3 it also checks `superseded_by`.
  - `okf/actor` accepts any `<scheme>:<id>`, such as `team:fpa`, and checks a source's `author` too.
  - `okforest/slug` accepts underscores (`n_day_active_users`).
  
  Every tree on 0.2 gains one warning, which fails a run only with `fail-on: warning`.
  
  `dist/licenses.txt` lists the licenses of the third-party packages bundled into the action again; in 1.4.0 it was empty, after the bundler changed how it marks each module.

## 1.4.0

### Minor Changes

- 24c9d88: Bundles `@okforest/validate` 0.15.0 (was 0.6.1), the same rules as the OKForest CLI 0.15.0:
  
  - Mermaid diagrams whose parser needs a browser, flowcharts among them, are reported as not checked (`okforest/diagram-unchecked`, info) instead of failing the run with "Mermaid syntax error: purify_default.addHook is not a function" (#23).
  - `okforest/type-schema` (errors): a type with a JSON Schema at `.okforest/types/<type>.schema.json` has its concepts' fields checked against it. Trees without schemas are unaffected.
  - `okforest/type-template` checks each type's template, `.okforest/types/<type>.template.md`.
  - `okforest/similar-type` and `okforest/similar-tag` (warnings): a type or tag written two ways (`Metric`, `metrics`).
  - `okf/index-scope` (warning): an `index.md` entry that points outside its directory.
  - `okf/index-entries` reports an index that lists nothing only when its directory holds something to list.
  - `.okforest/settings.yaml` gains `diagrams` (`diagrams.mermaid.renderer`), checked by `okforest/settings` and `okforest/settings-keys`.
  
  Mermaid diagrams are checked with Mermaid 12.3 (was 12.2).
  
  A run can fail where it passed before only when a tree has type schemas its concepts don't match. Released as a minor version: OKForest is pre-launch.

## 1.3.1

### Patch Changes

- 3ac8c71: Bundles `@okforest/validate` 0.6.0. The rules and their findings are
  unchanged; each rule's documentation page, which every annotation links to,
  now explains why the rule exists, with an example and its fix.
- 23ba327: Bundles `@okforest/validate` 0.6.1, the same rules release as the OKForest
  CLI; the rules and their findings are unchanged. The README's example
  workflow is `okforest-validate.yaml`, matching what `okforest init` writes.

## 1.3.0

### Minor Changes

- 000573d: Bundles `@okforest/validate` 0.5.0. OKForest's settings move to `.okforest/settings.yaml`, where every setting is optional: `name`, `description`, and `ignore` (`.okforest/tree.yaml` is no longer read). Every markdown file is now a concept except `index.md`, `log.md`, and files under `.okforest/` and `.git/`, as OKF says, so list repository files such as `README.md` under `ignore`. The rules are now `okforest/settings` and `okforest/settings-keys`. Every setting is described at https://www.okforest.ai/docs/settings/. A breaking change released as a minor version: OKForest is pre-launch.

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
