
const body = document.querySelector('body');
const upload = document.querySelector('.img-upload');
const uploadInput = upload.querySelector('.img-upload__input');
const uploadOverlay = upload.querySelector('.img-upload__overlay');
const uploadForm = upload.querySelector('.img-upload__form');
const closeButton = upload.querySelector('.img-upload__cancel');


const onFormEsc = function(evt) {
  if(evt.key === 'Escape'){
    closeForm();
  }
};

function closeForm () {
  body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onFormEsc);
  closeButton.removeEventListener('click', closeForm);
  uploadInput.value = '';
}

const openForm = function() {
  body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onFormEsc);
  closeButton.addEventListener('click', closeForm);
};

uploadInput.addEventListener('input', () => {
  openForm();
});

