---
"validate-action": minor
---

Bundles `@okforest/validate` 0.18.0 (was 0.17.0), the same rules as the [OKForest CLI 0.18.0](https://github.com/okforest/cli/releases/tag/okforest%400.18.0): three rules so a tree's types don't drift from its pages.

- **`okforest/type-file-name`** (warning): a type's schema and template in `.okforest/types/` are named for it (`customer-profile.schema.json` for `Customer Profile`).
- **`okforest/unused-type`** (info): a type no concept gives any more, as a renamed type or a split tree leaves.
- **`okforest/undeclared-type`** (info): in a tree with type schemas, a type its concepts give that has none.

The two notes are info, and the warning fails a run only with `fail-on: warning`.
