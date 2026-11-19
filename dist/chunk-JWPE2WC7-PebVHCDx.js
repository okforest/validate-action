import { n as __name } from "./chunk-Y2CYZVJY-CLQWvZ2c.js";
// node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-JWPE2WC7.mjs
function populateCommonDb(ast, db) {
	if (ast.accDescr) db.setAccDescription?.(ast.accDescr);
	if (ast.accTitle) db.setAccTitle?.(ast.accTitle);
	if (ast.title) db.setDiagramTitle?.(ast.title);
}
__name(populateCommonDb, "populateCommonDb");
export { populateCommonDb as t };
