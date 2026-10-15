# Contributing

Thanks for helping grow OKForest. The organization-wide guide
([okforest/.github](https://github.com/okforest/.github/blob/main/CONTRIBUTING.md))
covers licensing (Apache 2.0, inbound = outbound), Conventional Commits, and
example-data rules. This file covers this repository.

## Setup

    pnpm install
    pnpm build && pnpm test && pnpm typecheck && pnpm check

All four gates must pass before a PR; CI runs the same commands. `main` is
protected (the "Protect main" ruleset): changes land through pull requests
once `check` and the three `self-test` jobs pass. Repository admins can
bypass it, for small direct commits and for merging "Version Packages" PRs,
whose checks never run (GitHub runs no workflows for PRs that a workflow
opens). `pnpm
install` fetches the pinned pnpm and Node versions automatically
(`packageManager` and `devEngines` in `package.json`).

**Never commit `dist/`.** GitHub runs an action straight from the repository
at the tag a workflow names, with no install or build step, so `dist/` is the
code users run, but it only needs to exist on release tags. It is gitignored
on `main`: `pnpm build` writes it (plus `dist/licenses.txt`) for local runs and
CI, whose self-test runs the action on that build, and CI's release job
commits that same build onto each release tag. The same goes for `src/d2-pin.ts`, which
`pnpm pin` writes from the lockfile.

## Layout

| Path | What it is |
|---|---|
| `action.yml` | The action's inputs, outputs, and runtime (`node24`, `dist/index.js`). |
| `src/main.ts` | The run: read the tree, validate, then outputs, annotations, the job summary, and pass or fail. |
| `src/d2.ts`, `src/d2-pin.ts` | D2 downloaded on demand and checked against the checksum `pnpm pin` writes from the lockfile (gitignored). |
| `src/summary.ts`, `src/locations.ts` | The job summary, and workspace paths and links for findings. |
| `dist/` | The generated bundle GitHub runs: gitignored, built by `pnpm build`, committed only onto release tags. |
| `fixtures/clean`, `fixtures/broken` | Trees the CI self-test runs the action on, on Linux, macOS, and Windows. |

## Updating dependencies

- **`@okforest/validate`** (the rules): bump it in `pnpm-workspace.yaml`,
  `pnpm install`, `pnpm build`, and update test expectations if the rules'
  findings changed.
- **D2** is not bundled; the action downloads it at run time. `pnpm build`
  writes the `@d2lang/d2` version and its checksum from `pnpm-lock.yaml` into
  `src/d2-pin.ts`, so upgrading it is the same as any other dependency.
- **Dependabot** opens one grouped PR a week for npm updates; it passes CI like
  any other. Merging it releases nothing: add a changeset when the update
  should reach users.

## Releasing

Releases go through Changesets: add a changeset (`pnpm changeset`) with your
change, and merging it to `main` opens a "Version Packages" PR. Merging that
PR (an admin bypass, as above) releases the version. CI runs on the merged
commit, and only when `check` and every `self-test` pass does its release job
run: it commits the `dist/` artifact that the self-test just ran on Linux,
macOS, and Windows (not a new build) on top of the merged commit (on no
branch), tags that commit `v1.2.3`, moves the major tag (`v1`) to it, and
creates the GitHub Release from the version's `CHANGELOG.md` section. Nothing
is published to npm.

**Marketplace.** The Action is listed on the
[GitHub Marketplace](https://github.com/marketplace/actions/okforest-validate),
and each new release appears there on its own (v1.0.1 did). Only the first
listing was manual, since GitHub has no API for it: open the release, choose
**Edit**, tick **Publish this Action to the GitHub Marketplace**, accept the
Marketplace Developer Agreement, and update the release.

**Major versions.** A breaking change to inputs, outputs, or what fails the
step needs a major version (`v2`): users pinned to `v1` keep getting 1.x.
