import { ot as Color, st as Utils } from "./chunk-DSNLSHJZ-7cfi9yEN.js";
//#region node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/channel.js
const channel = (color, channel) => {
	return Utils.lang.round(Color.parse(color)[channel]);
};
//#endregion
export { channel as t };
