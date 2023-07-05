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

pictureComments.innerHTML = '';

const closeModal = function() {
  bigPhoto.classList.add('hidden');
  closePhoto.removeEventListener('click', closeModal);
  pictureComments.innerHTML = '';
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
    pictureComments.appendChild(element);
    element.appendChild(img);
    element.appendChild(text);
  });
}

const openModal = function(element, photo) {
  element.addEventListener('click', () => {
    bigPhoto.classList.remove('hidden');
    imgBigPhoto.src = photo.url;
    likesBigPhoto.textContent = photo.likes;
    commentsNumberBigPhoto.textContent = photo.comments.length;
    descriptionBigPhoto.textContent = photo.description;

    fillComment(photo);

    closePhoto.addEventListener('click', closeModal);
    document.addEventListener('keydown', closeEsc);
  });
};

minArrPhotos.forEach((photo, index) => { //открываем фото click
  openModal(photo, rowArray[index]);
});
