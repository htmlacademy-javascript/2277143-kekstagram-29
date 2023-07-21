import {openModal} from './modal.js';
import {createThumbnails} from './get-pictures.js';

const container = document.querySelector('.pictures');
let clickHandler;

/** вызывает модалку */
const renderModal = (evt, pictures) => {
  const target = evt.target.closest('[data-id]');
  if (!target) {
    return;
  }
  const picture = pictures.find((item) => item.id === Number(target.dataset.id));
  openModal(picture);
};

/** создание галереи */
const renderGallery = (data) => {
  // удаляем предыдущий обработчик, если он был
  if (clickHandler) {
    container.removeEventListener('click', clickHandler);
  }
  // создаем новый обработчик
  clickHandler = (evt) => {
    renderModal(evt, data);
  };
  // добавляем новый обработчик
  container.addEventListener('click', clickHandler);
  createThumbnails(data);
};

export {renderGallery};
