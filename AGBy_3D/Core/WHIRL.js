export class WHIRL {
    constructor(atom) {
        this.atom = atom;
        this.speed = 0.05;
    }

    spin() {
        this.atom.rotate(0, this.speed, 0);
    }

    update() {
        this.spin();
    }
}
