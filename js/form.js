
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
const onUploadFoto = function() {
  uploadInput.addEventListener('change', openForm);
};

export {onUploadFoto};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
}, false);

/**
 *
 * @returns boolean, Проверяем массив на валидацию
 */
const validateHashtag = function () {
  if(inputHashtag.value === '') {
    return true;
  }
  if(inputHashtag.value.charAt(inputHashtag.value.length - 1) === ' ') {
    inputHashtag.value = inputHashtag.value.slice(0, -1);
  }
  const hashtags = inputHashtag.value.toLowerCase().split(' ');
  for (let i = 0; i < hashtags.length; i++) {
    if (!rulesHashtag.test(hashtags[i]) || hashtags.indexOf(hashtags[i]) !== i || hashtags.length > numberOfHashtag) {
      return false;
    }
  }
  return true;
};

/**
 * Функция строки ошибки
 */
const getErrorMessages = function () {
  const hashtagLowerCase = inputHashtag.value.toLowerCase();
  const arrHashtags = hashtagLowerCase.split(' ');
  let messageOne = '';
  let messageTwo = '';
  let messageThree = '';
  let errorMessage = '';
  for (let i = 0; i < arrHashtags.length; i++) {
    if(!rulesHashtag.test(arrHashtags[i])) {
      messageOne = 'введён невалидный хэш-тег\n';
    }
    if(arrHashtags.indexOf(arrHashtags[i]) !== i) {
      messageTwo = 'хэш-теги повторяются\n';
    }
    if(arrHashtags.length > 5) {
      messageThree = 'превышено количество хэш-тегов\n';
    }
    errorMessage = messageOne + messageTwo + messageThree;
  }
  return errorMessage;
};

pristine.addValidator(inputHashtag,
  validateHashtag,
  getErrorMessages
);

uploadForm.addEventListener('submit', (evt) => {
  const isValidate = pristine.validate();
  if(!isValidate) {
    evt.preventDefault();
  }
});


// console.log(inputHashtag.value)
