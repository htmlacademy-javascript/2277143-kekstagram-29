
const body = document.querySelector('body');
const upload = document.querySelector('.img-upload');
const uploadInput = upload.querySelector('.img-upload__input');
const uploadOverlay = upload.querySelector('.img-upload__overlay');
const uploadForm = upload.querySelector('.img-upload__form');
const closeButton = upload.querySelector('.img-upload__cancel');


const onPictureEsc = function(evt) {
  if(evt.key === 'Escape'){
    closeModal();
  }
};

function closeModal () {
  body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onPictureEsc);
  closeButton.removeEventListener('click', closeModal);
}

const openForm = function() {
  body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onPictureEsc);
  closeButton.addEventListener('click', closeModal);
};

uploadInput.addEventListener('input', () => {
  openForm();
});

