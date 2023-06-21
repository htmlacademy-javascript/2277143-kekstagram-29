import {getRandomInteger, getProgressNumber, getRandomFromArr} from './util.js';
import {getMesseges} from './get-string-of-messages.js';

const arrNames = [
  'Альберто', 'Анжела', 'Антонио', 'Бруно', 'Валентина', 'Вероника', 'Даниэла', 'Джанлука', 'Джузеппе',
  'Елена', 'Леонардо', 'Лоренцо', 'Луиджи', 'Марио', 'Массимо', 'Маттео', 'Никола', 'Паоло', 'Пьетро',
  'Рикардо', 'Ромина', 'Сабрина', 'Сильвия', 'Фабио', 'Франческа'
];

const getIdComment = getProgressNumber(); // Функция возвращения случайного ID коммента

const NumberOfAvatar = {
  min: 1,
  max: 6
};

const NumberOfComments = {
  min: 0,
  max: 30
};

/**
 *
 * @returns массив комментариев
 */
const getArrOfComents = function() {
  const arrComments = [];
  const getListComments = getRandomInteger(NumberOfComments.min, NumberOfComments.max);

  for(let i = 0; i < getListComments; i++) {
    arrComments.push({
      id: getIdComment(),
      avatar: `img/avatar-${ getRandomInteger(NumberOfAvatar.min, NumberOfAvatar.max) }.svg`,
      message: getMesseges(),
      name: getRandomFromArr(arrNames)
    });
  }
  return arrComments;
};

export {getArrOfComents};
