// WHIRL.sync – Bindung zwischen WHIRL.root und quant/syn Root-Bäumen
import { quant_root } from "./quant.root.js";
import { quant_axio } from "./quant.axio.js";
import { syn_root } from "./syn.root.js";
import { syn_axio } from "./syn.axio.js";
import { WHIRL } from "./WHIRL.js";

export const WHIRL_sync = {

  MOD: "WHIRL.sync",
  TYPE: "bind-root",
  VERSION: "1.0",

  bind() {
    const qRoot = quant_root.load(WHIRL.root);
    const sRoot = syn_root.load(WHIRL.root);

    const qAx = quant_axio.compute(qRoot);
    const sAx = syn_axio.compute(sRoot);

    return {
      qRoot,
      sRoot,
      qAx,
      sAx,
      axiome: {
        dual: [qAx.axiom1, sAx.axiom1],
        e6: [qAx.axiom2, sAx.axiom2],
        rot360: [qAx.axiom3, sAx.axiom3]
      }
    };
  }
};
