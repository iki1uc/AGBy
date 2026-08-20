// syn.axio – narrative Axiom-Berechnung (kein Scannen)
export const syn_axio = {
  MOD: "syn.axio",
  TYPE: "axiom-narr",
  VERSION: "1.0",

  compute(root) {
    return {
      axiom1: root.meaning,                 // Dualkraft narrativ
      axiom2: root.direction + root.context,// 3E/6E narrativ
      axiom3: root.meaning                  // 360° narrativ stabil
    };
  }
};
