# AGENTS.md

`okforest/validate-action`: the GitHub Action that runs `@okforest/validate`
(from [okforest/cli](https://github.com/okforest/cli)) on an OKF tree. The
rules live there; this repository only adapts them to GitHub: inputs,
outputs, annotations, the job summary, and the D2 download.

- Gates before any push: `pnpm build && pnpm test && pnpm typecheck && pnpm check`.
- `dist/` is what GitHub runs, but it is never committed to `main`
  (gitignored). CI builds it, runs the action on it on every OS, and on
  `main` its release job commits that same build onto each release tag
  only. Never edit or commit `dist/` by hand.
- Mermaid is bundled. D2 is never bundled or imported from `node_modules` at
  run time: `src/d2.ts` downloads the version pinned in `src/d2-pin.ts` and
  verifies its checksum. `pnpm pin` (run first by build, test, and
  typecheck) generates that gitignored file from `pnpm-lock.yaml`; never edit
  it by hand.
- The JSON report comes from `toReport()` in `@okforest/validate`, so it is
  the same document as `okforest validate --format json`. Don't add fields
  here; change the shared report in okforest/cli.
- Inputs and outputs in `action.yaml` are a public interface: removing or
  renaming one, or failing in new cases, needs a major version.
- Examples use reserved domains (`acme.example`) and placeholder names.
- Releases go through Changesets (`pnpm changeset`); tags are `v1.2.3` plus
  a moving `v1`, each on a release commit that adds the tested `dist/` to
  the merged commit (the `release` job in `.github/workflows/ci.yaml`, which
  needs every check to pass). Dependency updates reach users only with a
  changeset. `main` is protected by a ruleset (PRs with passing checks;
  admins can bypass).
