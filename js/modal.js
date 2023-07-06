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

let commentsShown = 0;

const closeModal = function() {
  body.classList.remove('modal-open');
  bigPhoto.classList.add('hidden');
  closePhoto.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', closeEsc);
  commentsLoaderBigPhoto.addEventListener('click', showMore);
  bigPhoto.removeEventListener('click', onOverlayClick);
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
    bigPhoto.addEventListener('click', onOverlayClick);
    fillComment(photo);
    hideComments();
    closePhoto.addEventListener('click', closeModal);
    document.addEventListener('keydown', closeEsc);
    commentsCountBigPhoto.textContent = `${commentsShown.length} из ${commentsContainerBigPhoto.children.length} комментариев`;
    commentsLoaderBigPhoto.addEventListener('click', showMore);
  });
};

const openPhoto = function() {
  minArrPhotos.forEach((photo, index) => {
    openModal(photo, rowArray[index]);
  });
};

export {openPhoto};

function hideShowMoreButton() {
  if(commentsContainerBigPhoto.children.length === commentsShown.length) {
    commentsLoaderBigPhoto.classList.add('hidden');
  } else {
    commentsLoaderBigPhoto.classList.remove('hidden');
  }
}

function hideComments() {
  for(let i = 5; i < commentsContainerBigPhoto.children.length; i++) {
    commentsContainerBigPhoto.children[i].classList.add('hidden');
  }
  commentsShown = bigPhoto.querySelectorAll('.social__comment:not(.hidden)');
  hideShowMoreButton();
}

function showMore() {
  for(let i = commentsShown.length; i < (commentsShown.length + 5) && i < commentsContainerBigPhoto.children.length; i++) {
    commentsContainerBigPhoto.children[i].classList.remove('hidden');
  }
  commentsShown = bigPhoto.querySelectorAll('.social__comment:not(.hidden)');
  commentsCountBigPhoto.textContent = `${commentsShown.length} из ${commentsContainerBigPhoto.children.length} комментариев`;
  hideShowMoreButton();
}

function onOverlayClick(evt) {
  if (!evt.target.closest('.big-picture__preview') || evt.target.closest('.big-picture__cancel')) {
    closeModal();
  }
}
