import { t as __commonJSMin } from "./rolldown-runtime-BVN1G_yT.js";
import { C as getDiagramTitle, H as setAccDescription, U as setAccTitle, Y as setupGraphViewbox, _ as getAccDescription, a as clear, b as getConfig2, d as defaultConfig2, q as setDiagramTitle, s as common_default, v as getAccTitle } from "./chunk-BG4553SI-BdAazpNh.js";
import { t as select } from "./d3-selection-ulZxE20F.js";
import { n as __name } from "./chunk-Y2CYZVJY-CLQWvZ2c.js";
import { C as cubehelix$1, S as rgbBasis, b as cubehelixLong, r as ordinal, w as rgb } from "./d3-scale-Cax4agTm.js";
// node_modules/.pnpm/d3-scale-chromatic@3.1.1/node_modules/d3-scale-chromatic/dist/d3-scale-chromatic.mjs
function colors(specifier) {
	var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
	while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
	return colors;
}
colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
colors("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");
colors("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");
colors("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0");
colors("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
colors("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");
colors("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");
colors("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");
colors("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");
colors("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
var Tableau10 = colors("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
var ramp$1 = (scheme) => rgbBasis(scheme[scheme.length - 1]);
ramp$1(new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(colors));
ramp$1(new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(colors));
ramp$1(new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(colors));
ramp$1(new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(colors));
ramp$1(new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(colors));
ramp$1(new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(colors));
ramp$1(new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(colors));
ramp$1(new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(colors));
ramp$1(new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(colors));
ramp$1(new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(colors));
ramp$1(new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(colors));
ramp$1(new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(colors));
ramp$1(new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(colors));
ramp$1(new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(colors));
ramp$1(new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(colors));
ramp$1(new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(colors));
ramp$1(new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(colors));
ramp$1(new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(colors));
ramp$1(new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(colors));
ramp$1(new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(colors));
ramp$1(new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(colors));
ramp$1(new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(colors));
ramp$1(new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(colors));
ramp$1(new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(colors));
ramp$1(new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(colors));
ramp$1(new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(colors));
ramp$1(new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(colors));
cubehelixLong(cubehelix$1(300, .5, 0), cubehelix$1(-240, .5, 1));
cubehelixLong(cubehelix$1(-100, .75, .35), cubehelix$1(80, 1.5, .8));
cubehelixLong(cubehelix$1(260, .75, .35), cubehelix$1(80, 1.5, .8));
cubehelix$1();
rgb();
function ramp(range) {
	var n = range.length;
	return function(t) {
		return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
	};
}
ramp(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
ramp(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
ramp(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
ramp(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
// node_modules/.pnpm/d3-array@2.12.1/node_modules/d3-array/dist/d3-array.js
var require_d3_array = /* @__PURE__ */ __commonJSMin(((exports, module, this$4) => {
	(function(global, factory) {
		typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.d3 = global.d3 || {}));
	})(this$4, (function(exports) {
		"use strict";
		function ascending(a, b) {
			return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
		}
		function bisector(f) {
			let delta = f;
			let compare = f;
			if (f.length === 1) {
				delta = (d, x) => f(d) - x;
				compare = ascendingComparator(f);
			}
			function left(a, x, lo, hi) {
				if (lo == null) lo = 0;
				if (hi == null) hi = a.length;
				while (lo < hi) {
					const mid = lo + hi >>> 1;
					if (compare(a[mid], x) < 0) lo = mid + 1;
					else hi = mid;
				}
				return lo;
			}
			function right(a, x, lo, hi) {
				if (lo == null) lo = 0;
				if (hi == null) hi = a.length;
				while (lo < hi) {
					const mid = lo + hi >>> 1;
					if (compare(a[mid], x) > 0) hi = mid;
					else lo = mid + 1;
				}
				return lo;
			}
			function center(a, x, lo, hi) {
				if (lo == null) lo = 0;
				if (hi == null) hi = a.length;
				const i = left(a, x, lo, hi - 1);
				return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
			}
			return {
				left,
				center,
				right
			};
		}
		function ascendingComparator(f) {
			return (d, x) => ascending(f(d), x);
		}
		function number(x) {
			return x === null ? NaN : +x;
		}
		function* numbers(values, valueof) {
			if (valueof === void 0) {
				for (let value of values) if (value != null && (value = +value) >= value) yield value;
			} else {
				let index = -1;
				for (let value of values) if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) yield value;
			}
		}
		const ascendingBisect = bisector(ascending);
		const bisectRight = ascendingBisect.right;
		const bisectLeft = ascendingBisect.left;
		const bisectCenter = bisector(number).center;
		function count(values, valueof) {
			let count = 0;
			if (valueof === void 0) {
				for (let value of values) if (value != null && (value = +value) >= value) ++count;
			} else {
				let index = -1;
				for (let value of values) if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) ++count;
			}
			return count;
		}
		function length$1(array) {
			return array.length | 0;
		}
		function empty(length) {
			return !(length > 0);
		}
		function arrayify(values) {
			return typeof values !== "object" || "length" in values ? values : Array.from(values);
		}
		function reducer(reduce) {
			return (values) => reduce(...values);
		}
		function cross(...values) {
			const reduce = typeof values[values.length - 1] === "function" && reducer(values.pop());
			values = values.map(arrayify);
			const lengths = values.map(length$1);
			const j = values.length - 1;
			const index = new Array(j + 1).fill(0);
			const product = [];
			if (j < 0 || lengths.some(empty)) return product;
			while (true) {
				product.push(index.map((j, i) => values[i][j]));
				let i = j;
				while (++index[i] === lengths[i]) {
					if (i === 0) return reduce ? product.map(reduce) : product;
					index[i--] = 0;
				}
			}
		}
		function cumsum(values, valueof) {
			var sum = 0, index = 0;
			return Float64Array.from(values, valueof === void 0 ? (v) => sum += +v || 0 : (v) => sum += +valueof(v, index++, values) || 0);
		}
		function descending(a, b) {
			return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
		}
		function variance(values, valueof) {
			let count = 0;
			let delta;
			let mean = 0;
			let sum = 0;
			if (valueof === void 0) {
				for (let value of values) if (value != null && (value = +value) >= value) {
					delta = value - mean;
					mean += delta / ++count;
					sum += delta * (value - mean);
				}
			} else {
				let index = -1;
				for (let value of values) if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
					delta = value - mean;
					mean += delta / ++count;
					sum += delta * (value - mean);
				}
			}
			if (count > 1) return sum / (count - 1);
		}
		function deviation(values, valueof) {
			const v = variance(values, valueof);
			return v ? Math.sqrt(v) : v;
		}
		function extent(values, valueof) {
			let min;
			let max;
			if (valueof === void 0) {
				for (const value of values) if (value != null) {
					if (min === void 0) {
						if (value >= value) min = max = value;
					} else {
						if (min > value) min = value;
						if (max < value) max = value;
					}
				}
			} else {
				let index = -1;
				for (let value of values) if ((value = valueof(value, ++index, values)) != null) {
					if (min === void 0) {
						if (value >= value) min = max = value;
					} else {
						if (min > value) min = value;
						if (max < value) max = value;
					}
				}
			}
			return [min, max];
		}
		class Adder {
			constructor() {
				this._partials = /* @__PURE__ */ new Float64Array(32);
				this._n = 0;
			}
			add(x) {
				const p = this._partials;
				let i = 0;
				for (let j = 0; j < this._n && j < 32; j++) {
					const y = p[j], hi = x + y, lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
					if (lo) p[i++] = lo;
					x = hi;
				}
				p[i] = x;
				this._n = i + 1;
				return this;
			}
			valueOf() {
				const p = this._partials;
				let n = this._n, x, y, lo, hi = 0;
				if (n > 0) {
					hi = p[--n];
					while (n > 0) {
						x = hi;
						y = p[--n];
						hi = x + y;
						lo = y - (hi - x);
						if (lo) break;
					}
					if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
						y = lo * 2;
						x = hi + y;
						if (y == x - hi) hi = x;
					}
				}
				return hi;
			}
		}
		function fsum(values, valueof) {
			const adder = new Adder();
			if (valueof === void 0) {
				for (let value of values) if (value = +value) adder.add(value);
			} else {
				let index = -1;
				for (let value of values) if (value = +valueof(value, ++index, values)) adder.add(value);
			}
			return +adder;
		}
		function fcumsum(values, valueof) {
			const adder = new Adder();
			let index = -1;
			return Float64Array.from(values, valueof === void 0 ? (v) => adder.add(+v || 0) : (v) => adder.add(+valueof(v, ++index, values) || 0));
		}
		class InternMap extends Map {
			constructor(entries, key = keyof) {
				super();
				Object.defineProperties(this, {
					_intern: { value: /* @__PURE__ */ new Map() },
					_key: { value: key }
				});
				if (entries != null) for (const [key, value] of entries) this.set(key, value);
			}
			get(key) {
				return super.get(intern_get(this, key));
			}
			has(key) {
				return super.has(intern_get(this, key));
			}
			set(key, value) {
				return super.set(intern_set(this, key), value);
			}
			delete(key) {
				return super.delete(intern_delete(this, key));
			}
		}
		class InternSet extends Set {
			constructor(values, key = keyof) {
				super();
				Object.defineProperties(this, {
					_intern: { value: /* @__PURE__ */ new Map() },
					_key: { value: key }
				});
				if (values != null) for (const value of values) this.add(value);
			}
			has(value) {
				return super.has(intern_get(this, value));
			}
			add(value) {
				return super.add(intern_set(this, value));
			}
			delete(value) {
				return super.delete(intern_delete(this, value));
			}
		}
		function intern_get({ _intern, _key }, value) {
			const key = _key(value);
			return _intern.has(key) ? _intern.get(key) : value;
		}
		function intern_set({ _intern, _key }, value) {
			const key = _key(value);
			if (_intern.has(key)) return _intern.get(key);
			_intern.set(key, value);
			return value;
		}
		function intern_delete({ _intern, _key }, value) {
			const key = _key(value);
			if (_intern.has(key)) {
				value = _intern.get(value);
				_intern.delete(key);
			}
			return value;
		}
		function keyof(value) {
			return value !== null && typeof value === "object" ? value.valueOf() : value;
		}
		function identity(x) {
			return x;
		}
		function group(values, ...keys) {
			return nest(values, identity, identity, keys);
		}
		function groups(values, ...keys) {
			return nest(values, Array.from, identity, keys);
		}
		function rollup(values, reduce, ...keys) {
			return nest(values, identity, reduce, keys);
		}
		function rollups(values, reduce, ...keys) {
			return nest(values, Array.from, reduce, keys);
		}
		function index(values, ...keys) {
			return nest(values, identity, unique, keys);
		}
		function indexes(values, ...keys) {
			return nest(values, Array.from, unique, keys);
		}
		function unique(values) {
			if (values.length !== 1) throw new Error("duplicate key");
			return values[0];
		}
		function nest(values, map, reduce, keys) {
			return (function regroup(values, i) {
				if (i >= keys.length) return reduce(values);
				const groups = new InternMap();
				const keyof = keys[i++];
				let index = -1;
				for (const value of values) {
					const key = keyof(value, ++index, values);
					const group = groups.get(key);
					if (group) group.push(value);
					else groups.set(key, [value]);
				}
				for (const [key, values] of groups) groups.set(key, regroup(values, i));
				return map(groups);
			})(values, 0);
		}
		function permute(source, keys) {
			return Array.from(keys, (key) => source[key]);
		}
		function sort(values, ...F) {
			if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
			values = Array.from(values);
			let [f = ascending] = F;
			if (f.length === 1 || F.length > 1) {
				const index = Uint32Array.from(values, (d, i) => i);
				if (F.length > 1) {
					F = F.map((f) => values.map(f));
					index.sort((i, j) => {
						for (const f of F) {
							const c = ascending(f[i], f[j]);
							if (c) return c;
						}
					});
				} else {
					f = values.map(f);
					index.sort((i, j) => ascending(f[i], f[j]));
				}
				return permute(values, index);
			}
			return values.sort(f);
		}
		function groupSort(values, reduce, key) {
			return (reduce.length === 1 ? sort(rollup(values, reduce, key), (([ak, av], [bk, bv]) => ascending(av, bv) || ascending(ak, bk))) : sort(group(values, key), (([ak, av], [bk, bv]) => reduce(av, bv) || ascending(ak, bk)))).map(([key]) => key);
		}
		var slice = Array.prototype.slice;
		function constant(x) {
			return function() {
				return x;
			};
		}
		var e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
		function ticks(start, stop, count) {
			var reverse, i = -1, n, ticks, step;
			stop = +stop, start = +start, count = +count;
			if (start === stop && count > 0) return [start];
			if (reverse = stop < start) n = start, start = stop, stop = n;
			if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];
			if (step > 0) {
				let r0 = Math.round(start / step), r1 = Math.round(stop / step);
				if (r0 * step < start) ++r0;
				if (r1 * step > stop) --r1;
				ticks = new Array(n = r1 - r0 + 1);
				while (++i < n) ticks[i] = (r0 + i) * step;
			} else {
				step = -step;
				let r0 = Math.round(start * step), r1 = Math.round(stop * step);
				if (r0 / step < start) ++r0;
				if (r1 / step > stop) --r1;
				ticks = new Array(n = r1 - r0 + 1);
				while (++i < n) ticks[i] = (r0 + i) / step;
			}
			if (reverse) ticks.reverse();
			return ticks;
		}
		function tickIncrement(start, stop, count) {
			var step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
			return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
		}
		function tickStep(start, stop, count) {
			var step0 = Math.abs(stop - start) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
			if (error >= e10) step1 *= 10;
			else if (error >= e5) step1 *= 5;
			else if (error >= e2) step1 *= 2;
			return stop < start ? -step1 : step1;
		}
		function nice(start, stop, count) {
			let prestep;
			while (true) {
				const step = tickIncrement(start, stop, count);
				if (step === prestep || step === 0 || !isFinite(step)) return [start, stop];
				else if (step > 0) {
					start = Math.floor(start / step) * step;
					stop = Math.ceil(stop / step) * step;
				} else if (step < 0) {
					start = Math.ceil(start * step) / step;
					stop = Math.floor(stop * step) / step;
				}
				prestep = step;
			}
		}
		function sturges(values) {
			return Math.ceil(Math.log(count(values)) / Math.LN2) + 1;
		}
		function bin() {
			var value = identity, domain = extent, threshold = sturges;
			function histogram(data) {
				if (!Array.isArray(data)) data = Array.from(data);
				var i, n = data.length, x, values = new Array(n);
				for (i = 0; i < n; ++i) values[i] = value(data[i], i, data);
				var xz = domain(values), x0 = xz[0], x1 = xz[1], tz = threshold(values, x0, x1);
				if (!Array.isArray(tz)) {
					const max = x1, tn = +tz;
					if (domain === extent) [x0, x1] = nice(x0, x1, tn);
					tz = ticks(x0, x1, tn);
					if (tz[tz.length - 1] >= x1) {
						if (max >= x1 && domain === extent) {
							const step = tickIncrement(x0, x1, tn);
							if (isFinite(step)) {
								if (step > 0) x1 = (Math.floor(x1 / step) + 1) * step;
								else if (step < 0) x1 = (Math.ceil(x1 * -step) + 1) / -step;
							}
						} else tz.pop();
					}
				}
				var m = tz.length;
				while (tz[0] <= x0) tz.shift(), --m;
				while (tz[m - 1] > x1) tz.pop(), --m;
				var bins = new Array(m + 1), bin;
				for (i = 0; i <= m; ++i) {
					bin = bins[i] = [];
					bin.x0 = i > 0 ? tz[i - 1] : x0;
					bin.x1 = i < m ? tz[i] : x1;
				}
				for (i = 0; i < n; ++i) {
					x = values[i];
					if (x0 <= x && x <= x1) bins[bisectRight(tz, x, 0, m)].push(data[i]);
				}
				return bins;
			}
			histogram.value = function(_) {
				return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), histogram) : value;
			};
			histogram.domain = function(_) {
				return arguments.length ? (domain = typeof _ === "function" ? _ : constant([_[0], _[1]]), histogram) : domain;
			};
			histogram.thresholds = function(_) {
				return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), histogram) : threshold;
			};
			return histogram;
		}
		function max(values, valueof) {
			let max;
			if (valueof === void 0) {
				for (const value of values) if (value != null && (max < value || max === void 0 && value >= value)) max = value;
			} else {
				let index = -1;
				for (let value of values) if ((value = valueof(value, ++index, values)) != null && (max < value || max === void 0 && value >= value)) max = value;
			}
			return max;
		}
		function min(values, valueof) {
			let min;
			if (valueof === void 0) {
				for (const value of values) if (value != null && (min > value || min === void 0 && value >= value)) min = value;
			} else {
				let index = -1;
				for (let value of values) if ((value = valueof(value, ++index, values)) != null && (min > value || min === void 0 && value >= value)) min = value;
			}
			return min;
		}
		function quickselect(array, k, left = 0, right = array.length - 1, compare = ascending) {
			while (right > left) {
				if (right - left > 600) {
					const n = right - left + 1;
					const m = k - left + 1;
					const z = Math.log(n);
					const s = .5 * Math.exp(2 * z / 3);
					const sd = .5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
					quickselect(array, k, Math.max(left, Math.floor(k - m * s / n + sd)), Math.min(right, Math.floor(k + (n - m) * s / n + sd)), compare);
				}
				const t = array[k];
				let i = left;
				let j = right;
				swap(array, left, k);
				if (compare(array[right], t) > 0) swap(array, left, right);
				while (i < j) {
					swap(array, i, j), ++i, --j;
					while (compare(array[i], t) < 0) ++i;
					while (compare(array[j], t) > 0) --j;
				}
				if (compare(array[left], t) === 0) swap(array, left, j);
				else ++j, swap(array, j, right);
				if (j <= k) left = j + 1;
				if (k <= j) right = j - 1;
			}
			return array;
		}
		function swap(array, i, j) {
			const t = array[i];
			array[i] = array[j];
			array[j] = t;
		}
		function quantile(values, p, valueof) {
			values = Float64Array.from(numbers(values, valueof));
			if (!(n = values.length)) return;
			if ((p = +p) <= 0 || n < 2) return min(values);
			if (p >= 1) return max(values);
			var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = max(quickselect(values, i0).subarray(0, i0 + 1));
			return value0 + (min(values.subarray(i0 + 1)) - value0) * (i - i0);
		}
		function quantileSorted(values, p, valueof = number) {
			if (!(n = values.length)) return;
			if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
			if (p >= 1) return +valueof(values[n - 1], n - 1, values);
			var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values);
			return value0 + (+valueof(values[i0 + 1], i0 + 1, values) - value0) * (i - i0);
		}
		function freedmanDiaconis(values, min, max) {
			return Math.ceil((max - min) / (2 * (quantile(values, .75) - quantile(values, .25)) * Math.pow(count(values), -1 / 3)));
		}
		function scott(values, min, max) {
			return Math.ceil((max - min) / (3.5 * deviation(values) * Math.pow(count(values), -1 / 3)));
		}
		function maxIndex(values, valueof) {
			let max;
			let maxIndex = -1;
			let index = -1;
			if (valueof === void 0) for (const value of values) {
				++index;
				if (value != null && (max < value || max === void 0 && value >= value)) max = value, maxIndex = index;
			}
			else for (let value of values) if ((value = valueof(value, ++index, values)) != null && (max < value || max === void 0 && value >= value)) max = value, maxIndex = index;
			return maxIndex;
		}
		function mean(values, valueof) {
			let count = 0;
			let sum = 0;
			if (valueof === void 0) {
				for (let value of values) if (value != null && (value = +value) >= value) ++count, sum += value;
			} else {
				let index = -1;
				for (let value of values) if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) ++count, sum += value;
			}
			if (count) return sum / count;
		}
		function median(values, valueof) {
			return quantile(values, .5, valueof);
		}
		function* flatten(arrays) {
			for (const array of arrays) yield* array;
		}
		function merge(arrays) {
			return Array.from(flatten(arrays));
		}
		function minIndex(values, valueof) {
			let min;
			let minIndex = -1;
			let index = -1;
			if (valueof === void 0) for (const value of values) {
				++index;
				if (value != null && (min > value || min === void 0 && value >= value)) min = value, minIndex = index;
			}
			else for (let value of values) if ((value = valueof(value, ++index, values)) != null && (min > value || min === void 0 && value >= value)) min = value, minIndex = index;
			return minIndex;
		}
		function pairs(values, pairof = pair) {
			const pairs = [];
			let previous;
			let first = false;
			for (const value of values) {
				if (first) pairs.push(pairof(previous, value));
				previous = value;
				first = true;
			}
			return pairs;
		}
		function pair(a, b) {
			return [a, b];
		}
		function range(start, stop, step) {
			start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
			var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range = new Array(n);
			while (++i < n) range[i] = start + i * step;
			return range;
		}
		function least(values, compare = ascending) {
			let min;
			let defined = false;
			if (compare.length === 1) {
				let minValue;
				for (const element of values) {
					const value = compare(element);
					if (defined ? ascending(value, minValue) < 0 : ascending(value, value) === 0) {
						min = element;
						minValue = value;
						defined = true;
					}
				}
			} else for (const value of values) if (defined ? compare(value, min) < 0 : compare(value, value) === 0) {
				min = value;
				defined = true;
			}
			return min;
		}
		function leastIndex(values, compare = ascending) {
			if (compare.length === 1) return minIndex(values, compare);
			let minValue;
			let min = -1;
			let index = -1;
			for (const value of values) {
				++index;
				if (min < 0 ? compare(value, value) === 0 : compare(value, minValue) < 0) {
					minValue = value;
					min = index;
				}
			}
			return min;
		}
		function greatest(values, compare = ascending) {
			let max;
			let defined = false;
			if (compare.length === 1) {
				let maxValue;
				for (const element of values) {
					const value = compare(element);
					if (defined ? ascending(value, maxValue) > 0 : ascending(value, value) === 0) {
						max = element;
						maxValue = value;
						defined = true;
					}
				}
			} else for (const value of values) if (defined ? compare(value, max) > 0 : compare(value, value) === 0) {
				max = value;
				defined = true;
			}
			return max;
		}
		function greatestIndex(values, compare = ascending) {
			if (compare.length === 1) return maxIndex(values, compare);
			let maxValue;
			let max = -1;
			let index = -1;
			for (const value of values) {
				++index;
				if (max < 0 ? compare(value, value) === 0 : compare(value, maxValue) > 0) {
					maxValue = value;
					max = index;
				}
			}
			return max;
		}
		function scan(values, compare) {
			const index = leastIndex(values, compare);
			return index < 0 ? void 0 : index;
		}
		var shuffle = shuffler(Math.random);
		function shuffler(random) {
			return function shuffle(array, i0 = 0, i1 = array.length) {
				let m = i1 - (i0 = +i0);
				while (m) {
					const i = random() * m-- | 0, t = array[m + i0];
					array[m + i0] = array[i + i0];
					array[i + i0] = t;
				}
				return array;
			};
		}
		function sum(values, valueof) {
			let sum = 0;
			if (valueof === void 0) {
				for (let value of values) if (value = +value) sum += value;
			} else {
				let index = -1;
				for (let value of values) if (value = +valueof(value, ++index, values)) sum += value;
			}
			return sum;
		}
		function transpose(matrix) {
			if (!(n = matrix.length)) return [];
			for (var i = -1, m = min(matrix, length), transpose = new Array(m); ++i < m;) for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) row[j] = matrix[j][i];
			return transpose;
		}
		function length(d) {
			return d.length;
		}
		function zip() {
			return transpose(arguments);
		}
		function every(values, test) {
			if (typeof test !== "function") throw new TypeError("test is not a function");
			let index = -1;
			for (const value of values) if (!test(value, ++index, values)) return false;
			return true;
		}
		function some(values, test) {
			if (typeof test !== "function") throw new TypeError("test is not a function");
			let index = -1;
			for (const value of values) if (test(value, ++index, values)) return true;
			return false;
		}
		function filter(values, test) {
			if (typeof test !== "function") throw new TypeError("test is not a function");
			const array = [];
			let index = -1;
			for (const value of values) if (test(value, ++index, values)) array.push(value);
			return array;
		}
		function map(values, mapper) {
			if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
			if (typeof mapper !== "function") throw new TypeError("mapper is not a function");
			return Array.from(values, (value, index) => mapper(value, index, values));
		}
		function reduce(values, reducer, value) {
			if (typeof reducer !== "function") throw new TypeError("reducer is not a function");
			const iterator = values[Symbol.iterator]();
			let done, next, index = -1;
			if (arguments.length < 3) {
				({done, value} = iterator.next());
				if (done) return;
				++index;
			}
			while ({done, value: next} = iterator.next(), !done) value = reducer(value, next, ++index, values);
			return value;
		}
		function reverse(values) {
			if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
			return Array.from(values).reverse();
		}
		function difference(values, ...others) {
			values = new Set(values);
			for (const other of others) for (const value of other) values.delete(value);
			return values;
		}
		function disjoint(values, other) {
			const iterator = other[Symbol.iterator](), set = /* @__PURE__ */ new Set();
			for (const v of values) {
				if (set.has(v)) return false;
				let value, done;
				while ({value, done} = iterator.next()) {
					if (done) break;
					if (Object.is(v, value)) return false;
					set.add(value);
				}
			}
			return true;
		}
		function set(values) {
			return values instanceof Set ? values : new Set(values);
		}
		function intersection(values, ...others) {
			values = new Set(values);
			others = others.map(set);
			out: for (const value of values) for (const other of others) if (!other.has(value)) {
				values.delete(value);
				continue out;
			}
			return values;
		}
		function superset(values, other) {
			const iterator = values[Symbol.iterator](), set = /* @__PURE__ */ new Set();
			for (const o of other) {
				if (set.has(o)) continue;
				let value, done;
				while ({value, done} = iterator.next()) {
					if (done) return false;
					set.add(value);
					if (Object.is(o, value)) break;
				}
			}
			return true;
		}
		function subset(values, other) {
			return superset(other, values);
		}
		function union(...others) {
			const set = /* @__PURE__ */ new Set();
			for (const other of others) for (const o of other) set.add(o);
			return set;
		}
		exports.Adder = Adder;
		exports.InternMap = InternMap;
		exports.InternSet = InternSet;
		exports.ascending = ascending;
		exports.bin = bin;
		exports.bisect = bisectRight;
		exports.bisectCenter = bisectCenter;
		exports.bisectLeft = bisectLeft;
		exports.bisectRight = bisectRight;
		exports.bisector = bisector;
		exports.count = count;
		exports.cross = cross;
		exports.cumsum = cumsum;
		exports.descending = descending;
		exports.deviation = deviation;
		exports.difference = difference;
		exports.disjoint = disjoint;
		exports.every = every;
		exports.extent = extent;
		exports.fcumsum = fcumsum;
		exports.filter = filter;
		exports.fsum = fsum;
		exports.greatest = greatest;
		exports.greatestIndex = greatestIndex;
		exports.group = group;
		exports.groupSort = groupSort;
		exports.groups = groups;
		exports.histogram = bin;
		exports.index = index;
		exports.indexes = indexes;
		exports.intersection = intersection;
		exports.least = least;
		exports.leastIndex = leastIndex;
		exports.map = map;
		exports.max = max;
		exports.maxIndex = maxIndex;
		exports.mean = mean;
		exports.median = median;
		exports.merge = merge;
		exports.min = min;
		exports.minIndex = minIndex;
		exports.nice = nice;
		exports.pairs = pairs;
		exports.permute = permute;
		exports.quantile = quantile;
		exports.quantileSorted = quantileSorted;
		exports.quickselect = quickselect;
		exports.range = range;
		exports.reduce = reduce;
		exports.reverse = reverse;
		exports.rollup = rollup;
		exports.rollups = rollups;
		exports.scan = scan;
		exports.shuffle = shuffle;
		exports.shuffler = shuffler;
		exports.some = some;
		exports.sort = sort;
		exports.subset = subset;
		exports.sum = sum;
		exports.superset = superset;
		exports.thresholdFreedmanDiaconis = freedmanDiaconis;
		exports.thresholdScott = scott;
		exports.thresholdSturges = sturges;
		exports.tickIncrement = tickIncrement;
		exports.tickStep = tickStep;
		exports.ticks = ticks;
		exports.transpose = transpose;
		exports.union = union;
		exports.variance = variance;
		exports.zip = zip;
		Object.defineProperty(exports, "__esModule", { value: true });
	}));
}));
// node_modules/.pnpm/d3-path@1.0.9/node_modules/d3-path/dist/d3-path.js
var require_d3_path = /* @__PURE__ */ __commonJSMin(((exports, module, this$3) => {
	(function(global, factory) {
		typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.d3 = global.d3 || {}));
	})(this$3, function(exports) {
		"use strict";
		var pi = Math.PI, tau = 2 * pi, epsilon = 1e-6, tauEpsilon = tau - epsilon;
		function Path() {
			this._x0 = this._y0 = this._x1 = this._y1 = null;
			this._ = "";
		}
		function path() {
			return new Path();
		}
		Path.prototype = path.prototype = {
			constructor: Path,
			moveTo: function(x, y) {
				this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
			},
			closePath: function() {
				if (this._x1 !== null) {
					this._x1 = this._x0, this._y1 = this._y0;
					this._ += "Z";
				}
			},
			lineTo: function(x, y) {
				this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
			},
			quadraticCurveTo: function(x1, y1, x, y) {
				this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
			},
			bezierCurveTo: function(x1, y1, x2, y2, x, y) {
				this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
			},
			arcTo: function(x1, y1, x2, y2, r) {
				x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
				var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
				if (r < 0) throw new Error("negative radius: " + r);
				if (this._x1 === null) this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
				else if (!(l01_2 > epsilon));
				else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
				else {
					var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
					if (Math.abs(t01 - 1) > epsilon) this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
					this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
				}
			},
			arc: function(x, y, r, a0, a1, ccw) {
				x = +x, y = +y, r = +r, ccw = !!ccw;
				var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
				if (r < 0) throw new Error("negative radius: " + r);
				if (this._x1 === null) this._ += "M" + x0 + "," + y0;
				else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) this._ += "L" + x0 + "," + y0;
				if (!r) return;
				if (da < 0) da = da % tau + tau;
				if (da > tauEpsilon) this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
				else if (da > epsilon) this._ += "A" + r + "," + r + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
			},
			rect: function(x, y, w, h) {
				this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
			},
			toString: function() {
				return this._;
			}
		};
		exports.path = path;
		Object.defineProperty(exports, "__esModule", { value: true });
	});
}));
// node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/dist/d3-shape.js
var require_d3_shape = /* @__PURE__ */ __commonJSMin(((exports, module, this$2) => {
	(function(global, factory) {
		typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_d3_path()) : typeof define === "function" && define.amd ? define(["exports", "d3-path"], factory) : (global = global || self, factory(global.d3 = global.d3 || {}, global.d3));
	})(this$2, function(exports, d3Path) {
		"use strict";
		function constant(x) {
			return function constant() {
				return x;
			};
		}
		var abs = Math.abs;
		var atan2 = Math.atan2;
		var cos = Math.cos;
		var max = Math.max;
		var min = Math.min;
		var sin = Math.sin;
		var sqrt = Math.sqrt;
		var epsilon = 1e-12;
		var pi = Math.PI;
		var halfPi = pi / 2;
		var tau = 2 * pi;
		function acos(x) {
			return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
		}
		function asin(x) {
			return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
		}
		function arcInnerRadius(d) {
			return d.innerRadius;
		}
		function arcOuterRadius(d) {
			return d.outerRadius;
		}
		function arcStartAngle(d) {
			return d.startAngle;
		}
		function arcEndAngle(d) {
			return d.endAngle;
		}
		function arcPadAngle(d) {
			return d && d.padAngle;
		}
		function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
			var x10 = x1 - x0, y10 = y1 - y0, x32 = x3 - x2, y32 = y3 - y2, t = y32 * x10 - x32 * y10;
			if (t * t < epsilon) return;
			t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
			return [x0 + t * x10, y0 + t * y10];
		}
		function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
			var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * sqrt(max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
			if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
			return {
				cx: cx0,
				cy: cy0,
				x01: -ox,
				y01: -oy,
				x11: cx0 * (r1 / r - 1),
				y11: cy0 * (r1 / r - 1)
			};
		}
		function arc() {
			var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null;
			function arc() {
				var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi, a1 = endAngle.apply(this, arguments) - halfPi, da = abs(a1 - a0), cw = a1 > a0;
				if (!context) context = buffer = d3Path.path();
				if (r1 < r0) r = r1, r1 = r0, r0 = r;
				if (!(r1 > epsilon)) context.moveTo(0, 0);
				else if (da > tau - epsilon) {
					context.moveTo(r1 * cos(a0), r1 * sin(a0));
					context.arc(0, 0, r1, a0, a1, !cw);
					if (r0 > epsilon) {
						context.moveTo(r0 * cos(a1), r0 * sin(a1));
						context.arc(0, 0, r0, a1, a0, cw);
					}
				} else {
					var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > epsilon && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)), rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t0, t1;
					if (rp > epsilon) {
						var p0 = asin(rp / r0 * sin(ap)), p1 = asin(rp / r1 * sin(ap));
						if ((da0 -= p0 * 2) > epsilon) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
						else da0 = 0, a00 = a10 = (a0 + a1) / 2;
						if ((da1 -= p1 * 2) > epsilon) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
						else da1 = 0, a01 = a11 = (a0 + a1) / 2;
					}
					var x01 = r1 * cos(a01), y01 = r1 * sin(a01), x10 = r0 * cos(a10), y10 = r0 * sin(a10);
					if (rc > epsilon) {
						var x11 = r1 * cos(a11), y11 = r1 * sin(a11), x00 = r0 * cos(a00), y00 = r0 * sin(a00), oc;
						if (da < pi && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
							var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2), lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
							rc0 = min(rc, (r0 - lc) / (kc - 1));
							rc1 = min(rc, (r1 - lc) / (kc + 1));
						}
					}
					if (!(da1 > epsilon)) context.moveTo(x01, y01);
					else if (rc1 > epsilon) {
						t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
						t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
						context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
						if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);
						else {
							context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
							context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
							context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
						}
					} else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
					if (!(r0 > epsilon) || !(da0 > epsilon)) context.lineTo(x10, y10);
					else if (rc0 > epsilon) {
						t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
						t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
						context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
						if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);
						else {
							context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
							context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
							context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
						}
					} else context.arc(0, 0, r0, a10, a00, cw);
				}
				context.closePath();
				if (buffer) return context = null, buffer + "" || null;
			}
			arc.centroid = function() {
				var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
				return [cos(a) * r, sin(a) * r];
			};
			arc.innerRadius = function(_) {
				return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant(+_), arc) : innerRadius;
			};
			arc.outerRadius = function(_) {
				return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant(+_), arc) : outerRadius;
			};
			arc.cornerRadius = function(_) {
				return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant(+_), arc) : cornerRadius;
			};
			arc.padRadius = function(_) {
				return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant(+_), arc) : padRadius;
			};
			arc.startAngle = function(_) {
				return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), arc) : startAngle;
			};
			arc.endAngle = function(_) {
				return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), arc) : endAngle;
			};
			arc.padAngle = function(_) {
				return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), arc) : padAngle;
			};
			arc.context = function(_) {
				return arguments.length ? (context = _ == null ? null : _, arc) : context;
			};
			return arc;
		}
		function Linear(context) {
			this._context = context;
		}
		Linear.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._point = 0;
			},
			lineEnd: function() {
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1: this._point = 2;
					default: this._context.lineTo(x, y);
				}
			}
		};
		function curveLinear(context) {
			return new Linear(context);
		}
		function x(p) {
			return p[0];
		}
		function y(p) {
			return p[1];
		}
		function line() {
			var x$1 = x, y$1 = y, defined = constant(true), context = null, curve = curveLinear, output = null;
			function line(data) {
				var i, n = data.length, d, defined0 = false, buffer;
				if (context == null) output = curve(buffer = d3Path.path());
				for (i = 0; i <= n; ++i) {
					if (!(i < n && defined(d = data[i], i, data)) === defined0) {
						if (defined0 = !defined0) output.lineStart();
						else output.lineEnd();
					}
					if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
				}
				if (buffer) return output = null, buffer + "" || null;
			}
			line.x = function(_) {
				return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant(+_), line) : x$1;
			};
			line.y = function(_) {
				return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant(+_), line) : y$1;
			};
			line.defined = function(_) {
				return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), line) : defined;
			};
			line.curve = function(_) {
				return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
			};
			line.context = function(_) {
				return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
			};
			return line;
		}
		function area() {
			var x0 = x, x1 = null, y0 = constant(0), y1 = y, defined = constant(true), context = null, curve = curveLinear, output = null;
			function area(data) {
				var i, j, k, n = data.length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
				if (context == null) output = curve(buffer = d3Path.path());
				for (i = 0; i <= n; ++i) {
					if (!(i < n && defined(d = data[i], i, data)) === defined0) {
						if (defined0 = !defined0) {
							j = i;
							output.areaStart();
							output.lineStart();
						} else {
							output.lineEnd();
							output.lineStart();
							for (k = i - 1; k >= j; --k) output.point(x0z[k], y0z[k]);
							output.lineEnd();
							output.areaEnd();
						}
					}
					if (defined0) {
						x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
						output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
					}
				}
				if (buffer) return output = null, buffer + "" || null;
			}
			function arealine() {
				return line().defined(defined).curve(curve).context(context);
			}
			area.x = function(_) {
				return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), x1 = null, area) : x0;
			};
			area.x0 = function(_) {
				return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), area) : x0;
			};
			area.x1 = function(_) {
				return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : x1;
			};
			area.y = function(_) {
				return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), y1 = null, area) : y0;
			};
			area.y0 = function(_) {
				return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), area) : y0;
			};
			area.y1 = function(_) {
				return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : y1;
			};
			area.lineX0 = area.lineY0 = function() {
				return arealine().x(x0).y(y0);
			};
			area.lineY1 = function() {
				return arealine().x(x0).y(y1);
			};
			area.lineX1 = function() {
				return arealine().x(x1).y(y0);
			};
			area.defined = function(_) {
				return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), area) : defined;
			};
			area.curve = function(_) {
				return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
			};
			area.context = function(_) {
				return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
			};
			return area;
		}
		function descending(a, b) {
			return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
		}
		function identity(d) {
			return d;
		}
		function pie() {
			var value = identity, sortValues = descending, sort = null, startAngle = constant(0), endAngle = constant(tau), padAngle = constant(0);
			function pie(data) {
				var i, n = data.length, j, k, sum = 0, index = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da = Math.min(tau, Math.max(-tau, endAngle.apply(this, arguments) - a0)), a1, p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)), pa = p * (da < 0 ? -1 : 1), v;
				for (i = 0; i < n; ++i) if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) sum += v;
				if (sortValues != null) index.sort(function(i, j) {
					return sortValues(arcs[i], arcs[j]);
				});
				else if (sort != null) index.sort(function(i, j) {
					return sort(data[i], data[j]);
				});
				for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
					data: data[j],
					index: i,
					value: v,
					startAngle: a0,
					endAngle: a1,
					padAngle: p
				};
				return arcs;
			}
			pie.value = function(_) {
				return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), pie) : value;
			};
			pie.sortValues = function(_) {
				return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
			};
			pie.sort = function(_) {
				return arguments.length ? (sort = _, sortValues = null, pie) : sort;
			};
			pie.startAngle = function(_) {
				return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), pie) : startAngle;
			};
			pie.endAngle = function(_) {
				return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), pie) : endAngle;
			};
			pie.padAngle = function(_) {
				return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), pie) : padAngle;
			};
			return pie;
		}
		var curveRadialLinear = curveRadial(curveLinear);
		function Radial(curve) {
			this._curve = curve;
		}
		Radial.prototype = {
			areaStart: function() {
				this._curve.areaStart();
			},
			areaEnd: function() {
				this._curve.areaEnd();
			},
			lineStart: function() {
				this._curve.lineStart();
			},
			lineEnd: function() {
				this._curve.lineEnd();
			},
			point: function(a, r) {
				this._curve.point(r * Math.sin(a), r * -Math.cos(a));
			}
		};
		function curveRadial(curve) {
			function radial(context) {
				return new Radial(curve(context));
			}
			radial._curve = curve;
			return radial;
		}
		function lineRadial(l) {
			var c = l.curve;
			l.angle = l.x, delete l.x;
			l.radius = l.y, delete l.y;
			l.curve = function(_) {
				return arguments.length ? c(curveRadial(_)) : c()._curve;
			};
			return l;
		}
		function lineRadial$1() {
			return lineRadial(line().curve(curveRadialLinear));
		}
		function areaRadial() {
			var a = area().curve(curveRadialLinear), c = a.curve, x0 = a.lineX0, x1 = a.lineX1, y0 = a.lineY0, y1 = a.lineY1;
			a.angle = a.x, delete a.x;
			a.startAngle = a.x0, delete a.x0;
			a.endAngle = a.x1, delete a.x1;
			a.radius = a.y, delete a.y;
			a.innerRadius = a.y0, delete a.y0;
			a.outerRadius = a.y1, delete a.y1;
			a.lineStartAngle = function() {
				return lineRadial(x0());
			}, delete a.lineX0;
			a.lineEndAngle = function() {
				return lineRadial(x1());
			}, delete a.lineX1;
			a.lineInnerRadius = function() {
				return lineRadial(y0());
			}, delete a.lineY0;
			a.lineOuterRadius = function() {
				return lineRadial(y1());
			}, delete a.lineY1;
			a.curve = function(_) {
				return arguments.length ? c(curveRadial(_)) : c()._curve;
			};
			return a;
		}
		function pointRadial(x, y) {
			return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
		}
		var slice = Array.prototype.slice;
		function linkSource(d) {
			return d.source;
		}
		function linkTarget(d) {
			return d.target;
		}
		function link(curve) {
			var source = linkSource, target = linkTarget, x$1 = x, y$1 = y, context = null;
			function link() {
				var buffer, argv = slice.call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
				if (!context) context = buffer = d3Path.path();
				curve(context, +x$1.apply(this, (argv[0] = s, argv)), +y$1.apply(this, argv), +x$1.apply(this, (argv[0] = t, argv)), +y$1.apply(this, argv));
				if (buffer) return context = null, buffer + "" || null;
			}
			link.source = function(_) {
				return arguments.length ? (source = _, link) : source;
			};
			link.target = function(_) {
				return arguments.length ? (target = _, link) : target;
			};
			link.x = function(_) {
				return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant(+_), link) : x$1;
			};
			link.y = function(_) {
				return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant(+_), link) : y$1;
			};
			link.context = function(_) {
				return arguments.length ? (context = _ == null ? null : _, link) : context;
			};
			return link;
		}
		function curveHorizontal(context, x0, y0, x1, y1) {
			context.moveTo(x0, y0);
			context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
		}
		function curveVertical(context, x0, y0, x1, y1) {
			context.moveTo(x0, y0);
			context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
		}
		function curveRadial$1(context, x0, y0, x1, y1) {
			var p0 = pointRadial(x0, y0), p1 = pointRadial(x0, y0 = (y0 + y1) / 2), p2 = pointRadial(x1, y0), p3 = pointRadial(x1, y1);
			context.moveTo(p0[0], p0[1]);
			context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
		}
		function linkHorizontal() {
			return link(curveHorizontal);
		}
		function linkVertical() {
			return link(curveVertical);
		}
		function linkRadial() {
			var l = link(curveRadial$1);
			l.angle = l.x, delete l.x;
			l.radius = l.y, delete l.y;
			return l;
		}
		var circle = { draw: function(context, size) {
			var r = Math.sqrt(size / pi);
			context.moveTo(r, 0);
			context.arc(0, 0, r, 0, tau);
		} };
		var cross = { draw: function(context, size) {
			var r = Math.sqrt(size / 5) / 2;
			context.moveTo(-3 * r, -r);
			context.lineTo(-r, -r);
			context.lineTo(-r, -3 * r);
			context.lineTo(r, -3 * r);
			context.lineTo(r, -r);
			context.lineTo(3 * r, -r);
			context.lineTo(3 * r, r);
			context.lineTo(r, r);
			context.lineTo(r, 3 * r);
			context.lineTo(-r, 3 * r);
			context.lineTo(-r, r);
			context.lineTo(-3 * r, r);
			context.closePath();
		} };
		var tan30 = Math.sqrt(1 / 3), tan30_2 = tan30 * 2;
		var diamond = { draw: function(context, size) {
			var y = Math.sqrt(size / tan30_2), x = y * tan30;
			context.moveTo(0, -y);
			context.lineTo(x, 0);
			context.lineTo(0, y);
			context.lineTo(-x, 0);
			context.closePath();
		} };
		var ka = .8908130915292852, kr = Math.sin(pi / 10) / Math.sin(7 * pi / 10), kx = Math.sin(tau / 10) * kr, ky = -Math.cos(tau / 10) * kr;
		var star = { draw: function(context, size) {
			var r = Math.sqrt(size * ka), x = kx * r, y = ky * r;
			context.moveTo(0, -r);
			context.lineTo(x, y);
			for (var i = 1; i < 5; ++i) {
				var a = tau * i / 5, c = Math.cos(a), s = Math.sin(a);
				context.lineTo(s * r, -c * r);
				context.lineTo(c * x - s * y, s * x + c * y);
			}
			context.closePath();
		} };
		var square = { draw: function(context, size) {
			var w = Math.sqrt(size), x = -w / 2;
			context.rect(x, x, w, w);
		} };
		var sqrt3 = Math.sqrt(3);
		var triangle = { draw: function(context, size) {
			var y = -Math.sqrt(size / (sqrt3 * 3));
			context.moveTo(0, y * 2);
			context.lineTo(-sqrt3 * y, -y);
			context.lineTo(sqrt3 * y, -y);
			context.closePath();
		} };
		var c = -.5, s = Math.sqrt(3) / 2, k = 1 / Math.sqrt(12), a = (k / 2 + 1) * 3;
		var wye = { draw: function(context, size) {
			var r = Math.sqrt(size / a), x0 = r / 2, y0 = r * k, x1 = x0, y1 = r * k + r, x2 = -x1, y2 = y1;
			context.moveTo(x0, y0);
			context.lineTo(x1, y1);
			context.lineTo(x2, y2);
			context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
			context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
			context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
			context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
			context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
			context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
			context.closePath();
		} };
		var symbols = [
			circle,
			cross,
			diamond,
			square,
			star,
			triangle,
			wye
		];
		function symbol() {
			var type = constant(circle), size = constant(64), context = null;
			function symbol() {
				var buffer;
				if (!context) context = buffer = d3Path.path();
				type.apply(this, arguments).draw(context, +size.apply(this, arguments));
				if (buffer) return context = null, buffer + "" || null;
			}
			symbol.type = function(_) {
				return arguments.length ? (type = typeof _ === "function" ? _ : constant(_), symbol) : type;
			};
			symbol.size = function(_) {
				return arguments.length ? (size = typeof _ === "function" ? _ : constant(+_), symbol) : size;
			};
			symbol.context = function(_) {
				return arguments.length ? (context = _ == null ? null : _, symbol) : context;
			};
			return symbol;
		}
		function noop() {}
		function point(that, x, y) {
			that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
		}
		function Basis(context) {
			this._context = context;
		}
		Basis.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._y0 = this._y1 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 3: point(this, this._x1, this._y1);
					case 2: this._context.lineTo(this._x1, this._y1);
				}
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3;
						this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
					default: point(this, x, y);
				}
				this._x0 = this._x1, this._x1 = x;
				this._y0 = this._y1, this._y1 = y;
			}
		};
		function basis(context) {
			return new Basis(context);
		}
		function BasisClosed(context) {
			this._context = context;
		}
		BasisClosed.prototype = {
			areaStart: noop,
			areaEnd: noop,
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 1:
						this._context.moveTo(this._x2, this._y2);
						this._context.closePath();
						break;
					case 2:
						this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
						this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
						this._context.closePath();
						break;
					case 3:
						this.point(this._x2, this._y2);
						this.point(this._x3, this._y3);
						this.point(this._x4, this._y4);
				}
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._x2 = x, this._y2 = y;
						break;
					case 1:
						this._point = 2;
						this._x3 = x, this._y3 = y;
						break;
					case 2:
						this._point = 3;
						this._x4 = x, this._y4 = y;
						this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6);
						break;
					default: point(this, x, y);
				}
				this._x0 = this._x1, this._x1 = x;
				this._y0 = this._y1, this._y1 = y;
			}
		};
		function basisClosed(context) {
			return new BasisClosed(context);
		}
		function BasisOpen(context) {
			this._context = context;
		}
		BasisOpen.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._y0 = this._y1 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3;
						var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6;
						this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
						break;
					case 3: this._point = 4;
					default: point(this, x, y);
				}
				this._x0 = this._x1, this._x1 = x;
				this._y0 = this._y1, this._y1 = y;
			}
		};
		function basisOpen(context) {
			return new BasisOpen(context);
		}
		function Bundle(context, beta) {
			this._basis = new Basis(context);
			this._beta = beta;
		}
		Bundle.prototype = {
			lineStart: function() {
				this._x = [];
				this._y = [];
				this._basis.lineStart();
			},
			lineEnd: function() {
				var x = this._x, y = this._y, j = x.length - 1;
				if (j > 0) {
					var x0 = x[0], y0 = y[0], dx = x[j] - x0, dy = y[j] - y0, i = -1, t;
					while (++i <= j) {
						t = i / j;
						this._basis.point(this._beta * x[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y[i] + (1 - this._beta) * (y0 + t * dy));
					}
				}
				this._x = this._y = null;
				this._basis.lineEnd();
			},
			point: function(x, y) {
				this._x.push(+x);
				this._y.push(+y);
			}
		};
		var bundle = (function custom(beta) {
			function bundle(context) {
				return beta === 1 ? new Basis(context) : new Bundle(context, beta);
			}
			bundle.beta = function(beta) {
				return custom(+beta);
			};
			return bundle;
		})(.85);
		function point$1(that, x, y) {
			that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2);
		}
		function Cardinal(context, tension) {
			this._context = context;
			this._k = (1 - tension) / 6;
		}
		Cardinal.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 2:
						this._context.lineTo(this._x2, this._y2);
						break;
					case 3: point$1(this, this._x1, this._y1);
				}
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1:
						this._point = 2;
						this._x1 = x, this._y1 = y;
						break;
					case 2: this._point = 3;
					default: point$1(this, x, y);
				}
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		var cardinal = (function custom(tension) {
			function cardinal(context) {
				return new Cardinal(context, tension);
			}
			cardinal.tension = function(tension) {
				return custom(+tension);
			};
			return cardinal;
		})(0);
		function CardinalClosed(context, tension) {
			this._context = context;
			this._k = (1 - tension) / 6;
		}
		CardinalClosed.prototype = {
			areaStart: noop,
			areaEnd: noop,
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 1:
						this._context.moveTo(this._x3, this._y3);
						this._context.closePath();
						break;
					case 2:
						this._context.lineTo(this._x3, this._y3);
						this._context.closePath();
						break;
					case 3:
						this.point(this._x3, this._y3);
						this.point(this._x4, this._y4);
						this.point(this._x5, this._y5);
				}
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._x3 = x, this._y3 = y;
						break;
					case 1:
						this._point = 2;
						this._context.moveTo(this._x4 = x, this._y4 = y);
						break;
					case 2:
						this._point = 3;
						this._x5 = x, this._y5 = y;
						break;
					default: point$1(this, x, y);
				}
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		var cardinalClosed = (function custom(tension) {
			function cardinal(context) {
				return new CardinalClosed(context, tension);
			}
			cardinal.tension = function(tension) {
				return custom(+tension);
			};
			return cardinal;
		})(0);
		function CardinalOpen(context, tension) {
			this._context = context;
			this._k = (1 - tension) / 6;
		}
		CardinalOpen.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3;
						this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
						break;
					case 3: this._point = 4;
					default: point$1(this, x, y);
				}
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		var cardinalOpen = (function custom(tension) {
			function cardinal(context) {
				return new CardinalOpen(context, tension);
			}
			cardinal.tension = function(tension) {
				return custom(+tension);
			};
			return cardinal;
		})(0);
		function point$2(that, x, y) {
			var x1 = that._x1, y1 = that._y1, x2 = that._x2, y2 = that._y2;
			if (that._l01_a > epsilon) {
				var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
				x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
				y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
			}
			if (that._l23_a > epsilon) {
				var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
				x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
				y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
			}
			that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
		}
		function CatmullRom(context, alpha) {
			this._context = context;
			this._alpha = alpha;
		}
		CatmullRom.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
				this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 2:
						this._context.lineTo(this._x2, this._y2);
						break;
					case 3: this.point(this._x2, this._y2);
				}
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				if (this._point) {
					var x23 = this._x2 - x, y23 = this._y2 - y;
					this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
				}
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1:
						this._point = 2;
						break;
					case 2: this._point = 3;
					default: point$2(this, x, y);
				}
				this._l01_a = this._l12_a, this._l12_a = this._l23_a;
				this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		var catmullRom = (function custom(alpha) {
			function catmullRom(context) {
				return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
			}
			catmullRom.alpha = function(alpha) {
				return custom(+alpha);
			};
			return catmullRom;
		})(.5);
		function CatmullRomClosed(context, alpha) {
			this._context = context;
			this._alpha = alpha;
		}
		CatmullRomClosed.prototype = {
			areaStart: noop,
			areaEnd: noop,
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
				this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 1:
						this._context.moveTo(this._x3, this._y3);
						this._context.closePath();
						break;
					case 2:
						this._context.lineTo(this._x3, this._y3);
						this._context.closePath();
						break;
					case 3:
						this.point(this._x3, this._y3);
						this.point(this._x4, this._y4);
						this.point(this._x5, this._y5);
				}
			},
			point: function(x, y) {
				x = +x, y = +y;
				if (this._point) {
					var x23 = this._x2 - x, y23 = this._y2 - y;
					this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
				}
				switch (this._point) {
					case 0:
						this._point = 1;
						this._x3 = x, this._y3 = y;
						break;
					case 1:
						this._point = 2;
						this._context.moveTo(this._x4 = x, this._y4 = y);
						break;
					case 2:
						this._point = 3;
						this._x5 = x, this._y5 = y;
						break;
					default: point$2(this, x, y);
				}
				this._l01_a = this._l12_a, this._l12_a = this._l23_a;
				this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		var catmullRomClosed = (function custom(alpha) {
			function catmullRom(context) {
				return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
			}
			catmullRom.alpha = function(alpha) {
				return custom(+alpha);
			};
			return catmullRom;
		})(.5);
		function CatmullRomOpen(context, alpha) {
			this._context = context;
			this._alpha = alpha;
		}
		CatmullRomOpen.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
				this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
			},
			lineEnd: function() {
				if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				if (this._point) {
					var x23 = this._x2 - x, y23 = this._y2 - y;
					this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
				}
				switch (this._point) {
					case 0:
						this._point = 1;
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3;
						this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
						break;
					case 3: this._point = 4;
					default: point$2(this, x, y);
				}
				this._l01_a = this._l12_a, this._l12_a = this._l23_a;
				this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		var catmullRomOpen = (function custom(alpha) {
			function catmullRom(context) {
				return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
			}
			catmullRom.alpha = function(alpha) {
				return custom(+alpha);
			};
			return catmullRom;
		})(.5);
		function LinearClosed(context) {
			this._context = context;
		}
		LinearClosed.prototype = {
			areaStart: noop,
			areaEnd: noop,
			lineStart: function() {
				this._point = 0;
			},
			lineEnd: function() {
				if (this._point) this._context.closePath();
			},
			point: function(x, y) {
				x = +x, y = +y;
				if (this._point) this._context.lineTo(x, y);
				else this._point = 1, this._context.moveTo(x, y);
			}
		};
		function linearClosed(context) {
			return new LinearClosed(context);
		}
		function sign(x) {
			return x < 0 ? -1 : 1;
		}
		function slope3(that, x2, y2) {
			var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
			return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), .5 * Math.abs(p)) || 0;
		}
		function slope2(that, t) {
			var h = that._x1 - that._x0;
			return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
		}
		function point$3(that, t0, t1) {
			var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
			that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
		}
		function MonotoneX(context) {
			this._context = context;
		}
		MonotoneX.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 2:
						this._context.lineTo(this._x1, this._y1);
						break;
					case 3: point$3(this, this._t0, slope2(this, this._t0));
				}
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				var t1 = NaN;
				x = +x, y = +y;
				if (x === this._x1 && y === this._y1) return;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3;
						point$3(this, slope2(this, t1 = slope3(this, x, y)), t1);
						break;
					default: point$3(this, this._t0, t1 = slope3(this, x, y));
				}
				this._x0 = this._x1, this._x1 = x;
				this._y0 = this._y1, this._y1 = y;
				this._t0 = t1;
			}
		};
		function MonotoneY(context) {
			this._context = new ReflectContext(context);
		}
		(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
			MonotoneX.prototype.point.call(this, y, x);
		};
		function ReflectContext(context) {
			this._context = context;
		}
		ReflectContext.prototype = {
			moveTo: function(x, y) {
				this._context.moveTo(y, x);
			},
			closePath: function() {
				this._context.closePath();
			},
			lineTo: function(x, y) {
				this._context.lineTo(y, x);
			},
			bezierCurveTo: function(x1, y1, x2, y2, x, y) {
				this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
			}
		};
		function monotoneX(context) {
			return new MonotoneX(context);
		}
		function monotoneY(context) {
			return new MonotoneY(context);
		}
		function Natural(context) {
			this._context = context;
		}
		Natural.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x = [];
				this._y = [];
			},
			lineEnd: function() {
				var x = this._x, y = this._y, n = x.length;
				if (n) {
					this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
					if (n === 2) this._context.lineTo(x[1], y[1]);
					else {
						var px = controlPoints(x), py = controlPoints(y);
						for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
					}
				}
				if (this._line || this._line !== 0 && n === 1) this._context.closePath();
				this._line = 1 - this._line;
				this._x = this._y = null;
			},
			point: function(x, y) {
				this._x.push(+x);
				this._y.push(+y);
			}
		};
		function controlPoints(x) {
			var i, n = x.length - 1, m, a = new Array(n), b = new Array(n), r = new Array(n);
			a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
			for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
			a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
			for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
			a[n - 1] = r[n - 1] / b[n - 1];
			for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
			b[n - 1] = (x[n] + a[n - 1]) / 2;
			for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
			return [a, b];
		}
		function natural(context) {
			return new Natural(context);
		}
		function Step(context, t) {
			this._context = context;
			this._t = t;
		}
		Step.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x = this._y = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1: this._point = 2;
					default: if (this._t <= 0) {
						this._context.lineTo(this._x, y);
						this._context.lineTo(x, y);
					} else {
						var x1 = this._x * (1 - this._t) + x * this._t;
						this._context.lineTo(x1, this._y);
						this._context.lineTo(x1, y);
					}
				}
				this._x = x, this._y = y;
			}
		};
		function step(context) {
			return new Step(context, .5);
		}
		function stepBefore(context) {
			return new Step(context, 0);
		}
		function stepAfter(context) {
			return new Step(context, 1);
		}
		function none(series, order) {
			if (!((n = series.length) > 1)) return;
			for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
				s0 = s1, s1 = series[order[i]];
				for (j = 0; j < m; ++j) s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
			}
		}
		function none$1(series) {
			var n = series.length, o = new Array(n);
			while (--n >= 0) o[n] = n;
			return o;
		}
		function stackValue(d, key) {
			return d[key];
		}
		function stack() {
			var keys = constant([]), order = none$1, offset = none, value = stackValue;
			function stack(data) {
				var kz = keys.apply(this, arguments), i, m = data.length, n = kz.length, sz = new Array(n), oz;
				for (i = 0; i < n; ++i) {
					for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
						si[j] = sij = [0, +value(data[j], ki, j, data)];
						sij.data = data[j];
					}
					si.key = ki;
				}
				for (i = 0, oz = order(sz); i < n; ++i) sz[oz[i]].index = i;
				offset(sz, oz);
				return sz;
			}
			stack.keys = function(_) {
				return arguments.length ? (keys = typeof _ === "function" ? _ : constant(slice.call(_)), stack) : keys;
			};
			stack.value = function(_) {
				return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), stack) : value;
			};
			stack.order = function(_) {
				return arguments.length ? (order = _ == null ? none$1 : typeof _ === "function" ? _ : constant(slice.call(_)), stack) : order;
			};
			stack.offset = function(_) {
				return arguments.length ? (offset = _ == null ? none : _, stack) : offset;
			};
			return stack;
		}
		function expand(series, order) {
			if (!((n = series.length) > 0)) return;
			for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
				for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
				if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
			}
			none(series, order);
		}
		function diverging(series, order) {
			if (!((n = series.length) > 0)) return;
			for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) for (yp = yn = 0, i = 0; i < n; ++i) if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) d[0] = yp, d[1] = yp += dy;
			else if (dy < 0) d[1] = yn, d[0] = yn += dy;
			else d[0] = 0, d[1] = dy;
		}
		function silhouette(series, order) {
			if (!((n = series.length) > 0)) return;
			for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
				for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
				s0[j][1] += s0[j][0] = -y / 2;
			}
			none(series, order);
		}
		function wiggle(series, order) {
			if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
			for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
				for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
					var si = series[order[i]], sij0 = si[j][1] || 0, s3 = (sij0 - (si[j - 1][1] || 0)) / 2;
					for (var k = 0; k < i; ++k) {
						var sk = series[order[k]], skj0 = sk[j][1] || 0, skj1 = sk[j - 1][1] || 0;
						s3 += skj0 - skj1;
					}
					s1 += sij0, s2 += s3 * sij0;
				}
				s0[j - 1][1] += s0[j - 1][0] = y;
				if (s1) y -= s2 / s1;
			}
			s0[j - 1][1] += s0[j - 1][0] = y;
			none(series, order);
		}
		function appearance(series) {
			var peaks = series.map(peak);
			return none$1(series).sort(function(a, b) {
				return peaks[a] - peaks[b];
			});
		}
		function peak(series) {
			var i = -1, j = 0, n = series.length, vi, vj = -1e400;
			while (++i < n) if ((vi = +series[i][1]) > vj) vj = vi, j = i;
			return j;
		}
		function ascending(series) {
			var sums = series.map(sum);
			return none$1(series).sort(function(a, b) {
				return sums[a] - sums[b];
			});
		}
		function sum(series) {
			var s = 0, i = -1, n = series.length, v;
			while (++i < n) if (v = +series[i][1]) s += v;
			return s;
		}
		function descending$1(series) {
			return ascending(series).reverse();
		}
		function insideOut(series) {
			var n = series.length, i, j, sums = series.map(sum), order = appearance(series), top = 0, bottom = 0, tops = [], bottoms = [];
			for (i = 0; i < n; ++i) {
				j = order[i];
				if (top < bottom) {
					top += sums[j];
					tops.push(j);
				} else {
					bottom += sums[j];
					bottoms.push(j);
				}
			}
			return bottoms.reverse().concat(tops);
		}
		function reverse(series) {
			return none$1(series).reverse();
		}
		exports.arc = arc;
		exports.area = area;
		exports.areaRadial = areaRadial;
		exports.curveBasis = basis;
		exports.curveBasisClosed = basisClosed;
		exports.curveBasisOpen = basisOpen;
		exports.curveBundle = bundle;
		exports.curveCardinal = cardinal;
		exports.curveCardinalClosed = cardinalClosed;
		exports.curveCardinalOpen = cardinalOpen;
		exports.curveCatmullRom = catmullRom;
		exports.curveCatmullRomClosed = catmullRomClosed;
		exports.curveCatmullRomOpen = catmullRomOpen;
		exports.curveLinear = curveLinear;
		exports.curveLinearClosed = linearClosed;
		exports.curveMonotoneX = monotoneX;
		exports.curveMonotoneY = monotoneY;
		exports.curveNatural = natural;
		exports.curveStep = step;
		exports.curveStepAfter = stepAfter;
		exports.curveStepBefore = stepBefore;
		exports.line = line;
		exports.lineRadial = lineRadial$1;
		exports.linkHorizontal = linkHorizontal;
		exports.linkRadial = linkRadial;
		exports.linkVertical = linkVertical;
		exports.pie = pie;
		exports.pointRadial = pointRadial;
		exports.radialArea = areaRadial;
		exports.radialLine = lineRadial$1;
		exports.stack = stack;
		exports.stackOffsetDiverging = diverging;
		exports.stackOffsetExpand = expand;
		exports.stackOffsetNone = none;
		exports.stackOffsetSilhouette = silhouette;
		exports.stackOffsetWiggle = wiggle;
		exports.stackOrderAppearance = appearance;
		exports.stackOrderAscending = ascending;
		exports.stackOrderDescending = descending$1;
		exports.stackOrderInsideOut = insideOut;
		exports.stackOrderNone = none$1;
		exports.stackOrderReverse = reverse;
		exports.symbol = symbol;
		exports.symbolCircle = circle;
		exports.symbolCross = cross;
		exports.symbolDiamond = diamond;
		exports.symbolSquare = square;
		exports.symbolStar = star;
		exports.symbolTriangle = triangle;
		exports.symbolWye = wye;
		exports.symbols = symbols;
		Object.defineProperty(exports, "__esModule", { value: true });
	});
}));
// node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/sankeyDiagram-WGJFYUXA.mjs
var import_d3_sankey = (/* @__PURE__ */ __commonJSMin(((exports, module, this$1) => {
	(function(global, factory) {
		typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_d3_array(), require_d3_shape()) : typeof define === "function" && define.amd ? define([
			"exports",
			"d3-array",
			"d3-shape"
		], factory) : (global = global || self, factory(global.d3 = global.d3 || {}, global.d3, global.d3));
	})(this$1, function(exports, d3Array, d3Shape) {
		"use strict";
		function targetDepth(d) {
			return d.target.depth;
		}
		function left(node) {
			return node.depth;
		}
		function right(node, n) {
			return n - 1 - node.height;
		}
		function justify(node, n) {
			return node.sourceLinks.length ? node.depth : n - 1;
		}
		function center(node) {
			return node.targetLinks.length ? node.depth : node.sourceLinks.length ? d3Array.min(node.sourceLinks, targetDepth) - 1 : 0;
		}
		function constant(x) {
			return function() {
				return x;
			};
		}
		function ascendingSourceBreadth(a, b) {
			return ascendingBreadth(a.source, b.source) || a.index - b.index;
		}
		function ascendingTargetBreadth(a, b) {
			return ascendingBreadth(a.target, b.target) || a.index - b.index;
		}
		function ascendingBreadth(a, b) {
			return a.y0 - b.y0;
		}
		function value(d) {
			return d.value;
		}
		function defaultId(d) {
			return d.index;
		}
		function defaultNodes(graph) {
			return graph.nodes;
		}
		function defaultLinks(graph) {
			return graph.links;
		}
		function find(nodeById, id) {
			const node = nodeById.get(id);
			if (!node) throw new Error("missing: " + id);
			return node;
		}
		function computeLinkBreadths({ nodes }) {
			for (const node of nodes) {
				let y0 = node.y0;
				let y1 = y0;
				for (const link of node.sourceLinks) {
					link.y0 = y0 + link.width / 2;
					y0 += link.width;
				}
				for (const link of node.targetLinks) {
					link.y1 = y1 + link.width / 2;
					y1 += link.width;
				}
			}
		}
		function Sankey() {
			let x0 = 0, y0 = 0, x1 = 1, y1 = 1;
			let dx = 24;
			let dy = 8, py;
			let id = defaultId;
			let align = justify;
			let sort;
			let linkSort;
			let nodes = defaultNodes;
			let links = defaultLinks;
			let iterations = 6;
			function sankey() {
				const graph = {
					nodes: nodes.apply(null, arguments),
					links: links.apply(null, arguments)
				};
				computeNodeLinks(graph);
				computeNodeValues(graph);
				computeNodeDepths(graph);
				computeNodeHeights(graph);
				computeNodeBreadths(graph);
				computeLinkBreadths(graph);
				return graph;
			}
			sankey.update = function(graph) {
				computeLinkBreadths(graph);
				return graph;
			};
			sankey.nodeId = function(_) {
				return arguments.length ? (id = typeof _ === "function" ? _ : constant(_), sankey) : id;
			};
			sankey.nodeAlign = function(_) {
				return arguments.length ? (align = typeof _ === "function" ? _ : constant(_), sankey) : align;
			};
			sankey.nodeSort = function(_) {
				return arguments.length ? (sort = _, sankey) : sort;
			};
			sankey.nodeWidth = function(_) {
				return arguments.length ? (dx = +_, sankey) : dx;
			};
			sankey.nodePadding = function(_) {
				return arguments.length ? (dy = py = +_, sankey) : dy;
			};
			sankey.nodes = function(_) {
				return arguments.length ? (nodes = typeof _ === "function" ? _ : constant(_), sankey) : nodes;
			};
			sankey.links = function(_) {
				return arguments.length ? (links = typeof _ === "function" ? _ : constant(_), sankey) : links;
			};
			sankey.linkSort = function(_) {
				return arguments.length ? (linkSort = _, sankey) : linkSort;
			};
			sankey.size = function(_) {
				return arguments.length ? (x0 = y0 = 0, x1 = +_[0], y1 = +_[1], sankey) : [x1 - x0, y1 - y0];
			};
			sankey.extent = function(_) {
				return arguments.length ? (x0 = +_[0][0], x1 = +_[1][0], y0 = +_[0][1], y1 = +_[1][1], sankey) : [[x0, y0], [x1, y1]];
			};
			sankey.iterations = function(_) {
				return arguments.length ? (iterations = +_, sankey) : iterations;
			};
			function computeNodeLinks({ nodes, links }) {
				for (const [i, node] of nodes.entries()) {
					node.index = i;
					node.sourceLinks = [];
					node.targetLinks = [];
				}
				const nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d]));
				for (const [i, link] of links.entries()) {
					link.index = i;
					let { source, target } = link;
					if (typeof source !== "object") source = link.source = find(nodeById, source);
					if (typeof target !== "object") target = link.target = find(nodeById, target);
					source.sourceLinks.push(link);
					target.targetLinks.push(link);
				}
				if (linkSort != null) for (const { sourceLinks, targetLinks } of nodes) {
					sourceLinks.sort(linkSort);
					targetLinks.sort(linkSort);
				}
			}
			function computeNodeValues({ nodes }) {
				for (const node of nodes) node.value = node.fixedValue === void 0 ? Math.max(d3Array.sum(node.sourceLinks, value), d3Array.sum(node.targetLinks, value)) : node.fixedValue;
			}
			function computeNodeDepths({ nodes }) {
				const n = nodes.length;
				let current = new Set(nodes);
				let next = /* @__PURE__ */ new Set();
				let x = 0;
				while (current.size) {
					for (const node of current) {
						node.depth = x;
						for (const { target } of node.sourceLinks) next.add(target);
					}
					if (++x > n) throw new Error("circular link");
					current = next;
					next = /* @__PURE__ */ new Set();
				}
			}
			function computeNodeHeights({ nodes }) {
				const n = nodes.length;
				let current = new Set(nodes);
				let next = /* @__PURE__ */ new Set();
				let x = 0;
				while (current.size) {
					for (const node of current) {
						node.height = x;
						for (const { source } of node.targetLinks) next.add(source);
					}
					if (++x > n) throw new Error("circular link");
					current = next;
					next = /* @__PURE__ */ new Set();
				}
			}
			function computeNodeLayers({ nodes }) {
				const x = d3Array.max(nodes, (d) => d.depth) + 1;
				const kx = (x1 - x0 - dx) / (x - 1);
				const columns = new Array(x);
				for (const node of nodes) {
					const i = Math.max(0, Math.min(x - 1, Math.floor(align.call(null, node, x))));
					node.layer = i;
					node.x0 = x0 + i * kx;
					node.x1 = node.x0 + dx;
					if (columns[i]) columns[i].push(node);
					else columns[i] = [node];
				}
				if (sort) for (const column of columns) column.sort(sort);
				return columns;
			}
			function initializeNodeBreadths(columns) {
				const ky = d3Array.min(columns, (c) => (y1 - y0 - (c.length - 1) * py) / d3Array.sum(c, value));
				for (const nodes of columns) {
					let y = y0;
					for (const node of nodes) {
						node.y0 = y;
						node.y1 = y + node.value * ky;
						y = node.y1 + py;
						for (const link of node.sourceLinks) link.width = link.value * ky;
					}
					y = (y1 - y + py) / (nodes.length + 1);
					for (let i = 0; i < nodes.length; ++i) {
						const node = nodes[i];
						node.y0 += y * (i + 1);
						node.y1 += y * (i + 1);
					}
					reorderLinks(nodes);
				}
			}
			function computeNodeBreadths(graph) {
				const columns = computeNodeLayers(graph);
				py = Math.min(dy, (y1 - y0) / (d3Array.max(columns, (c) => c.length) - 1));
				initializeNodeBreadths(columns);
				for (let i = 0; i < iterations; ++i) {
					const alpha = Math.pow(.99, i);
					const beta = Math.max(1 - alpha, (i + 1) / iterations);
					relaxRightToLeft(columns, alpha, beta);
					relaxLeftToRight(columns, alpha, beta);
				}
			}
			function relaxLeftToRight(columns, alpha, beta) {
				for (let i = 1, n = columns.length; i < n; ++i) {
					const column = columns[i];
					for (const target of column) {
						let y = 0;
						let w = 0;
						for (const { source, value } of target.targetLinks) {
							let v = value * (target.layer - source.layer);
							y += targetTop(source, target) * v;
							w += v;
						}
						if (!(w > 0)) continue;
						let dy = (y / w - target.y0) * alpha;
						target.y0 += dy;
						target.y1 += dy;
						reorderNodeLinks(target);
					}
					if (sort === void 0) column.sort(ascendingBreadth);
					resolveCollisions(column, beta);
				}
			}
			function relaxRightToLeft(columns, alpha, beta) {
				for (let i = columns.length - 2; i >= 0; --i) {
					const column = columns[i];
					for (const source of column) {
						let y = 0;
						let w = 0;
						for (const { target, value } of source.sourceLinks) {
							let v = value * (target.layer - source.layer);
							y += sourceTop(source, target) * v;
							w += v;
						}
						if (!(w > 0)) continue;
						let dy = (y / w - source.y0) * alpha;
						source.y0 += dy;
						source.y1 += dy;
						reorderNodeLinks(source);
					}
					if (sort === void 0) column.sort(ascendingBreadth);
					resolveCollisions(column, beta);
				}
			}
			function resolveCollisions(nodes, alpha) {
				const i = nodes.length >> 1;
				const subject = nodes[i];
				resolveCollisionsBottomToTop(nodes, subject.y0 - py, i - 1, alpha);
				resolveCollisionsTopToBottom(nodes, subject.y1 + py, i + 1, alpha);
				resolveCollisionsBottomToTop(nodes, y1, nodes.length - 1, alpha);
				resolveCollisionsTopToBottom(nodes, y0, 0, alpha);
			}
			function resolveCollisionsTopToBottom(nodes, y, i, alpha) {
				for (; i < nodes.length; ++i) {
					const node = nodes[i];
					const dy = (y - node.y0) * alpha;
					if (dy > 1e-6) node.y0 += dy, node.y1 += dy;
					y = node.y1 + py;
				}
			}
			function resolveCollisionsBottomToTop(nodes, y, i, alpha) {
				for (; i >= 0; --i) {
					const node = nodes[i];
					const dy = (node.y1 - y) * alpha;
					if (dy > 1e-6) node.y0 -= dy, node.y1 -= dy;
					y = node.y0 - py;
				}
			}
			function reorderNodeLinks({ sourceLinks, targetLinks }) {
				if (linkSort === void 0) {
					for (const { source: { sourceLinks } } of targetLinks) sourceLinks.sort(ascendingTargetBreadth);
					for (const { target: { targetLinks } } of sourceLinks) targetLinks.sort(ascendingSourceBreadth);
				}
			}
			function reorderLinks(nodes) {
				if (linkSort === void 0) for (const { sourceLinks, targetLinks } of nodes) {
					sourceLinks.sort(ascendingTargetBreadth);
					targetLinks.sort(ascendingSourceBreadth);
				}
			}
			function targetTop(source, target) {
				let y = source.y0 - (source.sourceLinks.length - 1) * py / 2;
				for (const { target: node, width } of source.sourceLinks) {
					if (node === target) break;
					y += width + py;
				}
				for (const { source: node, width } of target.targetLinks) {
					if (node === source) break;
					y -= width;
				}
				return y;
			}
			function sourceTop(source, target) {
				let y = target.y0 - (target.targetLinks.length - 1) * py / 2;
				for (const { source: node, width } of target.targetLinks) {
					if (node === source) break;
					y += width + py;
				}
				for (const { target: node, width } of source.sourceLinks) {
					if (node === target) break;
					y -= width;
				}
				return y;
			}
			return sankey;
		}
		function horizontalSource(d) {
			return [d.source.x1, d.y0];
		}
		function horizontalTarget(d) {
			return [d.target.x0, d.y1];
		}
		function sankeyLinkHorizontal() {
			return d3Shape.linkHorizontal().source(horizontalSource).target(horizontalTarget);
		}
		exports.sankey = Sankey;
		exports.sankeyCenter = center;
		exports.sankeyJustify = justify;
		exports.sankeyLeft = left;
		exports.sankeyLinkHorizontal = sankeyLinkHorizontal;
		exports.sankeyRight = right;
		Object.defineProperty(exports, "__esModule", { value: true });
	});
})))();
var parser = (function() {
	var o = /* @__PURE__ */ __name(function(k, v, o2, l) {
		for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v);
		return o2;
	}, "o"), $V0 = [1, 9], $V1 = [1, 10], $V2 = [
		1,
		5,
		10,
		12
	];
	var parser2 = {
		trace: /* @__PURE__ */ __name(function trace() {}, "trace"),
		yy: {},
		symbols_: {
			"error": 2,
			"start": 3,
			"SANKEY": 4,
			"NEWLINE": 5,
			"csv": 6,
			"opt_eof": 7,
			"record": 8,
			"csv_tail": 9,
			"EOF": 10,
			"field[source]": 11,
			"COMMA": 12,
			"field[target]": 13,
			"field[value]": 14,
			"field": 15,
			"escaped": 16,
			"non_escaped": 17,
			"DQUOTE": 18,
			"ESCAPED_TEXT": 19,
			"NON_ESCAPED_TEXT": 20,
			"$accept": 0,
			"$end": 1
		},
		terminals_: {
			2: "error",
			4: "SANKEY",
			5: "NEWLINE",
			10: "EOF",
			11: "field[source]",
			12: "COMMA",
			13: "field[target]",
			14: "field[value]",
			18: "DQUOTE",
			19: "ESCAPED_TEXT",
			20: "NON_ESCAPED_TEXT"
		},
		productions_: [
			0,
			[3, 4],
			[6, 2],
			[9, 2],
			[9, 0],
			[7, 1],
			[7, 0],
			[8, 5],
			[15, 1],
			[15, 1],
			[16, 3],
			[17, 1]
		],
		performAction: /* @__PURE__ */ __name(function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
			var $0 = $$.length - 1;
			switch (yystate) {
				case 7:
					const source = yy.findOrCreateNode($$[$0 - 4].trim().replaceAll("\"\"", "\""));
					const target = yy.findOrCreateNode($$[$0 - 2].trim().replaceAll("\"\"", "\""));
					const value = parseFloat($$[$0].trim());
					yy.addLink(source, target, value);
					break;
				case 8:
				case 9:
				case 11:
					this.$ = $$[$0];
					break;
				case 10: this.$ = $$[$0 - 1];
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: [1, 2]
			},
			{ 1: [3] },
			{ 5: [1, 3] },
			{
				6: 4,
				8: 5,
				15: 6,
				16: 7,
				17: 8,
				18: $V0,
				20: $V1
			},
			{
				1: [2, 6],
				7: 11,
				10: [1, 12]
			},
			o($V1, [2, 4], {
				9: 13,
				5: [1, 14]
			}),
			{ 12: [1, 15] },
			o($V2, [2, 8]),
			o($V2, [2, 9]),
			{ 19: [1, 16] },
			o($V2, [2, 11]),
			{ 1: [2, 1] },
			{ 1: [2, 5] },
			o($V1, [2, 2]),
			{
				6: 17,
				8: 5,
				15: 6,
				16: 7,
				17: 8,
				18: $V0,
				20: $V1
			},
			{
				15: 18,
				16: 7,
				17: 8,
				18: $V0,
				20: $V1
			},
			{ 18: [1, 19] },
			o($V1, [2, 3]),
			{ 12: [1, 20] },
			o($V2, [2, 10]),
			{
				15: 21,
				16: 7,
				17: 8,
				18: $V0,
				20: $V1
			},
			o([
				1,
				5,
				10
			], [2, 7])
		],
		defaultActions: {
			11: [2, 1],
			12: [2, 5]
		},
		parseError: /* @__PURE__ */ __name(function parseError(str, hash) {
			if (hash.recoverable) this.trace(str);
			else {
				var error = new Error(str);
				error.hash = hash;
				throw error;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function parse(input) {
			var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
			var args = lstack.slice.call(arguments, 1);
			var lexer2 = Object.create(this.lexer);
			var sharedState = { yy: {} };
			for (var k in this.yy) if (Object.prototype.hasOwnProperty.call(this.yy, k)) sharedState.yy[k] = this.yy[k];
			lexer2.setInput(input, sharedState.yy);
			sharedState.yy.lexer = lexer2;
			sharedState.yy.parser = this;
			if (typeof lexer2.yylloc == "undefined") lexer2.yylloc = {};
			var yyloc = lexer2.yylloc;
			lstack.push(yyloc);
			var ranges = lexer2.options && lexer2.options.ranges;
			if (typeof sharedState.yy.parseError === "function") this.parseError = sharedState.yy.parseError;
			else this.parseError = Object.getPrototypeOf(this).parseError;
			function popStack(n) {
				stack.length = stack.length - 2 * n;
				vstack.length = vstack.length - n;
				lstack.length = lstack.length - n;
			}
			__name(popStack, "popStack");
			function lex() {
				var token = tstack.pop() || lexer2.lex() || EOF;
				if (typeof token !== "number") {
					if (token instanceof Array) {
						tstack = token;
						token = tstack.pop();
					}
					token = self.symbols_[token] || token;
				}
				return token;
			}
			__name(lex, "lex");
			var symbol, preErrorSymbol, state, action, r, yyval = {}, p, len, newState, expected;
			while (true) {
				state = stack[stack.length - 1];
				if (this.defaultActions[state]) action = this.defaultActions[state];
				else {
					if (symbol === null || typeof symbol == "undefined") symbol = lex();
					action = table[state] && table[state][symbol];
				}
				if (typeof action === "undefined" || !action.length || !action[0]) {
					var errStr = "";
					expected = [];
					for (p in table[state]) if (this.terminals_[p] && p > TERROR) expected.push("'" + this.terminals_[p] + "'");
					if (lexer2.showPosition) errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
					else errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
					this.parseError(errStr, {
						text: lexer2.match,
						token: this.terminals_[symbol] || symbol,
						line: lexer2.yylineno,
						loc: yyloc,
						expected
					});
				}
				if (action[0] instanceof Array && action.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
				switch (action[0]) {
					case 1:
						stack.push(symbol);
						vstack.push(lexer2.yytext);
						lstack.push(lexer2.yylloc);
						stack.push(action[1]);
						symbol = null;
						if (!preErrorSymbol) {
							yyleng = lexer2.yyleng;
							yytext = lexer2.yytext;
							yylineno = lexer2.yylineno;
							yyloc = lexer2.yylloc;
							if (recovering > 0) recovering--;
						} else {
							symbol = preErrorSymbol;
							preErrorSymbol = null;
						}
						break;
					case 2:
						len = this.productions_[action[1]][1];
						yyval.$ = vstack[vstack.length - len];
						yyval._$ = {
							first_line: lstack[lstack.length - (len || 1)].first_line,
							last_line: lstack[lstack.length - 1].last_line,
							first_column: lstack[lstack.length - (len || 1)].first_column,
							last_column: lstack[lstack.length - 1].last_column
						};
						if (ranges) yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
						r = this.performAction.apply(yyval, [
							yytext,
							yyleng,
							yylineno,
							sharedState.yy,
							action[1],
							vstack,
							lstack
						].concat(args));
						if (typeof r !== "undefined") return r;
						if (len) {
							stack = stack.slice(0, -1 * len * 2);
							vstack = vstack.slice(0, -1 * len);
							lstack = lstack.slice(0, -1 * len);
						}
						stack.push(this.productions_[action[1]][0]);
						vstack.push(yyval.$);
						lstack.push(yyval._$);
						newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
						stack.push(newState);
						break;
					case 3: return true;
				}
			}
			return true;
		}, "parse")
	};
	parser2.lexer = /* @__PURE__ */ (function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ __name(function parseError(str, hash) {
				if (this.yy.parser) this.yy.parser.parseError(str, hash);
				else throw new Error(str);
			}, "parseError"),
			setInput: /* @__PURE__ */ __name(function(input, yy) {
				this.yy = yy || this.yy || {};
				this._input = input;
				this._more = this._backtrack = this.done = false;
				this.yylineno = this.yyleng = 0;
				this.yytext = this.matched = this.match = "";
				this.conditionStack = ["INITIAL"];
				this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				};
				if (this.options.ranges) this.yylloc.range = [0, 0];
				this.offset = 0;
				return this;
			}, "setInput"),
			input: /* @__PURE__ */ __name(function() {
				var ch = this._input[0];
				this.yytext += ch;
				this.yyleng++;
				this.offset++;
				this.match += ch;
				this.matched += ch;
				if (ch.match(/(?:\r\n?|\n).*/g)) {
					this.yylineno++;
					this.yylloc.last_line++;
				} else this.yylloc.last_column++;
				if (this.options.ranges) this.yylloc.range[1]++;
				this._input = this._input.slice(1);
				return ch;
			}, "input"),
			unput: /* @__PURE__ */ __name(function(ch) {
				var len = ch.length;
				var lines = ch.split(/(?:\r\n?|\n)/g);
				this._input = ch + this._input;
				this.yytext = this.yytext.substr(0, this.yytext.length - len);
				this.offset -= len;
				var oldLines = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1);
				this.matched = this.matched.substr(0, this.matched.length - 1);
				if (lines.length - 1) this.yylineno -= lines.length - 1;
				var r = this.yylloc.range;
				this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
				};
				if (this.options.ranges) this.yylloc.range = [r[0], r[0] + this.yyleng - len];
				this.yyleng = this.yytext.length;
				return this;
			}, "unput"),
			more: /* @__PURE__ */ __name(function() {
				this._more = true;
				return this;
			}, "more"),
			reject: /* @__PURE__ */ __name(function() {
				if (this.options.backtrack_lexer) this._backtrack = true;
				else return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
				return this;
			}, "reject"),
			less: /* @__PURE__ */ __name(function(n) {
				this.unput(this.match.slice(n));
			}, "less"),
			pastInput: /* @__PURE__ */ __name(function() {
				var past = this.matched.substr(0, this.matched.length - this.match.length);
				return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ __name(function() {
				var next = this.match;
				if (next.length < 20) next += this._input.substr(0, 20 - next.length);
				return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ __name(function() {
				var pre = this.pastInput();
				var c = new Array(pre.length + 1).join("-");
				return pre + this.upcomingInput() + "\n" + c + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ __name(function(match, indexed_rule) {
				var token, lines, backup;
				if (this.options.backtrack_lexer) {
					backup = {
						yylineno: this.yylineno,
						yylloc: {
							first_line: this.yylloc.first_line,
							last_line: this.last_line,
							first_column: this.yylloc.first_column,
							last_column: this.yylloc.last_column
						},
						yytext: this.yytext,
						match: this.match,
						matches: this.matches,
						matched: this.matched,
						yyleng: this.yyleng,
						offset: this.offset,
						_more: this._more,
						_input: this._input,
						yy: this.yy,
						conditionStack: this.conditionStack.slice(0),
						done: this.done
					};
					if (this.options.ranges) backup.yylloc.range = this.yylloc.range.slice(0);
				}
				lines = match[0].match(/(?:\r\n?|\n).*/g);
				if (lines) this.yylineno += lines.length;
				this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
				};
				this.yytext += match[0];
				this.match += match[0];
				this.matches = match;
				this.yyleng = this.yytext.length;
				if (this.options.ranges) this.yylloc.range = [this.offset, this.offset += this.yyleng];
				this._more = false;
				this._backtrack = false;
				this._input = this._input.slice(match[0].length);
				this.matched += match[0];
				token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
				if (this.done && this._input) this.done = false;
				if (token) return token;
				else if (this._backtrack) {
					for (var k in backup) this[k] = backup[k];
					return false;
				}
				return false;
			}, "test_match"),
			next: /* @__PURE__ */ __name(function() {
				if (this.done) return this.EOF;
				if (!this._input) this.done = true;
				var token, match, tempMatch, index;
				if (!this._more) {
					this.yytext = "";
					this.match = "";
				}
				var rules = this._currentRules();
				for (var i = 0; i < rules.length; i++) {
					tempMatch = this._input.match(this.rules[rules[i]]);
					if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
						match = tempMatch;
						index = i;
						if (this.options.backtrack_lexer) {
							token = this.test_match(tempMatch, rules[i]);
							if (token !== false) return token;
							else if (this._backtrack) {
								match = false;
								continue;
							} else return false;
						} else if (!this.options.flex) break;
					}
				}
				if (match) {
					token = this.test_match(match, rules[index]);
					if (token !== false) return token;
					return false;
				}
				if (this._input === "") return this.EOF;
				else return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ __name(function lex() {
				var r = this.next();
				if (r) return r;
				else return this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ __name(function begin(condition) {
				this.conditionStack.push(condition);
			}, "begin"),
			popState: /* @__PURE__ */ __name(function popState() {
				if (this.conditionStack.length - 1 > 0) return this.conditionStack.pop();
				else return this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ __name(function _currentRules() {
				if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
				else return this.conditions["INITIAL"].rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ __name(function topState(n) {
				n = this.conditionStack.length - 1 - Math.abs(n || 0);
				if (n >= 0) return this.conditionStack[n];
				else return "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ __name(function pushState(condition) {
				this.begin(condition);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ __name(function stateStackSize() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: { "case-insensitive": true },
			performAction: /* @__PURE__ */ __name(function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
				switch ($avoiding_name_collisions) {
					case 0:
						this.pushState("csv");
						return 4;
					case 1:
						this.pushState("csv");
						return 4;
					case 2: return 10;
					case 3: return 5;
					case 4: return 12;
					case 5:
						this.pushState("escaped_text");
						return 18;
					case 6: return 20;
					case 7:
						this.popState("escaped_text");
						return 18;
					case 8: return 19;
				}
			}, "anonymous"),
			rules: [
				/^(?:sankey-beta\b)/i,
				/^(?:sankey\b)/i,
				/^(?:$)/i,
				/^(?:((\u000D\u000A)|(\u000A)))/i,
				/^(?:(\u002C))/i,
				/^(?:(\u0022))/i,
				/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,
				/^(?:(\u0022)(?!(\u0022)))/i,
				/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i
			],
			conditions: {
				"csv": {
					"rules": [
						2,
						3,
						4,
						5,
						6,
						7,
						8
					],
					"inclusive": false
				},
				"escaped_text": {
					"rules": [7, 8],
					"inclusive": false
				},
				"INITIAL": {
					"rules": [
						0,
						1,
						2,
						3,
						4,
						5,
						6,
						7,
						8
					],
					"inclusive": true
				}
			}
		};
	})();
	function Parser() {
		this.yy = {};
	}
	__name(Parser, "Parser");
	Parser.prototype = parser2;
	parser2.Parser = Parser;
	return new Parser();
})();
parser.parser = parser;
var sankey_default = parser;
var links = [];
var nodes = [];
var nodesMap = /* @__PURE__ */ new Map();
var clear2 = /* @__PURE__ */ __name(() => {
	links = [];
	nodes = [];
	nodesMap = /* @__PURE__ */ new Map();
	clear();
}, "clear");
var SankeyLink = class {
	constructor(source, target, value = 0) {
		this.source = source;
		this.target = target;
		this.value = value;
	}
	static {
		__name(this, "SankeyLink");
	}
};
var addLink = /* @__PURE__ */ __name((source, target, value) => {
	links.push(new SankeyLink(source, target, value));
}, "addLink");
var SankeyNode = class {
	constructor(ID) {
		this.ID = ID;
	}
	static {
		__name(this, "SankeyNode");
	}
};
var sankeyDB_default = {
	nodesMap,
	getConfig: /* @__PURE__ */ __name(() => getConfig2().sankey, "getConfig"),
	getNodes: /* @__PURE__ */ __name(() => nodes, "getNodes"),
	getLinks: /* @__PURE__ */ __name(() => links, "getLinks"),
	getGraph: /* @__PURE__ */ __name(() => ({
		nodes: nodes.map((node) => ({ id: node.ID })),
		links: links.map((link) => ({
			source: link.source.ID,
			target: link.target.ID,
			value: link.value
		}))
	}), "getGraph"),
	addLink,
	findOrCreateNode: /* @__PURE__ */ __name((ID) => {
		ID = common_default.sanitizeText(ID, getConfig2());
		let node = nodesMap.get(ID);
		if (node === void 0) {
			node = new SankeyNode(ID);
			nodesMap.set(ID, node);
			nodes.push(node);
		}
		return node;
	}, "findOrCreateNode"),
	getAccTitle,
	setAccTitle,
	getAccDescription,
	setAccDescription,
	getDiagramTitle,
	setDiagramTitle,
	clear: clear2
};
var Uid = class _Uid {
	static {
		__name(this, "Uid");
	}
	static {
		this.count = 0;
	}
	static next(name) {
		return new _Uid(name + ++_Uid.count);
	}
	constructor(id) {
		this.id = id;
		this.href = `#${id}`;
	}
	toString() {
		return "url(" + this.href + ")";
	}
};
var alignmentsMap = {
	left: import_d3_sankey.sankeyLeft,
	right: import_d3_sankey.sankeyRight,
	center: import_d3_sankey.sankeyCenter,
	justify: import_d3_sankey.sankeyJustify
};
var findCentralNodeLayer = /* @__PURE__ */ __name((nodes2) => {
	let maxValue = 0;
	let centralLayer = 0;
	for (const node of nodes2) {
		const value = node.value ?? 0;
		if (value > maxValue) {
			maxValue = value;
			centralLayer = node.layer ?? 0;
		}
	}
	return centralLayer;
}, "findCentralNodeLayer");
var sankeyRenderer_default = { draw: /* @__PURE__ */ __name(function(text, id, _version, diagObj) {
	const { securityLevel, sankey: conf } = getConfig2();
	const defaultSankeyConfig = defaultConfig2.sankey;
	let sandboxElement;
	if (securityLevel === "sandbox") sandboxElement = select("#i" + id);
	const root = securityLevel === "sandbox" ? select(sandboxElement.nodes()[0].contentDocument.body) : select("body");
	const svg = securityLevel === "sandbox" ? root.select(`[id="${id}"]`) : select(`[id="${id}"]`);
	const width = conf?.width ?? defaultSankeyConfig.width;
	const height = conf?.height ?? defaultSankeyConfig.width;
	const useMaxWidth = conf?.useMaxWidth ?? defaultSankeyConfig.useMaxWidth;
	const nodeAlignment = conf?.nodeAlignment ?? defaultSankeyConfig.nodeAlignment;
	const prefix = conf?.prefix ?? defaultSankeyConfig.prefix;
	const suffix = conf?.suffix ?? defaultSankeyConfig.suffix;
	const showValues = conf?.showValues ?? defaultSankeyConfig.showValues;
	const nodeWidth = conf?.nodeWidth ?? defaultSankeyConfig.nodeWidth ?? 10;
	const nodePadding = conf?.nodePadding ?? defaultSankeyConfig.nodePadding ?? 12;
	const labelStyle = conf?.labelStyle ?? defaultSankeyConfig.labelStyle ?? "legacy";
	const nodeColors = conf?.nodeColors ?? {};
	const graph = diagObj.db.getGraph();
	const nodeAlign = alignmentsMap[nodeAlignment];
	(0, import_d3_sankey.sankey)().nodeId((d) => d.id).nodeWidth(nodeWidth).nodePadding(nodePadding + (showValues ? 15 : 0)).nodeAlign(nodeAlign).extent([[0, 0], [width, height]])(graph);
	const centralNodeLayer = findCentralNodeLayer(graph.nodes);
	const colorScheme = ordinal(Tableau10);
	const getNodeColor = /* @__PURE__ */ __name((nodeId) => {
		return nodeColors[nodeId] ?? colorScheme(nodeId);
	}, "getNodeColor");
	svg.append("g").attr("class", "nodes").selectAll(".node").data(graph.nodes).join("g").attr("class", "node").attr("id", (d) => (d.uid = Uid.next("node-")).id).attr("transform", function(d) {
		return "translate(" + d.x0 + "," + d.y0 + ")";
	}).attr("x", (d) => d.x0).attr("y", (d) => d.y0).append("rect").attr("height", (d) => {
		return d.y1 - d.y0;
	}).attr("width", (d) => d.x1 - d.x0).attr("fill", (d) => getNodeColor(d.id));
	const getText = /* @__PURE__ */ __name(({ id: id2, value }) => {
		if (!showValues) return id2;
		return `${id2}
${prefix}${Math.round(value * 100) / 100}${suffix}`;
	}, "getText");
	const getLabelPosition = /* @__PURE__ */ __name((d) => {
		if (labelStyle === "outlined") {
			if ((d.layer ?? 0) < centralNodeLayer) return {
				x: d.x0 - 6,
				anchor: "end"
			};
			return {
				x: d.x1 + 6,
				anchor: "start"
			};
		}
		if (d.x0 < width / 2) return {
			x: d.x1 + 6,
			anchor: "start"
		};
		return {
			x: d.x0 - 6,
			anchor: "end"
		};
	}, "getLabelPosition");
	const labelsGroup = svg.append("g").attr("class", "node-labels").attr("font-size", 14);
	const appendLabel = /* @__PURE__ */ __name((className) => labelsGroup.selectAll(className ? `.${className}` : "text").data(graph.nodes).join("text").attr("class", className ?? null).attr("x", (d) => getLabelPosition(d).x).attr("y", (d) => (d.y1 + d.y0) / 2).attr("dy", `${showValues ? "0" : "0.35"}em`).attr("text-anchor", (d) => getLabelPosition(d).anchor).text(getText), "appendLabel");
	if (labelStyle === "outlined") {
		appendLabel("sankey-label-bg");
		appendLabel("sankey-label-fg");
	} else appendLabel();
	const link = svg.append("g").attr("class", "links").attr("fill", "none").attr("stroke-opacity", .5).selectAll(".link").data(graph.links).join("g").attr("class", "link").style("mix-blend-mode", "multiply");
	const linkColor = conf?.linkColor ?? "gradient";
	if (linkColor === "gradient") {
		const gradient = link.append("linearGradient").attr("id", (d) => (d.uid = Uid.next("linearGradient-")).id).attr("gradientUnits", "userSpaceOnUse").attr("x1", (d) => d.source.x1).attr("x2", (d) => d.target.x0);
		gradient.append("stop").attr("offset", "0%").attr("stop-color", (d) => getNodeColor(d.source.id));
		gradient.append("stop").attr("offset", "100%").attr("stop-color", (d) => getNodeColor(d.target.id));
	}
	let coloring;
	switch (linkColor) {
		case "gradient":
			coloring = /* @__PURE__ */ __name((d) => d.uid, "coloring");
			break;
		case "source":
			coloring = /* @__PURE__ */ __name((d) => getNodeColor(d.source.id), "coloring");
			break;
		case "target":
			coloring = /* @__PURE__ */ __name((d) => getNodeColor(d.target.id), "coloring");
			break;
		default: coloring = linkColor;
	}
	link.append("path").attr("d", (0, import_d3_sankey.sankeyLinkHorizontal)()).attr("stroke", coloring).attr("stroke-width", (d) => Math.max(1, d.width));
	setupGraphViewbox(void 0, svg, 0, useMaxWidth);
}, "draw") };
var prepareTextForParsing = /* @__PURE__ */ __name((text) => {
	return text.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "").replaceAll(/([\n\r])+/g, "\n").trim();
}, "prepareTextForParsing");
var styles_default = /* @__PURE__ */ __name((options) => `.label {
    font-family: ${options.fontFamily};
  }

  .node-labels {
    font-family: ${options.fontFamily};
  }

  /* Outlined label style - background stroke for better readability */
  .sankey-label-bg {
    stroke: ${options.mainBkg || options.background || "#fff"};
    stroke-width: 4px;
    stroke-linejoin: round;
    paint-order: stroke;
  }

  /* Foreground label text */
  .sankey-label-fg {
    fill: ${options.textColor};
  }

  /* Node styling */
  .node rect {
    shape-rendering: crispEdges;
  }

  /* Link styling */
  .link {
    fill: none;
    stroke-opacity: 0.5;
    mix-blend-mode: multiply;
  }
`, "getStyles");
var originalParse = sankey_default.parse.bind(sankey_default);
sankey_default.parse = (text) => originalParse(prepareTextForParsing(text));
var diagram = {
	styles: styles_default,
	parser: sankey_default,
	db: sankeyDB_default,
	renderer: sankeyRenderer_default
};
export { diagram };
