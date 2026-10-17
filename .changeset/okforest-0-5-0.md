---
"validate-action": minor
---

Bundles `@okforest/validate` 0.5.0. OKForest's settings move to `.okforest/settings.yaml`, where every setting is optional: `name`, `description`, and `ignore` (`.okforest/tree.yaml` is no longer read). Every markdown file is now a concept except `index.md`, `log.md`, and files under `.okforest/` and `.git/`, as OKF says, so list repository files such as `README.md` under `ignore`. The rules are now `okforest/settings` and `okforest/settings-keys`. Every setting is described at https://www.okforest.ai/docs/settings/. A breaking change released as a minor version: OKForest is pre-launch.
