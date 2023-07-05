import {constructPicturesArray} from './get-pictures.js';

const rowArray = constructPicturesArray;
const minArrPhotos = document.querySelectorAll('.picture'); // массив картинок
const bigPhoto = document.querySelector('.big-picture'); // modal
const closePhoto = document.querySelector('.big-picture__cancel'); // кнопка закрыть

const likesBigPhoto = document.querySelector('.likes-count');
const imgBigPhoto = document.querySelector('.big-picture__img img');
const commentsNumberBigPhoto = document.querySelector('.comments-count');
const descriptionBigPhoto = document.querySelector('.social__caption');

const pictureComments = document.querySelector('.social__comments');

const closeModal = function() {
  bigPhoto.classList.add('hidden');
  closePhoto.removeEventListener('click', closeModal)
};

const closeEsc = function(evt) {
  evt.preventDefault();
  closeModal();
};

const openModal = function(element, photo) {
  element.addEventListener('click', () => {
    bigPhoto.classList.remove('hidden');
    imgBigPhoto.src = photo.url;
    likesBigPhoto.textContent = photo.likes;
    commentsNumberBigPhoto.textContent = photo.comments.length;
    descriptionBigPhoto.textContent = photo.description;
    closePhoto.addEventListener('click', closeModal);

    document.addEventListener('keydown', closeEsc);
  });
};

minArrPhotos.forEach((photo, index) => { //открываем фото click
  openModal(photo, rowArray[index]);
});
