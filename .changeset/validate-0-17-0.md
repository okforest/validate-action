---
"validate-action": minor
---

Bundles `@okforest/validate` 0.17.0 (was 0.16.1), the same rules as the [OKForest CLI 0.17.0](https://github.com/okforest/cli/releases/tag/okforest%400.17.0):

- **Under OKF 0.3, markdown without frontmatter or a `type` isn't a concept** (§3.2): it's reported once, as `okf/not-a-concept` (warning), and checked no further, as before; a run's concept count leaves it out.
- **`okf/broken-link` checks a path field without a leading `/` under OKF 0.3** (`resource`, `computation`, `executor.resource`, `attester.resource`, `superseded_by`), which resolves from its page's folder (§6.2). When the path would resolve from the tree's root, as OKF 0.2's examples wrote it, the annotation says to add the `/`. Trees on 0.2 are checked as before.
- **`okforest/okf-version-current` links the upgrade guide**, [Upgrade a tree to OKF 0.3](https://www.okforest.ai/docs/guides/upgrade-to-okf-0-3/).

A tree on 0.3 may gain `okf/broken-link` warnings for such path fields, which fail a run only with `fail-on: warning`.
