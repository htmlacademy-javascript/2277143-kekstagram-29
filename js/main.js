import {onUploadFoto, createSendForm, closeForm, unblockSubmitButton} from './form.js';
import './get-effect.js';
import {renderGallery} from './galery.js';
import {getData, sendData} from './server.js';
import {showAlert} from './alert.js';
import {showSuccessMessage, showErrorMessage} from './message.js';

createSendForm(async (data) => {
  try {
    await sendData(data);
    closeForm();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  } finally {
    unblockSubmitButton();
  }
});

try {
  const data = await getData();
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}

onUploadFoto();
