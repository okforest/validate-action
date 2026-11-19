import { b as getConfig2 } from "./chunk-BG4553SI-BdAazpNh.js";
import { n as __name } from "./chunk-Y2CYZVJY-CLQWvZ2c.js";
import { t as select } from "./d3-selection-ulZxE20F.js";
// node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-OHR5NZHT.mjs
var selectSvgElement = /* @__PURE__ */ __name((id) => {
	const { securityLevel } = getConfig2();
	let root = select("body");
	if (securityLevel === "sandbox") {
		const doc = select(`#i${id}`).node()?.contentDocument ?? document;
		root = select(doc.body);
	}
	return root.select(`#${id}`);
}, "selectSvgElement");
export { selectSvgElement as t };
