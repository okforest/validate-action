import { n as createRailroadServices } from "./chunk-ZO67DCNQ-BPRNmRNU.js";
import { n as getStyles, r as renderer, t as db } from "./chunk-OY52VR5R-CeDhB6J7.js";
import { t as populateCommonDb } from "./chunk-JWPE2WC7-PebVHCDx.js";
import "./chunk-OHR5NZHT-DgUG5wBm.js";
import "./chunk-BG4553SI-BdAazpNh.js";
import { n as log } from "./d3-selection-ulZxE20F.js";
import { n as __name } from "./chunk-Y2CYZVJY-CLQWvZ2c.js";
import { t as MermaidParseError } from "./mermaid-parser.core-CwhkeGOe.js";
// node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/railroadDiagram-MRQ6NCDL.mjs
var langiumParser = createRailroadServices().Railroad.parser.LangiumParser;
var transformExpression = /* @__PURE__ */ __name((expr) => {
	switch (expr.$type) {
		case "RailroadTerminalExpr": return {
			type: "terminal",
			value: expr.value
		};
		case "RailroadNonTerminalExpr": return {
			type: "nonterminal",
			name: expr.name
		};
		case "RailroadSpecialExpr": return {
			type: "special",
			text: expr.text
		};
		case "RailroadSequenceExpr": {
			const elements = expr.elements.map(transformExpression);
			return elements.length === 1 ? elements[0] : {
				type: "sequence",
				elements
			};
		}
		case "RailroadChoiceExpr": {
			const alternatives = expr.alternatives.map(transformExpression);
			return alternatives.length === 1 ? alternatives[0] : {
				type: "choice",
				alternatives
			};
		}
		case "RailroadOptionalExpr": return {
			type: "optional",
			element: transformExpression(expr.element)
		};
		case "RailroadOneOrMoreExpr": return {
			type: "repetition",
			element: transformExpression(expr.element),
			min: 1,
			max: 1e400
		};
		case "RailroadZeroOrMoreExpr": return {
			type: "repetition",
			element: transformExpression(expr.element),
			min: 0,
			max: 1e400
		};
		default: throw new Error(`Unsupported railroad expression: ${expr.$type}`);
	}
}, "transformExpression");
var transformRule = /* @__PURE__ */ __name((rule) => {
	return {
		name: rule.name,
		definition: transformExpression(rule.definition)
	};
}, "transformRule");
var populateDb = /* @__PURE__ */ __name((ast) => {
	populateCommonDb(ast, db);
	if (ast.title) db.setTitle(ast.title);
	ast.rules.map((rule) => db.addRule(transformRule(rule)));
}, "populateDb");
var diagram = {
	parser: {
		parse: /* @__PURE__ */ __name((input) => {
			db.clear();
			log.debug("[Railroad Parser] Starting Langium parse");
			const result = langiumParser.parse(input);
			if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) throw new MermaidParseError(result);
			const ast = result.value;
			log.debug("[Railroad Parser] Parsed rules:", ast.rules.length);
			populateDb(ast);
			log.debug("[Railroad Parser] Parse complete");
		}, "parse"),
		parser: { yy: db }
	},
	db,
	renderer,
	styles: getStyles
};
export { diagram };
