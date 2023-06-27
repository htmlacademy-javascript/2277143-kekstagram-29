import {createInfoPhotos} from './data.js';

const section = document.querySelector('.pictures'); // куда вставить

const photoTemplate = document.querySelector('#picture').content.querySelector('.picture'); // шаблон

const getPic = createInfoPhotos();


getPic.forEach(() => {
const photo = photoTemplate.cloneNode(true);
section.appendChild(photo);
;
});
console.log(section);
