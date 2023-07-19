import {onUploadFoto} from './form.js';
import './get-effect.js';
import {renderGallery} from './galery.js';

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
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}

onUploadFoto();
