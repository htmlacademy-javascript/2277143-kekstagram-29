import {constructPicturesArray} from './get-pictures.js';

const rowArray = constructPicturesArray;
const body = document.querySelector('body');
const minArrPhotos = document.querySelectorAll('.picture'); // массив картинок
const bigPhoto = document.querySelector('.big-picture'); // modal
const closePhoto = bigPhoto.querySelector('.big-picture__cancel'); // кнопка закрыть

const likesBigPhoto = bigPhoto.querySelector('.likes-count');
const imgBigPhoto = bigPhoto.querySelector('.big-picture__img img');
const commentsNumberBigPhoto = bigPhoto.querySelector('.comments-count');
const descriptionBigPhoto = bigPhoto.querySelector('.social__caption');

const pictureCommentsContainer = bigPhoto.querySelector('.social__comments');
const bigPictureCommentsCount = bigPhoto.querySelector('.social__comment-count');
const bigPictureCommentsLoader = bigPhoto.querySelector('.comments-loader');

pictureCommentsContainer.innerHTML = '';

const closeModal = function() {
  body.classList.remove('modal-open');
  bigPhoto.classList.add('hidden');
  closePhoto.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', closeEsc);
  pictureCommentsContainer.innerHTML = '';
};

function closeEsc(evt) {
  evt.preventDefault();
  closeModal();
  document.removeEventListener('keydown', closeEsc);
  closePhoto.removeEventListener('click', closeModal);
}

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

    const arrComments = document.querySelectorAll('.social__comment'); // массив коментов

    for(let i = 0; i < arrComments.length; i++){
      console.log(arrComments.length);
      if(i > 4) {
        arrComments[i].classList.add('hidden');
      }
    }
  });
};

minArrPhotos.forEach((photo, index) => {
  openModal(photo, rowArray[index]);
});
