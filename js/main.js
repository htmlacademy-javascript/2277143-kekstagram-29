import {onUploadFoto, createSendForm, closeForm, unblockSubmitButton} from './form.js';
import './get-effect.js';
import {renderGallery} from './galery.js';
import {getData, sendData} from './server.js';
import {showAlert} from './util.js';
import {showSuccessMessage, showErrorMessage} from './message.js';
import {setFilters,getSortedImages} from './filters.js';

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

const debouncedRenderGallery = debounce(renderGallery);

try {
  const data = await getData();
  setFilters(data, debouncedRenderGallery);
  debouncedRenderGallery(getSortedImages());
} catch (err) {
  showAlert(err.message);
}

onUploadFoto();

