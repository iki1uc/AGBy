// syn.core – erweiterte narrative Axiom-Engine
// bildet 3 Axiome + 6E + Gegenstück-Root ab

import { syn_root } from "./syn.root.js";
import { syn_axio } from "./syn.axio.js";
import { quant_root } from "./quant.root.js";
import { quant_axio } from "./quant.axio.js";
import { WHIRL_root_mirror } from "./WHIRL.root.mirror.js";

export const syn_core = {

  MOD: "syn.core",
  TYPE: "axiom-narr-engine",
  VERSION: "2.0",

  compute() {
    const whirl = WHIRL_root_mirror.mirror();
    const qRoot = quant_root.load(whirl);
    const sRoot = syn_root.load(whirl);

    const qAx = quant_axio.compute(qRoot);
    const sAx = syn_axio.compute(sRoot);

    return {
      dualkraft: {
        phys: qAx.axiom1,
        narr: sAx.axiom1
      },
      e6: {
        phys: qAx.axiom2,
        narr: sAx.axiom2
      },
      rot360: {
        phys: qAx.axiom3,
        narr: sAx.axiom3
      },
      gegenstueckRoot: {
        phys: qRoot,
        narr: sRoot
      },
      status: "syn-core-ready"
    };
  }
};
