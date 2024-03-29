import {createSendForm, closeForm, unblockSubmitButton} from './form.js';
import {renderGallery} from './gallery.js';
import {getData, sendData} from './server.js';
import {showAlert} from './util.js';
import {showSuccessMessage, showErrorMessage} from './message.js';
import {setDelayedFilter, getFilters} from './filters.js';

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
  getFilters();
  setDelayedFilter(data);
} catch (err) {
  showAlert(err.message);
}
