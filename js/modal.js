const COMMENT_PER_PORTION = 5;
const body = document.querySelector('body');
const bigPhoto = document.querySelector('.big-picture');
const closeButton = bigPhoto.querySelector('.big-picture__cancel');

const likesBigPhoto = bigPhoto.querySelector('.likes-count');
const imgBigPhoto = bigPhoto.querySelector('.big-picture__img img');
const commentsNumberBigPhoto = bigPhoto.querySelector('.comments-count');
const descriptionBigPhoto = bigPhoto.querySelector('.social__caption');

const commentsContainerBigPhoto = bigPhoto.querySelector('.social__comments');
const commentsCountBigPhoto = bigPhoto.querySelector('.social__comment-count');
const commentsLoaderBigPhoto = bigPhoto.querySelector('.comments-loader');
let commentsShowArray = [];

const onPictureEsc = function(evt) {
  if(evt.key === 'Escape'){
    closeModal();
  }
};

/**
Функция закрытия большой картинки
*/
function closeModal () {
  body.classList.remove('modal-open');
  bigPhoto.classList.add('hidden');
  document.removeEventListener('keydown', onPictureEsc);
  closeButton.removeEventListener('click', closeModal);
  commentsLoaderBigPhoto.removeEventListener('click', showMoreComments);
}

/**
 * Функция генерации комментариев
 * @param {Array} comments - массив комментариев из объекта
 */
const createPictureComments = function(comments) {
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

/**
 * функция добавления ещё 5 коментариев
 */
function showMoreComments () {
  if (!commentsShowArray.length) {
    return;
  }
  const additionalComments = commentsShowArray.slice(commentsContainerBigPhoto.children.
    length, commentsContainerBigPhoto.children.length + COMMENT_PER_PORTION);

  createPictureComments(additionalComments);

  commentsCountBigPhoto.textContent =
   `${commentsContainerBigPhoto.children.length} из ${commentsShowArray.length} комментариев`;

  if (commentsShowArray.length <= commentsContainerBigPhoto.children.length) {
    commentsLoaderBigPhoto.classList.add('hidden');
  }
}

/**
Функция отрисовки начальных комментариев. Именно тех, которые первые пять штук отрисовываются при открытие модального окна
* @param {array} comments - массив комментариев из объекта, дестроктуризация тут
*/
function fillComments({comments}) {
  const showFirstComments = comments.slice(0, COMMENT_PER_PORTION);
  createPictureComments(showFirstComments);
  commentsCountBigPhoto.textContent = `${showFirstComments.length} из ${comments.length} комментариев`;

  if (showFirstComments.length >= comments.length) {
    commentsCountBigPhoto.classList.add('hidden');
    commentsLoaderBigPhoto.classList.add('hidden');
  }
}

/**
Функция открытия большой картинки при клике на миниатюру
* @param {string} picture - DOM элемент миниатюры, по который мы кликнули
* @param {object} photo - объект одной картинки, которую мы генирировали в data. Сюда передается именно объект той миниатюры по который мы кликнули. Передаем сюда этот объект в файле main.js
*/
const openModal = function(photo) {
  commentsContainerBigPhoto.innerHTML = '';
  commentsCountBigPhoto.classList.remove('hidden');
  commentsLoaderBigPhoto.classList.remove('hidden');
  commentsShowArray = photo.comments;
  body.classList.add('modal-open');
  bigPhoto.classList.remove('hidden');
  imgBigPhoto.src = photo.url;
  likesBigPhoto.textContent = photo.likes;
  commentsNumberBigPhoto.textContent = photo.comments.length;
  descriptionBigPhoto.textContent = photo.description;
  commentsLoaderBigPhoto.addEventListener('click', showMoreComments);
  fillComments(photo);
  document.addEventListener('keydown', onPictureEsc);
  closeButton.addEventListener('click', closeModal);
};

export {openModal};
