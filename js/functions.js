// Функция проверки длинны строки

function checkLengthString (string, numLetters) {

  if (string.length <= numLetters) {
    return true;
  }
  return false;
}
/*console.log(checkLengthString('hom12.9', 7))*/

//Фунция проверки на палидром

function checkPalindrome (string) {
  const oldString = string.replaceAll(' ', '').toLowerCase(); // убираем пробели + нижний регистр
  let newString = '';
  for (let i = oldString.length - 1; i >= 0; i--) { // перебираем с конца
    newString += oldString[i]; // записываем в новую переменную
  }
  if(oldString === newString) { // сравниваем и возвращаем булево значение
    return true;
  }
  return false;
}
/*console.log(checkPalindrome ('WoW'))*/

// Функция отделения числа

function takeNumber (string) { // Принимаем строку
  let newNum = ''; // создаём переменную строку
  for(let i = 0; i < string.length; i++) { //перебираем строку
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
/*console.log(takeNumber ('45ee,1.er5 - 0-5'));*/
