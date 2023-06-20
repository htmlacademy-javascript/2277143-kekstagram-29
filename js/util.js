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

export {getRandomInteger, getProgressNumber, getRandomFromArr};
