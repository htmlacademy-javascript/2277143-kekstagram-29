import {createInfoFoto} from './data.js';

const listPistures = document.querySelector('.pictures'); // куда вставить

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); // шаблон

const clonePictureTemplate = pictureTemplate.cloneNode(true); // создаем клон шаблона

listPistures.appendChild(clonePictureTemplate); // добавляем клон шаблона

console.log(listPistures);


