
// syn.core – narrative Axiom-Engine (kein Scannen)
// arbeitet mit syn.root, quant.root und WHIRL.root
// bildet die 3 Axiome exakt ab

import { syn_root } from "./syn.root.js";
import { syn_axio } from "./syn.axio.js";
import { quant_root } from "./quant.root.js";
import { quant_axio } from "./quant.axio.js";
import { WHIRL } from "./WHIRL.js";

export const syn_core = {

  MOD: "syn.core",
  TYPE: "axiom-narr-engine",
  VERSION: "1.0",

  compute() {
    const qRoot = quant_root.load(WHIRL.root);
    const sRoot = syn_root.load(WHIRL.root);

    const qAx = quant_axio.compute(qRoot);
    const sAx = syn_axio.compute(sRoot);

    return {
      axiom_dual: {
        phys: qAx.axiom1,
        narr: sAx.axiom1
      },
      axiom_e6: {
        phys: qAx.axiom2,
        narr: sAx.axiom2
      },
      axiom_rot360: {
        phys: qAx.axiom3,
        narr: sAx.axiom3
      }
    };
  }
};
