import {constructPicturesArray} from './get-pictures.js';

const body = document.querySelector('body');
const rowArray = constructPicturesArray;
const minArrPhotos = document.querySelectorAll('.picture'); // массив картинок
const bigPhoto = document.querySelector('.big-picture'); // modal
const closePhoto = document.querySelector('.big-picture__cancel'); // кнопка закрыть

const likesBigPhoto = document.querySelector('.likes-count');
const imgBigPhoto = document.querySelector('.big-picture__img img');
const commentsNumberBigPhoto = document.querySelector('.comments-count');
const descriptionBigPhoto = document.querySelector('.social__caption');

const pictureCommentsContainer = document.querySelector('.social__comments');
const bigPictureCommentsCount = document.querySelector('.social__comment-count');
const bigPictureCommentsLoader = document.querySelector('.comments-loader');

pictureCommentsContainer.innerHTML = '';

const closeModal = function() {
  body.classList.remove('modal-open');
  bigPhoto.classList.add('hidden');
  closePhoto.removeEventListener('click', closeModal);
  pictureCommentsContainer.innerHTML = '';
};

const closeEsc = function(evt) {
  evt.preventDefault();
  closeModal();
};

function fillComment(photo) {
  photo.comments.forEach((comment) => {
    const element = document.createElement('li');
    const img = document.createElement('img');
    const text = document.createElement('p');
    element.classList.add('social__comment');
    img.classList.add('social__picture');
    text.classList.add('social__text');
    img.src = comment.avatar;
    img.alt = comment.name;
    text.textContent = comment.message;
    pictureCommentsContainer.appendChild(element);
    element.appendChild(img);
    element.appendChild(text);
  });
}

const openModal = function(element, photo) {
  element.addEventListener('click', () => {
    body.classList.add('modal-open');
    bigPhoto.classList.remove('hidden');
    imgBigPhoto.src = photo.url;
    likesBigPhoto.textContent = photo.likes;
    commentsNumberBigPhoto.textContent = photo.comments.length;
    descriptionBigPhoto.textContent = photo.description;
    fillComment(photo);
    closePhoto.addEventListener('click', closeModal);
    document.addEventListener('keydown', closeEsc);
    //bigPictureCommentsCount.classList.add('hidden');
    //bigPictureCommentsLoader.classList.add('hidden');
  });
};

minArrPhotos.forEach((photo, index) => {
  openModal(photo, rowArray[index]);
});
