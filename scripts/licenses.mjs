// Writes dist/licenses.txt: the license of every third-party package bundled
// into dist/, as the licenses of most of them require when redistributing.
// The bundler marks each module with a comment naming its path (`// <path>`,
// or `//#region <path>` from older tsdown), so the list is exactly what dist/
// contains, not every production dependency.
import { readdirSync, readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import { fileURLToPath } from "node:url"

const dist = new URL("../dist/", import.meta.url)
const root = new URL("../", import.meta.url)
const REGION =
  /^\/\/(?:#region)? ?(node_modules\/\.pnpm\/[^/]+\/node_modules\/(?:@[^/]+\/)?[^/]+)\//gm

const packages = new Map()
for (const file of readdirSync(dist)) {
  if (!file.endsWith(".js")) continue
  for (const [, dir] of readFileSync(new URL(file, dist), "utf8").matchAll(REGION)) {
    const manifest = JSON.parse(readFileSync(new URL(`${dir}/package.json`, root), "utf8"))
    packages.set(`${manifest.name}@${manifest.version}`, { dir, manifest })
  }
}

// No packages means the markers changed again, not that nothing is bundled.
if (packages.size === 0) {
  console.error("dist/licenses.txt: no bundled packages found; check the bundler's module comments")
  process.exit(1)
}

const LICENSE_FILE = /^(licen[cs]e|copying|notice)(\.(md|txt))?$/i
const sections = [...packages]
  .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
  .map(([id, { dir, manifest }]) => {
    const files = readdirSync(new URL(dir, root))
      .filter((name) => LICENSE_FILE.test(name))
      .sort()
    const texts = files.map((name) =>
      readFileSync(join(fileURLToPath(new URL(dir, root)), name), "utf8").trim(),
    )
    const license = manifest.license ?? "not declared in package.json; see the text below"
    return [
      `${id}`,
      `License: ${license}`,
      "",
      ...(texts.length ? texts : ["(no license file in the package)"]),
    ].join("\n")
  })

writeFileSync(
  new URL("licenses.txt", dist),
  `Third-party software bundled into OKForest Validate (dist/)\n\n${sections.join(`\n\n${"-".repeat(72)}\n\n`)}\n`,
)
console.log(`dist/licenses.txt: ${packages.size} packages`)
