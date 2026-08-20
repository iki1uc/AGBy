// quant.root – physischer Gegenstück-Root-Baum
export const quant_root = {
  MOD: "quant.root",
  TYPE: "phys-root",
  VERSION: "1.0",

  axis: {
    height: 0,
    width: 0,
    depth: 0
  },

  load(whirlRoot) {
    return {
      height: whirlRoot.axis.height,
      width: whirlRoot.axis.width,
      depth: whirlRoot.axis.depth
    };
  }
};
