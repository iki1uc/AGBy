export class SUS {
    constructor(atom) {
        this.atom = atom;
        this.vector = { x: 1, y: 0, z: 0 };
    }

    shiftVEC(dx, dy, dz) {
        this.vector.x += dx;
        this.vector.y += dy;
        this.vector.z += dz;
    }

    applyVector() {
        this.atom.setPosition(
            this.atom.position.x + this.vector.x,
            this.atom.position.y + this.vector.y,
            this.atom.position.z + this.vector.z
        );
    }

    update() {
        this.applyVector();
    }
}
