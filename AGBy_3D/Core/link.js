import { ATOM_3D } from "./ATOM_3D.js";
import { WHIRL } from "./WHIRL.js";
import { SUS } from "./SUS.js";
import { EYE } from "./EYE.js";

const atom = new ATOM_3D();
const whirl = new WHIRL(atom);
const sus = new SUS(atom);
const eye = new EYE();

function loop() {
    whirl.update();
    sus.update();

    const view = eye.lookAt(atom);
    console.log("CAM:", view.camera, "TARGET:", view.target);

    requestAnimationFrame(loop);
}

loop();
