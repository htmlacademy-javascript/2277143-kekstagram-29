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
    const SYSTEM_OF_MEASUREMENT = 10;
    const num = parseInt(string[i], SYSTEM_OF_MEASUREMENT); // приводим каждый символ к числу

    if (Number.isNaN(num) === false) { // проверяем на NaN
      newNum += num;
    }
  }
  if (newNum.length < 1) { // Проверяем если длина строки меньше 1 (строка пустая)
    return NaN;
  }
  return Number(newNum);
}
takeNumberFromString ('45ee,1.er5 - 0-5');

/**
 *
 * @param {string} time
 * @returns {number} минут
 */
const calcMinutesFromTime = function(time) {
  const elementsOfTime = time.split(':').map(Number);
  const [hours, minutes] = elementsOfTime;
  const MINUTES_PER_HOUR = 60;
  return hours * MINUTES_PER_HOUR + minutes;
};

/**
 *
 * @param {string} startDay
 * @param {string} finishDay
 * @param {string} startMeet
 * @param {number} timeMeet
 * @returns булево значение если встреча пройдет в срок
 */
const calcOfMeet1 = function(startDay, finishDay, startMeet, timeMeet) {
  const minutesStartDay = calcMinutesFromTime(startDay);
  const minutesFinishtDay = calcMinutesFromTime(finishDay);
  const minutesStartMeet = calcMinutesFromTime(startMeet);
  if(minutesStartDay <= minutesStartMeet && minutesStartMeet + timeMeet <= minutesFinishtDay) {
    return true;
  } else {
    return false;
  }
};
calcOfMeet1('08:00', '17:30', '14:00', 90);


// Function for DOM
