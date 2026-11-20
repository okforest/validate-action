import { n as __name } from "./chunk-Y2CYZVJY-CLQWvZ2c.js";
import { t as select } from "./d3-selection-ulZxE20F.js";
// node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-XXDRQBXY.mjs
var getDiagramElement = /* @__PURE__ */ __name((id, securityLevel) => {
	let sandboxElement;
	if (securityLevel === "sandbox") sandboxElement = select("#i" + id);
	return (securityLevel === "sandbox" ? select(sandboxElement.nodes()[0].contentDocument.body) : select("body")).select(`[id="${id}"]`);
}, "getDiagramElement");
export { getDiagramElement as t };
