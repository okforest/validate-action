import { n as __name } from "./chunk-Y2CYZVJY-gIrf9EvL.js";
import { p as select_default } from "./src-B2rQ3E5v.js";
import { b as getConfig2 } from "./chunk-DSNLSHJZ-7cfi9yEN.js";
//#region node_modules/.pnpm/mermaid@12.2.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-OYAV6JZA.mjs
var selectSvgElement = /* @__PURE__ */ __name((id) => {
	const { securityLevel } = getConfig2();
	let root = select_default("body");
	if (securityLevel === "sandbox") {
		const doc = select_default(`#i${id}`).node()?.contentDocument ?? document;
		root = select_default(doc.body);
	}
	return root.select(`#${id}`);
}, "selectSvgElement");
//#endregion
export { selectSvgElement as t };
