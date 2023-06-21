/**
 *
 * @param {string} string
 * @param {number} numLetters
 * @returns проверку длины строки
 */
function checkLengthString (string, numLetters) {
  if (string.length <= numLetters) {
    return true;
  }
  return false;
}
checkLengthString('hom12.9', 7);

/**
 *
 * @param {string} string
 * @returns проверку строки на палидром
 * @description убираем пробелы + нижний регистр, перебираем с конца, сравниваем
 */
function checkPalindrome (string) {
  const oldString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = oldString.length - 1; i >= 0; i--) {
    newString += oldString[i];
  }
  if(oldString === newString) {
    return true;
  }
  return false;
}
checkPalindrome ('WoW');

/**
 *
 * @param {string} string
 * @returns число из цыфр строки
 */
function takeNumberFromString (string) {
  let newNum = '';
  for(let i = 0; i < string.length; i++) {
    const num = parseInt(string[i], 10); // приводим каждый символ к числу

    if (Number.isNaN(num) === false) { // проверяем на NaN
      newNum += num; // вписываем в переменную если это число
    }
  }
  if (newNum.length < 1) { // Проверяем если длина строки меньше 1 (строка пустая)
    return NaN; // возвращаем NaN
  }
  return Number(newNum); // если строка не пустая возвращаем переменную ввиде числа
}
takeNumberFromString ('45ee,1.er5 - 0-5');
