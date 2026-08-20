// SUS.scanRESPO

export const SUSscanRESPO = {

    scan(respo, level) {

        const code =
            respo.color === "green"  ? "HBT" :
            respo.color === "yellow" ? "HB." :
            "H.."

        return {
            code,
            level,
            status: "scan-ready"
        }
    }
}

