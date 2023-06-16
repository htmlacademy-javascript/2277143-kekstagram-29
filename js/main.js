const exampleDescriptions = [
  'Утренний туман',
  'Закат на пляже',
  'Цветущее поле',
  'Горный пейзаж',
  'Прогулка в парке',
  'Девушка на лужайке',
  'Лесной ручей',
  'Красивый город',
  'Пара на закате',
  'Собака на пляже',
  'Рассвет на озере',
  'Дети на качелях',
  'Поля под солнцем',
  'Котенок на окне',
  'Лошадь на природе',
  'Рыбак на реке',
  'Мост через реку',
  'Закат в горах',
  'Девушка с цветами',
  'Осенний лес',
  'Солнечные луга',
  'Парижская улица',
  'Скалы у моря',
  'Река в лесу',
  'Природный камень'
];

const exampleNames = [
  'Альберто',
  'Анжела',
  'Антонио',
  'Бруно',
  'Валентина',
  'Вероника',
  'Даниэла',
  'Джанлука',
  'Джузеппе',
  'Елена',
  'Леонардо',
  'Лоренцо',
  'Луиджи',
  'Марио',
  'Массимо',
  'Маттео',
  'Никола',
  'Паоло',
  'Пьетро',
  'Рикардо',
  'Ромина',
  'Сабрина',
  'Сильвия',
  'Фабио',
  'Франческа'
];

const exampleMessage = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


function getRandomInteger (min, max) { // Функция по получению случайного числа в диапазоне
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function createNumber () { // Функция получения номера по порядку
  let lastGenerateId = 0;

  return function () {
    lastGenerateId += 1;
    return lastGenerateId;
  };
}
const generatePhotoId = createNumber(); // получаем ID фото
const generatePhotoUrl = createNumber(); // получаем номер URL
const generateIdComment = createNumber(); // получаем ID коммента

function createInfoFoto() { // Функция по созданию каточки фотографии
  const randomDescriptionIndex = getRandomInteger(0, exampleDescriptions.length - 1); //Получаем индекс Description
  const getLikes = getRandomInteger(15, 200); // Получаем номер лайков

  function makeComments() { // Функция добавления коментариев
    const arrComments = [];
    const getNumberComments = getRandomInteger(0, 30);// Получаем номер коментариев

    for(let i = 0; i < getNumberComments; i++) {

      const getNumberAvatar = getRandomInteger(1, 6); // Получаем номер аватара
      const getQuantityrMessage = getRandomInteger(1, 2); // Получаем номер коментрариEB

      const addCom = function () { // Функция добавления коментариев
        let strokeMassege = '';
        for(let j = 0; j < getQuantityrMessage; j++) {
          const getMessage = exampleMessage[getRandomInteger(0, exampleMessage.length - 1)]; // Получаем cлучайный коментарий из массива
          strokeMassege = `${strokeMassege + getMessage } `;
        }
        return strokeMassege;
      };

      const getName = exampleNames[getRandomInteger(0, exampleNames.length - 1)];
      arrComments.push({
        id: generateIdComment(),
        avatar: `img/avatar-${ getNumberAvatar }.svg`,
        message: addCom(),
        name: getName
      });
    }
    return arrComments;
  }

  return {
    id: generatePhotoId(),
    url: `photos/${ generatePhotoUrl() }.jpg`,
    description: exampleDescriptions[randomDescriptionIndex],
    likes: getLikes,
    comments: makeComments()
  };
}

console.log(createInfoFoto());
console.log(Array.from({length: 5}, createInfoFoto));
