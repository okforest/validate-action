---
"validate-action": minor
---

Bundles `@okforest/validate` 0.15.0 (was 0.6.1), the same rules as the OKForest CLI 0.15.0:

- Mermaid diagrams whose parser needs a browser, flowcharts among them, are reported as not checked (`okforest/diagram-unchecked`, info) instead of failing the run with "Mermaid syntax error: purify_default.addHook is not a function" (#23).
- `okforest/type-schema` (errors): a type with a JSON Schema at `.okforest/types/<type>.schema.json` has its concepts' fields checked against it. Trees without schemas are unaffected.
- `okforest/type-template` checks each type's template, `.okforest/types/<type>.template.md`.
- `okforest/similar-type` and `okforest/similar-tag` (warnings): a type or tag written two ways (`Metric`, `metrics`).
- `okf/index-scope` (warning): an `index.md` entry that points outside its directory.
- `okf/index-entries` reports an index that lists nothing only when its directory holds something to list.
- `.okforest/settings.yaml` gains `diagrams` (`diagrams.mermaid.renderer`), checked by `okforest/settings` and `okforest/settings-keys`.

A run can fail where it passed before only when a tree has type schemas its concepts don't match. Released as a minor version: OKForest is pre-launch.
