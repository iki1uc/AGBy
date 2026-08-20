
function tornado(pos, speed) {

    // 2 vor
    pos.y += 2 * speed

    // 1 zurück
    pos.y -= 1 * speed

    // Verdoppeln
    pos.x *= 2
    pos.y *= 2

    // Speed verdoppeln
    speed *= 2

    return { pos, speed }
}
