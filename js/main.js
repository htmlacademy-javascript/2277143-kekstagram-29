import './get-pictures.js'; // возможно не нужна?
import {openPhoto} from './modal.js';
import {onUploadFoto} from './form.js';
import './get-effect.js';
import './server.js';

import { createLoader } from './server.js';
const load = createLoader(console.log, console.error);
load();

openPhoto();
onUploadFoto();
