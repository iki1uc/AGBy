// SUITE/suite.eye

export const suiteEye = {

    observe() {

        // Basis‑Sensoren (FOGth‑neutral)
        const flow = this.readFlow()
        const depth = this.readDepth()
        const energy = this.readEnergy()

        // Respo‑Farbe bestimmen
        const respo = this.readRespo(flow, depth, energy)

        return {
            flow,
            depth,
            energy,
            respo
        }
    },

    readFlow() {
        // Flow ist zwischen 0.0 und 1.0
        return Math.random().toFixed(2)
    },

    readDepth() {
        // Tiefe ist zwischen 0.0 und 0.8
        return (Math.random() * 0.8).toFixed(2)
    },

    readEnergy() {
        // Energie ist zwischen 0.0 und 1.0
        return Math.random().toFixed(2)
    },

    readRespo(flow, depth, energy) {

        // FOGth‑Regeln:
        // Grün = Energie + Flow stabil
        // Gelb = Tiefe > 0.5
        // Rot = alles andere

        if (flow > 0.6 && energy > 0.6) return "green"
        if (depth > 0.5) return "yellow"
        return "red"
    }
}

