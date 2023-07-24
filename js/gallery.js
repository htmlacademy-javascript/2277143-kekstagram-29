import {openModal} from './modal.js';
import {createThumbnails} from './get-pictures.js';

const container = document.querySelector('.pictures');
let onContainerClick;

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
  if (onContainerClick) {
    container.removeEventListener('click', onContainerClick);
  }
  // создаем новый обработчик
  onContainerClick = (evt) => {
    renderModal(evt, data);
  };
  // добавляем новый обработчик
  container.addEventListener('click', onContainerClick);
  createThumbnails(data);
};

export {renderGallery};
