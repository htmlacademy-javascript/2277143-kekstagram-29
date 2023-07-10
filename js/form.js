
const body = document.querySelector('body');
const upload = document.querySelector('.img-upload');
const uploadInput = upload.querySelector('.img-upload__input');
const uploadOverlay = upload.querySelector('.img-upload__overlay');
const uploadForm = upload.querySelector('.img-upload__form');
const closeButton = upload.querySelector('.img-upload__cancel');
const textAreaDescripton = uploadForm.querySelector('.text__description');
const inputHashtag = uploadForm.querySelector('.text__hashtags');
const rulesHashtag = /^#[a-zа-яё0-9]{1,19}$/i;


const onFormEsc = function(evt) {
  if(evt.key === 'Escape'){
    evt.preventDefault();
    if(document.activeElement !== textAreaDescripton && document.activeElement !== inputHashtag) {
      closeForm();
    }
  }
};

function closeForm () {
  uploadInput.value = '';
  textAreaDescripton.value = '';
  inputHashtag.value = '';
  body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onFormEsc);
  closeButton.removeEventListener('click', closeForm);
}

const openForm = function() {
  body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onFormEsc);
  closeButton.addEventListener('click', closeForm);
};

/**
 * отерытие формы
 */
uploadInput.addEventListener('input', () => {
  openForm();
});

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

/**
 *
 * @returns  Проверяем массив тегов на несовпадение и критерии
 */
const validateHashtag = function () { // Проверяем массив тегов на несовпадение и критерии
  const arrHashtag = inputHashtag.value.split(' ');
  for (let i = 0; i < arrHashtag.length; i++) {
    if (rulesHashtag.test(arrHashtag[i]) !== true || arrHashtag.indexOf(arrHashtag[i]) !== i) {
      return false;
    }
  }
  return true;
};

pristine.addValidator(inputHashtag, validateHashtag);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});





// console.log(inputHashtag.value)
