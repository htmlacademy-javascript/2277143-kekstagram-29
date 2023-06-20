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

const getRandomInteger = function(min, max) { // Функция возвращения случайного числа в диапазоне
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getProgressNumber = function() { // Функция возвращения ф-ии progress числа
  let startNumber = 0;
  return function() {
    startNumber += 1;
    return startNumber;
  };
};

const getRandomFromArr = function(arr) { // Функция возвращения случайного элемента массива
  return arr[getRandomInteger(0, arr.length - 1)];
};

const getIdPhoto = getProgressNumber(); // Функция возвращения случайного ID фото
const getUrlPhoto = getProgressNumber(); // Функция возвращения случайного N URL
const getIdComment = getProgressNumber(); // Функция возвращения случайного ID коммента

const getMesseges = function() { // Функция возвращает строку комментария
  let strokeMesseges = '';
  const countMessages = getRandomInteger(1, 2);
  for(let j = 0; j < countMessages; j++) {
    strokeMesseges += `${getRandomFromArr(arrMessages) } `;
  }
  return strokeMesseges.slice(0, -1);
};

const getArrOfComents = function() { // Функция возвращает массив комментариев
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

const createInfoFoto = function() { // Функция создает инфо-блок для фотографии
  return {
    id: getIdPhoto(),
    url: `photos/${ getUrlPhoto() }.jpg`,
    description: getRandomFromArr(arrDescriptions),
    likes: getRandomInteger(15, 200),
    comments: getArrOfComents()
  };
};
console.log(Array.from({length: 25}, createInfoFoto));
