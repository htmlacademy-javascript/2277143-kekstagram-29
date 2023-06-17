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

function getRandomInteger(min, max) { // Функция Cлучайное число в диапазоне
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getProgressNumber() { // Функция Номер по порядку
  let startNumber = 0;
  return function() {
    startNumber += 1;
    return startNumber;
  };
}

const getIdPhoto = getProgressNumber(); // ID фото
const getUrlPhoto = getProgressNumber(); // N URL
const getIdComment = getProgressNumber(); // ID коммента

function createInfoFoto() { // ФУНКЦИЯ БЛОКА ФОТОГРАФИИ

  function makeComments() { // Функция добавления Сomments
    const arrComments = [];
    const getListComments = getRandomInteger(0, 30);// Получаем количество коментариев

    for(let i = 0; i < getListComments; i++) {
      const addMasseges = function() { // Функция добавления Masseges
        let strokeMasseges = '';
        for(let j = 0; j < getRandomInteger(1, 2); j++) {
          const getMessage = arrMessages[getRandomInteger(0, arrMessages.length - 1)]; // Cлучайный коментарий из массива
          strokeMasseges = `${strokeMasseges + getMessage } `;
        }
        return strokeMasseges.slice(0, -1);
      };

      arrComments.push({
        id: getIdComment(),
        avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
        message: addMasseges(),
        name: arrNames[getRandomInteger(0, arrNames.length - 1)]
      });
    }
    return arrComments;
  }

  return {
    id: getIdPhoto(),
    url: `photos/${ getUrlPhoto() }.jpg`,
    description: arrDescriptions[getRandomInteger(0, arrDescriptions.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: makeComments()
  };
}
/*console.log(Array.from({length: 25}, createInfoFoto));*/
