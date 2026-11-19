import "./chunk-VTWWFHGB-DvYU3UzH.js";
import "./chunk-ZO67DCNQ-BPRNmRNU.js";
import "./chunk-F6S3BTY2-BxHxokST.js";
import "./chunk-YK26KJH5-DDI0VGxP.js";
import "./chunk-BP2KR52E-DdBGm9aB.js";
import "./chunk-4S7OKTRW-C6v4bCOY.js";
import "./chunk-53FOQ5SW-lvTPCb7O.js";
import "./chunk-VPELOWWC-CZMJS3Jw.js";
import "./chunk-VZTHESGH-C6PFyPwv.js";
import "./chunk-3M4EKCLJ-BiBqjAno.js";
import "./chunk-OD3NTWWA-eC806RsC.js";
import "./chunk-QNH66VMT-BVtS4aUg.js";
import "./chunk-KPI5JJXK-DZ6wUBe9.js";
import "./chunk-24IY7LWP-DywqTD15.js";
import "./chunk-TPMEZKFX-BgCTmJ6r.js";
import { x as __name } from "./chunk-NGNAAXSQ-DsGJRZ_3.js";
// node_modules/.pnpm/@mermaid-js+parser@2.0.1/node_modules/@mermaid-js/parser/dist/mermaid-parser.core.mjs
var parsers = {};
var initializers = {
	info: /* @__PURE__ */ __name(async () => {
		const { createInfoServices: createInfoServices2 } = await import("./info-OHQRW6UA-CYQHNBDk.js");
		parsers.info = createInfoServices2().Info.parser.LangiumParser;
	}, "info"),
	packet: /* @__PURE__ */ __name(async () => {
		const { createPacketServices: createPacketServices2 } = await import("./packet-JDAUHWVQ-f8pxy7tD.js");
		parsers.packet = createPacketServices2().Packet.parser.LangiumParser;
	}, "packet"),
	pie: /* @__PURE__ */ __name(async () => {
		const { createPieServices: createPieServices2 } = await import("./pie-XZMESJXO-D-Te294A.js");
		parsers.pie = createPieServices2().Pie.parser.LangiumParser;
	}, "pie"),
	treeView: /* @__PURE__ */ __name(async () => {
		const { createTreeViewServices: createTreeViewServices2 } = await import("./treeView-D4JQ5SDB-DfxDyxTF.js");
		parsers.treeView = createTreeViewServices2().TreeView.parser.LangiumParser;
	}, "treeView"),
	architecture: /* @__PURE__ */ __name(async () => {
		const { createArchitectureServices: createArchitectureServices2 } = await import("./architecture-WOLXFQ4H-DqbsQ7n_.js");
		parsers.architecture = createArchitectureServices2().Architecture.parser.LangiumParser;
	}, "architecture"),
	gitGraph: /* @__PURE__ */ __name(async () => {
		const { createGitGraphServices: createGitGraphServices2 } = await import("./gitGraph-VSP46ZUC-DpRu7gG1.js");
		parsers.gitGraph = createGitGraphServices2().GitGraph.parser.LangiumParser;
	}, "gitGraph"),
	eventmodeling: /* @__PURE__ */ __name(async () => {
		const { createEventModelingServices: createEventModelingServices2 } = await import("./eventmodeling-K75KTNOO-Cv1GfAxA.js");
		parsers.eventmodeling = createEventModelingServices2().EventModel.parser.LangiumParser;
	}, "eventmodeling"),
	radar: /* @__PURE__ */ __name(async () => {
		const { createRadarServices: createRadarServices2 } = await import("./radar-ABXABTNO-FofRB2dN.js");
		parsers.radar = createRadarServices2().Radar.parser.LangiumParser;
	}, "radar"),
	railroad: /* @__PURE__ */ __name(async () => {
		const { createRailroadServices: createRailroadServices2 } = await import("./railroad-I3PHUGI6-FNjA65Uk.js");
		parsers.railroad = createRailroadServices2().Railroad.parser.LangiumParser;
	}, "railroad"),
	railroadEbnf: /* @__PURE__ */ __name(async () => {
		const { createRailroadEbnfServices: createRailroadEbnfServices2 } = await import("./railroad-ebnf-DWYD2UWJ-BMYhAQPZ.js");
		parsers.railroadEbnf = createRailroadEbnfServices2().RailroadEbnf.parser.LangiumParser;
	}, "railroadEbnf"),
	railroadAbnf: /* @__PURE__ */ __name(async () => {
		const { createRailroadAbnfServices: createRailroadAbnfServices2 } = await import("./railroad-abnf-LNEFI6M7-Bx4qnzux.js");
		parsers.railroadAbnf = createRailroadAbnfServices2().RailroadAbnf.parser.LangiumParser;
	}, "railroadAbnf"),
	railroadPeg: /* @__PURE__ */ __name(async () => {
		const { createRailroadPegServices: createRailroadPegServices2 } = await import("./railroad-peg-JR7BVNR7-NHSxdCaD.js");
		parsers.railroadPeg = createRailroadPegServices2().RailroadPeg.parser.LangiumParser;
	}, "railroadPeg"),
	treemap: /* @__PURE__ */ __name(async () => {
		const { createTreemapServices: createTreemapServices2 } = await import("./treemap-SAJKECNS-C4rPVaO9.js");
		parsers.treemap = createTreemapServices2().Treemap.parser.LangiumParser;
	}, "treemap"),
	wardley: /* @__PURE__ */ __name(async () => {
		const { createWardleyServices: createWardleyServices2 } = await import("./wardley-7MLQ67FV-C4zPJJx0.js");
		parsers.wardley = createWardleyServices2().Wardley.parser.LangiumParser;
	}, "wardley"),
	cynefin: /* @__PURE__ */ __name(async () => {
		const { createCynefinServices: createCynefinServices2 } = await import("./cynefin-EF2NZ3EQ-B0BA6hQH.js");
		parsers.cynefin = createCynefinServices2().Cynefin.parser.LangiumParser;
	}, "cynefin")
};
async function parse(diagramType, text) {
	const initializer = initializers[diagramType];
	if (!initializer) throw new Error(`Unknown diagram type: ${diagramType}`);
	if (!parsers[diagramType]) await initializer();
	const result = parsers[diagramType].parse(text);
	if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) throw new MermaidParseError(result);
	return result.value;
}
__name(parse, "parse");
var formatLocation = /* @__PURE__ */ __name((value) => value !== void 0 && value >= 0 ? value : "?", "formatLocation");
var MermaidParseError = class extends Error {
	constructor(result) {
		const lexerErrors = result.lexerErrors.map((err) => {
			return `Lexer error on line ${formatLocation(err.line)}, column ${formatLocation(err.column)}: ${err.message}`;
		}).join("\n");
		const parserErrors = result.parserErrors.map((err) => {
			return `Parse error on line ${formatLocation(err.token.startLine)}, column ${formatLocation(err.token.startColumn)}: ${err.message}`;
		}).join("\n");
		super(`Parsing failed: ${lexerErrors} ${parserErrors}`);
		this.result = result;
	}
	static {
		__name(this, "MermaidParseError");
	}
};
export { parse as n, MermaidParseError as t };
