import {getRandomInteger, getProgressNumber, getRandomFromArr} from './util.js';
import {getArrOfComents} from './get-arr-of-comments.js';

const arrDescriptions = [
  'Утренний туман', 'Закат на пляже', 'Цветущее поле', 'Горный пейзаж', 'Прогулка в парке', 'Девушка на лужайке',
  'Лесной ручей', 'Красивый город', 'Пара на закате', 'Собака на пляже', 'Рассвет на озере', 'Дети на качелях',
  'Поля под солнцем', 'Котенок на окне', 'Лошадь на природе', 'Рыбак на реке', 'Мост через реку', 'Закат в горах',
  'Девушка с цветами', 'Осенний лес', 'Солнечные луга', 'Парижская улица', 'Скалы у моря', 'Река в лесу', 'Природный камень'
];

const getIdPhoto = getProgressNumber(); // Функция возвращения случайного ID фото
const getUrlPhoto = getProgressNumber(); // Функция возвращения случайного N URL

/**
 *
 * @returns инфо-блок для 1 фотографии
 */
const createInfoFoto = function() {
  const minNumberLikes = 15;
  const maxNumberLikes = 200;
  return {
    id: getIdPhoto(),
    url: `photos/${ getUrlPhoto() }.jpg`,
    description: getRandomFromArr(arrDescriptions),
    likes: getRandomInteger(minNumberLikes, maxNumberLikes),
    comments: getArrOfComents()
  };
};


export {createInfoFoto};
