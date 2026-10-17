import { C as createDefaultSharedCoreModule, S as createDefaultCoreModule, b as WardleyGrammarGeneratedModule, n as AbstractMermaidValueConverter, o as EmptyFileSystem, u as MermaidGeneratedSharedModule, w as inject, x as __name } from "./chunk-NGNAAXSQ-C6Bgy0-g.js";
//#region node_modules/.pnpm/@mermaid-js+parser@2.0.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-53FOQ5SW.mjs
var WardleyValueConverter = class extends AbstractMermaidValueConverter {
	static {
		__name(this, "WardleyValueConverter");
	}
	runCustomConverter(rule, input, _cstNode) {
		switch (rule.name.toUpperCase()) {
			case "LINK_LABEL": return input.substring(1).trim();
			default: return;
		}
	}
};
var WardleyModule = { parser: { ValueConverter: /* @__PURE__ */ __name(() => new WardleyValueConverter(), "ValueConverter") } };
function createWardleyServices(context = EmptyFileSystem) {
	const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
	const Wardley = inject(createDefaultCoreModule({ shared }), WardleyGrammarGeneratedModule, WardleyModule);
	shared.ServiceRegistry.register(Wardley);
	return {
		shared,
		Wardley
	};
}
__name(createWardleyServices, "createWardleyServices");
//#endregion
export { createWardleyServices as n, WardleyModule as t };
