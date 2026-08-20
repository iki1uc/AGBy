function tornadoAll(POS, speed) {

    return {
        a: tornado(POS.a, speed),
        d: tornado(POS.d, speed),
        w: tornado(POS.w, speed),
        s: tornado(POS.s, speed)
    }
}
