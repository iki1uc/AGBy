export class GATE {
    constructor() {
        this.state = false;
    }

    open() {
        this.state = true;
    }

    close() {
        this.state = false;
    }

    isOpen() {
        return this.state;
    }
}
