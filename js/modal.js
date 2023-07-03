import './get-pictures.js';

const minArrPhotos = document.querySelectorAll('.picture'); // массив картинок
const bigPhoto = document.querySelector('.big-picture'); // modal
const closePhoto = document.querySelector('.big-picture__cancel');
const likesBigPhoto = document.querySelector('.likes-count');
const imgBigPhoto = document.querySelector('.big-picture__img img');
const commentsNumberBigPhoto = document.querySelector('.comments-count');
const descriptionBigPhoto = document.querySelector('.social__caption');



minArrPhotos.forEach((photo) => { //открываем фото
  photo.addEventListener('click', () => {
    bigPhoto.classList.remove('hidden');
    imgBigPhoto.src = (photo.querySelector('.picture__img')).src;
    likesBigPhoto.textContent = photo.querySelector('.picture__likes').textContent;
    commentsNumberBigPhoto.textContent = photo.querySelector('.picture__comments').textContent;
    descriptionBigPhoto.textContent = (photo.querySelector('.picture__img')).alt;




  });
});

closePhoto.addEventListener('click', () => { // закрываем фото
  bigPhoto.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => { // закрываем через esc
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPhoto.classList.add('hidden');
  }
});
