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

const commentsContainerBigPhoto = bigPhoto.querySelector('.social__comments');
const commentsCountBigPhoto = bigPhoto.querySelector('.social__comment-count');
const commentsLoaderBigPhoto = bigPhoto.querySelector('.comments-loader');

const closeModal = function() {
  body.classList.remove('modal-open');
  bigPhoto.classList.add('hidden');
  closePhoto.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', closeEsc);
};

const closeEsc = function() {
  closeModal();
  document.removeEventListener('keydown', closeEsc);
  closePhoto.removeEventListener('click', closeModal);
};

const fillComment = function({comments}) {
  comments.forEach((comment) => {
    const element = document.createElement('li');
    const img = document.createElement('img');
    const text = document.createElement('p');
    element.classList.add('social__comment');
    img.classList.add('social__picture');
    text.classList.add('social__text');
    img.src = comment.avatar;
    img.alt = comment.name;
    text.textContent = comment.message;
    element.append(img);
    element.append(text);
    commentsContainerBigPhoto.append(element);
  });
};

const openModal = function(element, photo) {
  element.addEventListener('click', () => {
    commentsContainerBigPhoto.innerHTML = '';
    body.classList.add('modal-open');
    bigPhoto.classList.remove('hidden');
    imgBigPhoto.src = photo.url;
    likesBigPhoto.textContent = photo.likes;
    commentsNumberBigPhoto.textContent = photo.comments.length;
    descriptionBigPhoto.textContent = photo.description;
    commentsCountBigPhoto.classList.add('hidden');
    commentsLoaderBigPhoto.classList.add('hidden');
    fillComment(photo);
    closePhoto.addEventListener('click', closeModal);
    document.addEventListener('keydown', closeEsc);

    const arrComments = document.querySelectorAll('.social__comment'); // массив коментов

   /* for(let i = 0; i < arrComments.length; i++){
      console.log(arrComments.length);
      if(i > 4) {
        arrComments[i].classList.add('hidden');
      }
    }*/
  });
};

minArrPhotos.forEach((photo, index) => {
  openModal(photo, rowArray[index]);
});

