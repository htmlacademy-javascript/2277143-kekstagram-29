import './get-pictures.js';

const minArrPhotos = document.querySelectorAll('.picture'); // массив картинок
const bigPhoto = document.querySelector('.big-picture'); // modal
const closePhoto = document.querySelector('.big-picture__cancel'); // кнопка закрыть

const likesBigPhoto = document.querySelector('.likes-count');
const imgBigPhoto = document.querySelector('.big-picture__img img');
const commentsNumberBigPhoto = document.querySelector('.comments-count');
const descriptionBigPhoto = document.querySelector('.social__caption');

const pictureComments = document.querySelector('.social__comments');

minArrPhotos.forEach((photo) => { //открываем фото click
  photo.addEventListener('click', () => {
    bigPhoto.classList.remove('hidden');
    imgBigPhoto.src = (photo.querySelector('.picture__img')).src;
    likesBigPhoto.textContent = photo.querySelector('.picture__likes').textContent;
    commentsNumberBigPhoto.textContent = photo.querySelector('.picture__comments').textContent;
    descriptionBigPhoto.textContent = (photo.querySelector('.picture__img')).alt;

  });
});

closePhoto.addEventListener('click', () => { // закрываем фото click
  bigPhoto.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => { // закрываем фото esc
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPhoto.classList.add('hidden');
  }
});


function fillComment(item) { // Скопировал у Владислава
  item.comments.forEach((comment) => {
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


