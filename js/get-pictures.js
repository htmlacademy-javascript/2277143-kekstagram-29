import {createInfoPhotos} from './data.js';

const listPhoto = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const getPictures = createInfoPhotos();

const photoListFragment = document.createDocumentFragment();

getPictures.forEach((picture) => {
  const clonePhotoTemplate = photoTemplate.cloneNode(true);
  const imgPhoto = clonePhotoTemplate.querySelector('.picture__img');
  imgPhoto.src = picture.url;
  imgPhoto.alt = picture.description;
  clonePhotoTemplate.querySelector('.picture__likes').textContent = picture.likes;
  clonePhotoTemplate.querySelector('.picture__comments').textContent = picture.comments.length;
  photoListFragment.appendChild(clonePhotoTemplate);
});

listPhoto.appendChild(photoListFragment);
