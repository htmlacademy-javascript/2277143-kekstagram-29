import './get-pictures.js'; // возможно не нужна?
import {openPhoto} from './modal.js';
import {onUploadFoto} from './form.js';
import './get-effect.js';

import { getData, sendData } from './server.js';
import {showAlert} from './alert.js';

/*
function (data) {
  sendData(data)
    .then(() => {
      closeForm ();
      showSuccessMessage();
    })
    .catch(() => {
      showErrorMessage();
    });
}
*/

try {
  const data = await getData();
  openPhoto(data);
} catch (err) {
  showAlert(err.message);
}


openPhoto();
onUploadFoto();
