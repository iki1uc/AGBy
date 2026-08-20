// sys/run/locate.js

export const locate = {

    position(vector) {
        return {
            x: vector.x,
            y: vector.y,
            z: vector.z
        }
    },

    order(respo) {
        return respo === "green" ? "stable" :
               respo === "yellow" ? "soft"   :
               "critical"
    },

    depth(build) {
        return Number(build.orbit.depth).toFixed(2)
    }
}

