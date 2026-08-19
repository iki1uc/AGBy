export class ATOM_3D {
    constructor() {
        this.position = { x: 0, y: 0, z: 0 };
        this.rotation = { x: 0, y: 0, z: 0 };
        this.scale = 1;
    }

    setPosition(x, y, z) {
        this.position = { x, y, z };
    }

    rotate(rx, ry, rz) {
        this.rotation.x += rx;
        this.rotation.y += ry;
        this.rotation.z += rz;
    }

    update() {
        // später WHIRL, SUS, VECTOR einhängen
    }
}
