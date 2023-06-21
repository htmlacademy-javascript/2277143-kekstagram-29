import {getRandomInteger, getProgressNumber, getRandomFromArr} from './util.js';
import {getMesseges} from './get-string-of-messages.js';

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
  const minNumberComments = 0;
  const maxNumberComments = 30;
  const getListComments = getRandomInteger(minNumberComments, maxNumberComments);

  for(let i = 0; i < getListComments; i++) {
    const minNumberAvatar = 1;
    const maxNumberAvatar = 6;
    arrComments.push({
      id: getIdComment(),
      avatar: `img/avatar-${ getRandomInteger(minNumberAvatar, maxNumberAvatar) }.svg`,
      message: getMesseges(),
      name: getRandomFromArr(arrNames)
    });
  }
  return arrComments;
};

export {getArrOfComents};
