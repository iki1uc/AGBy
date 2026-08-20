// SUITE/target.rom

export const targetRom = {

    check(engine) {

        // Engine-Level wird auf drei Achsen verteilt
        const H = this.toSymbol(engine.level, "H")
        const B = this.toSymbol(engine.level, "B")
        const T = this.toSymbol(engine.level, "T")

        // 3‑Zeichen‑ROM
        const rom = `${H}${B}${T}`

        return {
            ok: true,
            rom,
            status: "rom-3char"
        }
    },

    toSymbol(level, axis) {

        // Achsenabhängige Zeichen
        if (axis === "H") return "^"
        if (axis === "B") return "."
        if (axis === "T") return "`"

        return "?"
    }
}
