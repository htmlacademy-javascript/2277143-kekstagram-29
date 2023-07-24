import {onFormEsc} from './form.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

function onDocumentKeydown(evt,cb){
  if (evt.key === 'Escape') {
    evt.preventDefault();
    cb();
  }
}

/** обработчик клика вне окна */
const onSuccessDocumentClick = (evt)=>{
  evt.preventDefault();
  if (!evt.target.closest('.success__inner')) {
    closeSuccessMessage();
  }
};

/** обработчик клика на кнопке сообщения*/
const onSuccessButtonClick = () => closeSuccessMessage();

/** обработчик нажатия Escape */
const onCloseSuccessMessage = (evt) => onDocumentKeydown(evt,closeSuccessMessage);

/** скрывает сообщение */
function closeSuccessMessage () {
  document.body.querySelector('.success').remove();
  document.body.removeEventListener('click',onSuccessDocumentClick);
  document.body.removeEventListener('keydown', onCloseSuccessMessage);
}

/** показывает сообщение */
const showSuccessMessage = () => {
  const successBlock = successTemplate.cloneNode(true);
  document.body.append(successBlock);
  successBlock.querySelector('.success__button').addEventListener('click', onSuccessButtonClick);
  document.body.addEventListener('click',onSuccessDocumentClick);
  document.body.addEventListener('keydown',onCloseSuccessMessage);
};

/** обработчик клика вне окна */
const onErrorDocumentClick = (evt) => {
  evt.preventDefault();
  if (!evt.target.closest('.error__inner')){
    closeErrorMessage();
  }
};

/** обработчик клика на кнопке сообщения*/
const onErrorButtonСlick = () => closeErrorMessage();

/** обработчик нажатия Escape */
const onCloseErrorMessage = (evt) => onDocumentKeydown(evt,closeErrorMessage);

/** скрывает сообщение */
function closeErrorMessage (){
  document.body.querySelector('.error').remove();
  document.body.classList.remove('has-modal');
  document.body.removeEventListener('click',onErrorDocumentClick);
  document.removeEventListener('keydown', onCloseErrorMessage);
}

/** показывает сообщение */
const showErrorMessage = () => {
  const errorBlock = errorTemplate.cloneNode(true);
  const errorButton = errorBlock.querySelector('.error__button');
  document.body.append(errorBlock);
  document.body.classList.add('has-modal');
  errorButton.addEventListener('click',onErrorButtonСlick);
  document.body.addEventListener('keydown',onCloseErrorMessage);
  document.body.addEventListener('click',onErrorDocumentClick);
  document.removeEventListener('keydown', onFormEsc);
};

export{showSuccessMessage,showErrorMessage};
