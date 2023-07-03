import './get-pictures.js';

const minArrPhotos = document.querySelectorAll('.picture');
const bigPhoto = document.querySelector('.big-picture');
const closePhoto = document.querySelector('.big-picture__cancel');

minArrPhotos.forEach((photo) => { //открываем фото
  photo.addEventListener('click', () => {
    bigPhoto.classList.remove('hidden');
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
