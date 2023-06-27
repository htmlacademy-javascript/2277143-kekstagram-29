import {createInfoPhotos} from './data.js';

const section = document.querySelector('.pictures'); // куда вставить

const photoTemplate = document.querySelector('#picture').content.querySelector('.picture'); // шаблон

const getPic = createInfoPhotos();

const photoListFragmment = document.createDocumentFragment()

getPic.forEach((picture) => {
  const photo = photoTemplate.cloneNode(true);
  const img = photo.querySelector('.picture__img');
  img.src = picture.url;
  img.alt = picture.description;
  photo.querySelector('.picture__likes').textContent = picture.likes;
  photo.querySelector('.picture__comments').textContent = picture.comments.length;
  photoListFragmment.appendChild(photo);
});

section.appendChild(photoListFragmment)

console.log(section);
