
const body = document.querySelector('body');
const upload = document.querySelector('.img-upload');
const uploadInput = upload.querySelector('.img-upload__input');
const uploadOverlay = upload.querySelector('.img-upload__overlay');
const uploadForm = upload.querySelector('.img-upload__form');
const closeButton = upload.querySelector('.img-upload__cancel');
const textAreaDescripton = uploadForm.querySelector('.text__description');
const inputHashtag = uploadForm.querySelector('.text__hashtags');
const rulesHashtag = /^#[a-zа-яё0-9]{1,19}$/i;
const numberOfHashtag = 5;

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
 * открытие формы
 */
uploadInput.addEventListener('change', openForm);

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
}, false);

/**
 *
 * @returns  Проверяем массив на валидацию
 */
const validateHashtag = function () {
  if(inputHashtag.value === '') {
    return true;
  }
  if(inputHashtag.value.charAt(inputHashtag.value.length - 1) === ' ') {
    inputHashtag.value = inputHashtag.value.slice(0, -1);
  }
  const arrHashtag = inputHashtag.value.toLowerCase().split(' ');

  for (let i = 0; i < arrHashtag.length; i++) {
    if (!rulesHashtag.test(arrHashtag[i]) || arrHashtag.indexOf(arrHashtag[i]) !== i || arrHashtag.length > numberOfHashtag) {
      return false;
    }
  }
  return true;
};

const errorMessage = function () {
  const hashtagLowerCase = inputHashtag.value.toLowerCase();
  const arrHashtags = hashtagLowerCase.split(' ');
  let errorMessageOne = '';
  let errorMessageTwo = '';
  let errorMessageThree = '';
  let hashtagErrorMessage = '';
  for (let i = 0; i < arrHashtags.length; i++) {
    if(!rulesHashtag.test(arrHashtags[i])) {
      errorMessageOne = 'введён невалидный хэш-тег\n';
    }
    if(arrHashtags.indexOf(arrHashtags[i]) !== i) {
      errorMessageTwo = 'введены повторяющиеся хеш-теги\n';
    }
    if(arrHashtags.length > 5) {
      errorMessageThree = 'превышено количество хэш-тегов\n';
    }
    hashtagErrorMessage = errorMessageOne + errorMessageTwo + errorMessageThree;
  }
  return hashtagErrorMessage;
};


pristine.addValidator(inputHashtag,
  validateHashtag,
  errorMessage
);

uploadForm.addEventListener('submit', (evt) => {
  const isValidate = pristine.validate();
  if(!isValidate) {
    evt.preventDefault();
  }
});


// console.log(inputHashtag.value)
