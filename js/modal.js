import './get-pictures.js';

const minPhotos = document.querySelectorAll('.picture');

const bigPhoto = document.querySelector('.big-picture');
const closePhoto = document.querySelector('.big-picture__cancel');

minPhotos.forEach((photo) => {
  photo.addEventListener('click', () => { //открываем фото
    bigPhoto.classList.remove('hidden');
  });
});

/*
minPhotos.addEventListener('click', () => { //открываем фото
  bigPhoto.classList.remove('hidden');
});*/

closePhoto.addEventListener('click', () => { // закрываем фото
  bigPhoto.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => { // закрываем через esc
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPhoto.classList.add('hidden');
  }
});


console.log('+++');

