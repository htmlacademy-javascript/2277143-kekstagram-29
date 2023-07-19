//import './get-pictures.js'; // возможно не нужна?
import {openModal} from './modal.js';
import {createThumbnails} from './get-pictures.js';
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
  //createThumbnails(data);
  //const minArrPhotos = document.querySelectorAll('.picture');
  //minArrPhotos.forEach((photo, index) => {
  // openModal(photo, data[index]);
  //});
  //openPhoto(data);
} catch (err) {
  showAlert(err.message);
}


//openPhoto();
onUploadFoto();
