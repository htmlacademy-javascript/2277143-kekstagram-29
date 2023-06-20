import {getRandomInteger, getRandomFromArr, getProgressNumber} from './util.js';
import {getMesseges} from './get-messeges.js';

const arrNames = [
  'Альберто', 'Анжела', 'Антонио', 'Бруно', 'Валентина', 'Вероника', 'Даниэла', 'Джанлука', 'Джузеппе',
  'Елена', 'Леонардо', 'Лоренцо', 'Луиджи', 'Марио', 'Массимо', 'Маттео', 'Никола', 'Паоло', 'Пьетро',
  'Рикардо', 'Ромина', 'Сабрина', 'Сильвия', 'Фабио', 'Франческа'
];

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

export {getArrOfComents};
