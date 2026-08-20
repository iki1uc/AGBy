// g.js – globaler 3×3 Root-Baum für ABC + Axiome

import { quant_axio } from "../quant/quant.axio.js";
import { syn_axio } from "../syn/syn.axio.js";
import { WHIRL_root_mirror } from "../WHIRL/WHIRL.root.mirror.js";

export const G = {

  MOD: "G.root",
  TYPE: "global-root",
  VERSION: "1.0",

  build() {
    const whirl = WHIRL_root_mirror.mirror();

    const A = quant_axio.compute(whirl.axis);
    const B = syn_axio.compute(whirl.axis);
    const C = whirl.axis;

    return {
      matrix: [
        { A, B, C },
        { B, C, A },
        { C, A, B }
      ],
      axiome: {
        dual: { phys: A.axiom1, narr: B.axiom1 },
        e6:   { phys: A.axiom2, narr: B.axiom2 },
        rot:  { phys: A.axiom3, narr: B.axiom3 }
      },
      ID: "W",
      status: "g-root-ready"
    };
  }
};
