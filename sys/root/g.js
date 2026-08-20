// sys/root/g.js – minimaler Root-Baum nach Umbau

export const G = {

  MOD: "G.root",
  VERSION: "2.0",
  STATUS: "active",

  build() {

    // Dein neuer Root-Baum (du kannst ihn erweitern)
    const root = {
      id: "W",
      nodes: [
        { name: "A", x: 0, y: 0 },
        { name: "B", x: 0, y: 0 },
        { name: "C", x: 0, y: 0 }
      ]
    };

    return root;
  }
};
