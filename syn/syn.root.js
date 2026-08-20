// syn.root – narrativer Gegenstück-Root-Baum
export const syn_root = {
  MOD: "syn.root",
  TYPE: "nar-root",
  VERSION: "1.0",

  axis: {
    meaning: "",
    direction: "",
    context: ""
  },

  load(whirlRoot) {
    return {
      meaning: whirlRoot.axis.meaning,
      direction: whirlRoot.axis.direction,
      context: whirlRoot.axis.context
    };
  }
};
