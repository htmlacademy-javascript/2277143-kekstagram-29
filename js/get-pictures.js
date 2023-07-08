import {createInfoPhotos} from './data.js';

const photoContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const constructPicturesArray = createInfoPhotos();

const photosFragment = document.createDocumentFragment();

/**
 * Функция клонирует шаблон, заполняет его данными и вставляет в DocumentFragment
 */
constructPicturesArray.forEach((picture) => {
  const photoCloneTemplate = photoTemplate.cloneNode(true);
  const photoImage = photoCloneTemplate.querySelector('.picture__img');
  photoImage.src = picture.url;
  photoImage.alt = picture.description;
  photoCloneTemplate.querySelector('.picture__likes').textContent = picture.likes;
  photoCloneTemplate.querySelector('.picture__comments').textContent = picture.comments.length;
  photosFragment.appendChild(photoCloneTemplate);
});

photoContainer.appendChild(photosFragment);

export {constructPicturesArray};
