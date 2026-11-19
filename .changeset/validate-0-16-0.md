---
"validate-action": minor
---

Bundles `@okforest/validate` 0.16.0 (was 0.15.0), the same rules as the OKForest CLI 0.16.0, which checks each tree by the OKF version its root `index.md` declares. OKF now lives at [open-knowledge-format/open-knowledge-format](https://github.com/open-knowledge-format/open-knowledge-format).

- **A tree that declares `okf_version: "0.3"` gets OKF 0.3's rules**: a `.md` file without frontmatter or a `type` isn't a concept (`okf/not-a-concept`, warning), so a `README.md` no longer needs `ignore:`; frontmatter keys OKF doesn't define are named `x-<producer>-<name>` (`okf/extension-key`, warning); `log.md` has no frontmatter (`okf/log-frontmatter`, error); the root `index.md` may give the bundle's `title`, `description`, and `license`; and each attested computation's parameter needs a `type`.
- **A tree on 0.2, or no version, keeps 0.2's rules**, and is told that 0.3 is current, to move when it's ready (`okforest/okf-version-current`, warning). A tree that declares a newer version than the bundled validator knows is told to update the action.
- `okf/datetime` accepts a date, the start of that day in UTC.
- `okf/status` is a warning, not an error, for a status OKF doesn't define; under 0.3 it also checks `superseded_by`.
- `okf/actor` accepts any `<scheme>:<id>`, such as `team:fpa`, and checks a source's `author` too.
- `okforest/slug` accepts underscores (`n_day_active_users`).

Every tree on 0.2 gains one warning, which fails a run only with `fail-on: warning`.

`dist/licenses.txt` lists the licenses of the third-party packages bundled into the action again; in 1.4.0 it was empty, after the bundler changed how it marks each module.
