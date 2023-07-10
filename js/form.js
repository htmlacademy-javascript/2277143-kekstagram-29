
const body = document.querySelector('body');
const upload = document.querySelector('.img-upload');
const uploadInput = upload.querySelector('.img-upload__input');
const uploadOverlay = upload.querySelector('.img-upload__overlay');
const uploadForm = upload.querySelector('.img-upload__form');


const openForm = function() {
  body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
};

uploadInput.addEventListener('input', () => {
  openForm();
});
