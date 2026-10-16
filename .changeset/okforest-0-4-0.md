---
"validate-action": minor
---

Bundles `@okforest/validate` 0.4.0: a `.okforest/tree.yml` file is now reported as an error (only `.okforest/tree.yaml` is read, so its settings were silently ignored), and the new `okforest/tree-yaml-keys` rule warns about settings OKForest doesn't know, such as a misspelled key. Every setting is described at https://www.okforest.ai/docs/tree-settings/.
