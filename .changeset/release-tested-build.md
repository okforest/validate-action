---
"validate-action": patch
---

Releases ship the exact build CI tested: the release runs only after every check and the self-test on Linux, macOS, and Windows pass on the merged commit, and tags that same `dist/`. The action itself is unchanged.
