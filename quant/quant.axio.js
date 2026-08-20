// quant.axio – physische Axiom-Berechnung (kein Scannen)
export const quant_axio = {
  MOD: "quant.axio",
  TYPE: "axiom-phys",
  VERSION: "1.0",

  compute(root) {
    return {
      axiom1: root.height + root.width,     // Dualkraft physisch
      axiom2: root.depth * 2,               // 3E/6E physisch
      axiom3: (root.height + root.depth)    // 180° physisch
    };
  }
};
