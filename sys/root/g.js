// sys/root/g.js – Minimaler Root-Baum

export const G = {

  MOD: "G.root",
  VERSION: "2.0",
  STATUS: "active",

  build() {

    // Minimaler Root-Baum, IMMER sichtbar
    return {
      id: "W",
      nodes: [
        { name: "A" },
        { name: "B" },
        { name: "C" }
      ]
    };
  }
};
