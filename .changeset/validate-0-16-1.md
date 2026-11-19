---
"validate-action": patch
---

Bundles `@okforest/validate` 0.16.1 (was 0.16.0): on a tree that declares OKF 0.3, `okf/extension-key` suggests plain `x-` names (`owner` → `x-owner`) rather than `x-<producer>-<name>`. OKF 0.3 promises never to define a key starting with `x-`, so that's what keeps a tree's own fields apart from a later version's; they belong to the tree's knowledge, not to a tool or company name that can change. Any key starting with `x-` is still accepted. ([okforest 0.16.1](https://github.com/okforest/cli/releases/tag/okforest%400.16.1))
