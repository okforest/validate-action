import { C as createDefaultSharedCoreModule, S as createDefaultCoreModule, d as PacketGrammarGeneratedModule, i as CommonValueConverter, o as EmptyFileSystem, t as AbstractMermaidTokenBuilder, u as MermaidGeneratedSharedModule, w as inject, x as __name } from "./chunk-NGNAAXSQ-C6Bgy0-g.js";
//#region node_modules/.pnpm/@mermaid-js+parser@2.0.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-OD3NTWWA.mjs
var PacketTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static {
		__name(this, "PacketTokenBuilder");
	}
	constructor() {
		super(["packet"]);
	}
};
var PacketModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new PacketTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
} };
function createPacketServices(context = EmptyFileSystem) {
	const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
	const Packet = inject(createDefaultCoreModule({ shared }), PacketGrammarGeneratedModule, PacketModule);
	shared.ServiceRegistry.register(Packet);
	return {
		shared,
		Packet
	};
}
__name(createPacketServices, "createPacketServices");
//#endregion
export { createPacketServices as n, PacketModule as t };
