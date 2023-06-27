import {createInfoPhotos} from './data.js';

const section = document.querySelector('.pictures'); // куда вставить

const photoTemplate = document.querySelector('#picture').content.querySelector('.picture'); // шаблон

const getPic = createInfoPhotos();


getPic.forEach((picture) => {
  const photo = photoTemplate.cloneNode(true);
  const img = photo.querySelector('.picture__img');
  img.src = picture.url;
  img.alt = picture.description;
  photo.querySelector('.picture__likes').textContent = picture.likes;
  photo.querySelector('.picture__comments').textContent = picture.comments.length;
  section.appendChild(photo);
});
console.log(section);
