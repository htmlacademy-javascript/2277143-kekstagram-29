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

function createInfoFoto() { // Функция по созданию каточки
  const randomDescriptionIndex = getRandomInteger(0, exampleDescriptions.length - 1); //Получаем индекс Description
  const getLikes = getRandomInteger(15, 200); // Получаем номер лайков

  function makeComments() { // Функция добавления коментариев
    const arrComments = [];
    const getNumberComments = getRandomInteger(0, 30);// Получаем номер коментариев


    for(let i = 0; i < getNumberComments; i++) {
      const getNumberAvatar = getRandomInteger(0, 6);
      arrComments.push({

        id: generateIdComment(),
        avatar: `img/avatar-${ getNumberAvatar }.svg`});
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
console.log(Array.from({length: 10}, createInfoFoto));
