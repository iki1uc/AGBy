// WHIRL.sync – Bindungsgerät für QI/IQQ
// Keine Änderung am WHIRL-Repo. Keine Axiome brechen.
// quant + syn scannen, WHIRL wirbelt.

import { quant } from "./quant/quant.core.js";
import { syn } from "./syn/syn.core.js";
import { WHIRL } from "./WHIRL.js";

export const WHIRL_sync = {

  MOD: "WHIRL.sync",
  TYPE: "QI/IQQ-Bindung",
  STATUS: "green",
  VERSION: "1.0",

  // Rücken stärken, Hand führen
  master() {
    const q = quant.scan();     // physische Kraft
    const s = syn.scan();       // narrative Kraft

    return {
      mode: "master",
      back: WHIRL.QI || "QI",
      hand: WHIRL.IQQ || "IQQ",
      q,
      s
    };
  },

  slave() {
    const q = quant.scan();
    const s = syn.scan();

    return {
      mode: "slave",
      back: WHIRL.QI || "QI",
      hand: WHIRL.IQQ || "IQQ",
      q,
      s
    };
  },

  // Synchronisation ohne Scannen durch WHIRL
  bind() {
    const q = quant.scan();
    const s = syn.scan();

    return {
      bind: true,
      q,
      s,
      whirl: WHIRL.MOD
    };
  },

  // Drift / Wirbel / Balance
  flow() {
    return {
      drift: "active",
      balance: "dual",
      master: this.master(),
      slave: this.slave()
    };
  },

  // Stabilität: WHIRL bleibt unverändert
  keepgreen() {
    return {
      repo: "unchanged",
      axiome: "intact",
      scan: "quant+syn only",
      whirl: "QI/IQQ stable"
    };
  }
};
