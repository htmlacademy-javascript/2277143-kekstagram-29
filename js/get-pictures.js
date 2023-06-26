import {createInfoFoto} from './data.js';

const section = document.querySelector('.pictures'); // куда вставить

const Template = document.querySelector('#picture').content.querySelector('.picture'); // шаблон

const createPic = createInfoFoto();
console.log(typeof(createInfoFoto));
console.log(typeof(createPic));

/*
createPic.forEach(() => {
  const cloneTemplate = Template.cloneNode(true); // создаем клон шаблона
  cloneTemplate.querySelector('.picture__comments').textContent = '125';



  section.appendChild(cloneTemplate); // добавляем клон шаблона
});

console.log(section);



*/
