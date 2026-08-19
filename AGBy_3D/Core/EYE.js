export class EYE {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 5;
    }

    lookAt(atom) {
        return {
            camera: { x: this.x, y: this.y, z: this.z },
            target: atom.position
        };
    }
}
