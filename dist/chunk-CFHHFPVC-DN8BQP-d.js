import { t as insertLookDefs } from "./chunk-DUW6YSOI-Cj4cmHl2.js";
import { r as insertCluster } from "./chunk-M57EVK23-4L3lPpB4.js";
import { a as insertEdge, d as placeQueuedStepBadges, f as positionEdgeLabel, o as insertEdgeLabel, u as markers_default } from "./chunk-DQASFODM-Wm9vcRdn.js";
import { r as insertNode } from "./chunk-LEVMRMFU-2kTV3fAX.js";
import { o as labelHelper } from "./chunk-AXFCVDMN-BsYVGCXh.js";
import { f as interpolateToCurve } from "./chunk-6MUBBAK2-NvODhXbW.js";
import { s as common_default, y as getConfig } from "./chunk-BG4553SI-BdAazpNh.js";
import { n as log } from "./d3-selection-ulZxE20F.js";
import { n as __name } from "./chunk-Y2CYZVJY-CLQWvZ2c.js";
// node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-CFHHFPVC.mjs
var internalHelpers = {
	common: common_default,
	getConfig,
	insertCluster,
	insertEdge,
	insertEdgeLabel,
	insertMarkers: markers_default,
	insertNode,
	interpolateToCurve,
	labelHelper,
	log,
	positionEdgeLabel
};
var ELK_ALGORITHMS = [
	"elk.stress",
	"elk.force",
	"elk.mrtree",
	"elk.sporeOverlap",
	"elk.box",
	"elk.rectpacking"
];
var layoutAlgorithms = /* @__PURE__ */ Object.create(null);
var registerLayoutLoaders = /* @__PURE__ */ __name((loaders) => {
	for (const loader of loaders) layoutAlgorithms[loader.name] = loader;
}, "registerLayoutLoaders");
var elkLayoutLoaders = /* @__PURE__ */ __name(() => {
	const loader = /* @__PURE__ */ __name(async () => await import("./elk-XV6XMXQE-PiyJG2U2.js"), "loader");
	return [{
		name: "elk",
		loader,
		algorithm: "elk.layered"
	}, ...ELK_ALGORITHMS.map((algorithm) => ({
		name: algorithm,
		loader,
		algorithm
	}))];
}, "elkLayoutLoaders");
(/* @__PURE__ */ __name(() => {
	registerLayoutLoaders([
		{
			name: "dagre",
			loader: /* @__PURE__ */ __name(async () => await import("./dagre-SPEB5RXH-DFV0z4BV.js"), "loader")
		},
		{
			name: "swimlane",
			loader: /* @__PURE__ */ __name(async () => await import("./swimlanes-UMQ2AFYF-sjzJDECW.js"), "loader")
		},
		...[{
			name: "cose-bilkent",
			loader: /* @__PURE__ */ __name(async () => await import("./cose-bilkent-JH36ORCC-BhU4a-Yz.js"), "loader")
		}, ...elkLayoutLoaders()]
	]);
}, "registerDefaultLayoutLoaders"))();
var render = /* @__PURE__ */ __name(async (data4Layout, svg) => {
	if (!Object.hasOwn(layoutAlgorithms, data4Layout.layoutAlgorithm)) throw new Error(`Unknown layout algorithm: ${data4Layout.layoutAlgorithm}`);
	if (data4Layout.diagramId) for (const node of data4Layout.nodes) {
		const originalDomId = node.domId || node.id;
		node.domId = `${data4Layout.diagramId}-${originalDomId}`;
	}
	const layoutDefinition = layoutAlgorithms[data4Layout.layoutAlgorithm];
	const layoutRenderer = await layoutDefinition.loader();
	insertLookDefs(svg, data4Layout.config);
	const result = await layoutRenderer.render(data4Layout, svg, internalHelpers, { algorithm: layoutDefinition.algorithm });
	placeQueuedStepBadges(svg.node());
	return result;
}, "render");
var LAST_RESORT_LAYOUT = "dagre";
var getRegisteredLayoutAlgorithm = /* @__PURE__ */ __name((algorithm = "", { fallback = LAST_RESORT_LAYOUT } = {}) => {
	if (Object.hasOwn(layoutAlgorithms, algorithm)) return algorithm;
	for (const candidate of [fallback, LAST_RESORT_LAYOUT]) if (Object.hasOwn(layoutAlgorithms, candidate)) {
		log.warn(`Layout algorithm ${algorithm} is not registered. Using ${candidate} as fallback.`);
		return candidate;
	}
	throw new Error(`Neither layout algorithm ${algorithm}, ${fallback}, nor ${LAST_RESORT_LAYOUT} is registered.`);
}, "getRegisteredLayoutAlgorithm");
export { registerLayoutLoaders as n, render as r, getRegisteredLayoutAlgorithm as t };
