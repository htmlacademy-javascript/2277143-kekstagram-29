const arrDescriptions = [
  'Утренний туман', 'Закат на пляже', 'Цветущее поле', 'Горный пейзаж', 'Прогулка в парке', 'Девушка на лужайке',
  'Лесной ручей', 'Красивый город', 'Пара на закате', 'Собака на пляже', 'Рассвет на озере', 'Дети на качелях',
  'Поля под солнцем', 'Котенок на окне', 'Лошадь на природе', 'Рыбак на реке', 'Мост через реку', 'Закат в горах',
  'Девушка с цветами', 'Осенний лес', 'Солнечные луга', 'Парижская улица', 'Скалы у моря', 'Река в лесу', 'Природный камень'
];

const arrNames = [
  'Альберто', 'Анжела', 'Антонио', 'Бруно', 'Валентина', 'Вероника', 'Даниэла', 'Джанлука', 'Джузеппе',
  'Елена', 'Леонардо', 'Лоренцо', 'Луиджи', 'Марио', 'Массимо', 'Маттео', 'Никола', 'Паоло', 'Пьетро',
  'Рикардо', 'Ромина', 'Сабрина', 'Сильвия', 'Фабио', 'Франческа'
];

const arrMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns случайное число в диапазоне
 */
const getRandomInteger = function(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/**
 *
 * @returns progress number
 * @description используем замыкание
 */
const getProgressNumber = function() {
  let startNumber = 0;
  return function() {
    startNumber += 1;
    return startNumber;
  };
};

/**
 *
 * @param {Array<type>} arr
 * @returns случайный элемент массива
 */
const getRandomFromArr = function(arr) {
  return arr[getRandomInteger(0, arr.length - 1)];
};

const getIdPhoto = getProgressNumber(); // Функция возвращения случайного ID фото
const getUrlPhoto = getProgressNumber(); // Функция возвращения случайного N URL
const getIdComment = getProgressNumber(); // Функция возвращения случайного ID коммента

/**
 *
 * @returns строку комментария
 * @description создаём из 1 или 2 случайных фраз из массива
 */
const getMesseges = function() {
  let strokeMesseges = '';
  const countMessages = getRandomInteger(1, 2);
  for(let j = 0; j < countMessages; j++) {
    strokeMesseges += `${getRandomFromArr(arrMessages) } `;
  }
  return strokeMesseges.slice(0, -1);
};

/**
 *
 * @returns массив комментариев
 */
const getArrOfComents = function() {
  const arrComments = [];
  const getListComments = getRandomInteger(0, 30);

  for(let i = 0; i < getListComments; i++) {
    arrComments.push({
      id: getIdComment(),
      avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
      message: getMesseges(),
      name: getRandomFromArr(arrNames)
    });
  }
  return arrComments;
};

/**
 *
 * @returns инфо-блок для 1 фотографии
 */
const createInfoFoto = function() {
  return {
    id: getIdPhoto(),
    url: `photos/${ getUrlPhoto() }.jpg`,
    description: getRandomFromArr(arrDescriptions),
    likes: getRandomInteger(15, 200),
    comments: getArrOfComents()
  };
};

console.log(Array.from({length: 25}, createInfoFoto));
