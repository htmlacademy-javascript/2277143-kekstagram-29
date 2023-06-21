import {getRandomInteger, getProgressNumber, getRandomFromArr} from './util.js';
import {getMesseges} from './get-string-of-messages.js';

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

const getIdPhoto = getProgressNumber(); // Функция возвращения случайного ID фото
const getUrlPhoto = getProgressNumber(); // Функция возвращения случайного N URL
const getIdComment = getProgressNumber(); // Функция возвращения случайного ID коммента

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


export {createInfoFoto};
