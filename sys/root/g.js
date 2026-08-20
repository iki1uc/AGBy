// sys/root/g.js – Root-Baum (kompatibel mit allem)

export const G = {

  MOD: "G.root",
  VERSION: "2.0",

  build() {
    return {
      ID: "W",
      matrix: [
        { A: "A", B: "B", C: "C" },
        { B: "B", C: "C", A: "A" },
        { C: "C", A: "A", B: "B" }
      ],
      nodes: [
        { name: "A", x: 0, y: 0 },
        { name: "B", x: 0, y: 0 },
        { name: "C", x: 0, y: 0 }
      ],
      status: "g-root-ready"
    };
  }
};
