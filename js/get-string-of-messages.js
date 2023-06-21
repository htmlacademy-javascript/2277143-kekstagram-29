import {getRandomInteger, getRandomFromArr} from './util.js';

const arrMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NumberOfMessages = {
  min: 1,
  max: 2
};

/**
 *
 * @returns строку комментария
 * @description создаём из 1 или 2 случайных фраз из массива
 */
const getMesseges = function() {
  let strokeMesseges = '';
  const countMessages = getRandomInteger(NumberOfMessages.min, NumberOfMessages.max);
  for(let j = 0; j < countMessages; j++) {
    strokeMesseges += `${getRandomFromArr(arrMessages) } `;
  }
  return strokeMesseges.slice(0, -1);
};

export {getMesseges};
