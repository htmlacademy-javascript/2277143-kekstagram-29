import {resetScale, smallerButton, onSmallerButtonClick, biggerButton, onBiggerButtonClick} from './scale-of-image.js';
import {resetEffects, effectsContainer, changeFilters} from './get-effect.js';

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

const submitButton = uploadForm.querySelector('.img-upload__submit');
/** Текст на кнопке отправки формы. Меняется в зависимости от процесса отправки */
const SubmitButtonText = {
  REST: 'Сохранить',
  SENDING: 'Сохраняю...'
};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
}, false);

const onFormEsc = function(evt) {
  if(evt.key === 'Escape'){
    evt.preventDefault();
    if(document.activeElement !== textAreaDescripton && document.activeElement !== inputHashtag) {
      closeForm();
    }
    uploadForm.reset();
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
  resetScale();
  smallerButton.removeEventListener('click', onSmallerButtonClick);
  biggerButton.removeEventListener('click', onBiggerButtonClick);
  resetEffects();
  effectsContainer.removeEventListener('change', changeFilters);
  pristine.reset();
}

const openForm = function() {
  body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onFormEsc);
  closeButton.addEventListener('click', closeForm);
  smallerButton.addEventListener('click', onSmallerButtonClick);
  biggerButton.addEventListener('click', onBiggerButtonClick);
  effectsContainer.addEventListener('change', changeFilters);
};

/**
 * открытие формы
 */
const onUploadFoto = function() {
  uploadInput.addEventListener('change', openForm);
};

/**
 *
 * @returns boolean, Проверяем массив на валидацию
 */
const validateHashtag = function () {
  if(inputHashtag.value === '') {
    return true;
  }
  const hashtagsArr = inputHashtag.value.toLowerCase().split(' ');
  const arrHashtagsNoNothink = hashtagsArr.filter((str) => str.trim() !== ''); //!!!! NAME
  const arrHashtagsNoSpace = arrHashtagsNoNothink.filter((str) => str.trim() !== ' '); //!!!! NAME
  for (let i = 0; i < arrHashtagsNoSpace.length; i++) {
    if (!rulesHashtag.test(arrHashtagsNoSpace[i]) || arrHashtagsNoSpace.indexOf(arrHashtagsNoSpace[i]) !== i || arrHashtagsNoSpace.length > numberOfHashtag) {
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
  const arrHashtagsNoNothink = arrHashtags.filter((str) => str.trim() !== '');
  const arrHashtagsNoSpace = arrHashtagsNoNothink.filter((str) => str.trim() !== ' ');
  let messageOne = '';
  let messageTwo = '';
  let messageThree = '';
  let errorMessage = '';
  for (let i = 0; i < arrHashtagsNoSpace.length; i++) {
    if(!rulesHashtag.test(arrHashtagsNoSpace[i])) {
      messageOne = 'введён невалидный хэш-тег\n';
    }
    if(arrHashtagsNoSpace.indexOf(arrHashtagsNoSpace[i]) !== i) {
      messageTwo = 'хэш-теги повторяются\n';
    }
    if(arrHashtagsNoSpace.length > 5) {
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


/** Блокировка кнопки отправки формы */
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

/** Разблокировка кнопки отправки формы */
const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.REST;
};


const createSendForm = (cb) => {
  uploadForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValidate = pristine.validate();

    if(isValidate) {
      blockSubmitButton();
      await cb(new FormData(uploadForm));
      unblockSubmitButton();
    }
  });
};


export {onUploadFoto, createSendForm, closeForm};
