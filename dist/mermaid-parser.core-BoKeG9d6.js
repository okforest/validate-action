import { x as __name } from "./chunk-NGNAAXSQ-C6Bgy0-g.js";
import "./chunk-24IY7LWP-Dw9bIPik.js";
import "./chunk-VPELOWWC-BM9yHYRQ.js";
import "./chunk-TPMEZKFX-D2PXMv3z.js";
import "./chunk-VZTHESGH-HHRdFkxc.js";
import "./chunk-3M4EKCLJ-HVmQza3X.js";
import "./chunk-OD3NTWWA-Cxgg1Lon.js";
import "./chunk-QNH66VMT-DhbboGtH.js";
import "./chunk-VTWWFHGB-DlaCw7gq.js";
import "./chunk-ZO67DCNQ-BT-P8mlt.js";
import "./chunk-YK26KJH5-CujEUh0p.js";
import "./chunk-F6S3BTY2-CxMz1J_2.js";
import "./chunk-BP2KR52E-B9JCOMCz.js";
import "./chunk-KPI5JJXK-DhiyIKHG.js";
import "./chunk-4S7OKTRW-C7YyYeIZ.js";
import "./chunk-53FOQ5SW-CFafCFkx.js";
//#region node_modules/.pnpm/@mermaid-js+parser@2.0.1/node_modules/@mermaid-js/parser/dist/mermaid-parser.core.mjs
var parsers = {};
var initializers = {
	info: /* @__PURE__ */ __name(async () => {
		const { createInfoServices: createInfoServices2 } = await import("./info-OHQRW6UA-Cv69hJjd.js");
		parsers.info = createInfoServices2().Info.parser.LangiumParser;
	}, "info"),
	packet: /* @__PURE__ */ __name(async () => {
		const { createPacketServices: createPacketServices2 } = await import("./packet-JDAUHWVQ-i97BDRJp.js");
		parsers.packet = createPacketServices2().Packet.parser.LangiumParser;
	}, "packet"),
	pie: /* @__PURE__ */ __name(async () => {
		const { createPieServices: createPieServices2 } = await import("./pie-XZMESJXO-2SWm7k5i.js");
		parsers.pie = createPieServices2().Pie.parser.LangiumParser;
	}, "pie"),
	treeView: /* @__PURE__ */ __name(async () => {
		const { createTreeViewServices: createTreeViewServices2 } = await import("./treeView-D4JQ5SDB-C8hjLgUb.js");
		parsers.treeView = createTreeViewServices2().TreeView.parser.LangiumParser;
	}, "treeView"),
	architecture: /* @__PURE__ */ __name(async () => {
		const { createArchitectureServices: createArchitectureServices2 } = await import("./architecture-WOLXFQ4H-DRGBHx27.js");
		parsers.architecture = createArchitectureServices2().Architecture.parser.LangiumParser;
	}, "architecture"),
	gitGraph: /* @__PURE__ */ __name(async () => {
		const { createGitGraphServices: createGitGraphServices2 } = await import("./gitGraph-VSP46ZUC-Da-mHTlq.js");
		parsers.gitGraph = createGitGraphServices2().GitGraph.parser.LangiumParser;
	}, "gitGraph"),
	eventmodeling: /* @__PURE__ */ __name(async () => {
		const { createEventModelingServices: createEventModelingServices2 } = await import("./eventmodeling-K75KTNOO-BzLyFl-W.js");
		parsers.eventmodeling = createEventModelingServices2().EventModel.parser.LangiumParser;
	}, "eventmodeling"),
	radar: /* @__PURE__ */ __name(async () => {
		const { createRadarServices: createRadarServices2 } = await import("./radar-ABXABTNO-BQrbKRuc.js");
		parsers.radar = createRadarServices2().Radar.parser.LangiumParser;
	}, "radar"),
	railroad: /* @__PURE__ */ __name(async () => {
		const { createRailroadServices: createRailroadServices2 } = await import("./railroad-I3PHUGI6-B_3o6Mby.js");
		parsers.railroad = createRailroadServices2().Railroad.parser.LangiumParser;
	}, "railroad"),
	railroadEbnf: /* @__PURE__ */ __name(async () => {
		const { createRailroadEbnfServices: createRailroadEbnfServices2 } = await import("./railroad-ebnf-DWYD2UWJ-B_rwdp9Q.js");
		parsers.railroadEbnf = createRailroadEbnfServices2().RailroadEbnf.parser.LangiumParser;
	}, "railroadEbnf"),
	railroadAbnf: /* @__PURE__ */ __name(async () => {
		const { createRailroadAbnfServices: createRailroadAbnfServices2 } = await import("./railroad-abnf-LNEFI6M7-BQd-dRpL.js");
		parsers.railroadAbnf = createRailroadAbnfServices2().RailroadAbnf.parser.LangiumParser;
	}, "railroadAbnf"),
	railroadPeg: /* @__PURE__ */ __name(async () => {
		const { createRailroadPegServices: createRailroadPegServices2 } = await import("./railroad-peg-JR7BVNR7-DtrRuJBb.js");
		parsers.railroadPeg = createRailroadPegServices2().RailroadPeg.parser.LangiumParser;
	}, "railroadPeg"),
	treemap: /* @__PURE__ */ __name(async () => {
		const { createTreemapServices: createTreemapServices2 } = await import("./treemap-SAJKECNS-DpLgsrH1.js");
		parsers.treemap = createTreemapServices2().Treemap.parser.LangiumParser;
	}, "treemap"),
	wardley: /* @__PURE__ */ __name(async () => {
		const { createWardleyServices: createWardleyServices2 } = await import("./wardley-7MLQ67FV-DCIc86yY.js");
		parsers.wardley = createWardleyServices2().Wardley.parser.LangiumParser;
	}, "wardley"),
	cynefin: /* @__PURE__ */ __name(async () => {
		const { createCynefinServices: createCynefinServices2 } = await import("./cynefin-EF2NZ3EQ-W07nCyvH.js");
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
//#endregion
export { parse as n, MermaidParseError as t };
