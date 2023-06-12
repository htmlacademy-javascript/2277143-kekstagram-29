// Функция проверки длинны строки

function checkLengthString (string, num) {

  if (string.length <= num) {
    return true;
  }
  return false;
}
/*console.log(checkLengthString('home12.9', 8))*/

//Фунция проверки на палидром

function checkPalindrome (string) {
  const newString1 = string.replaceAll(' ', '').toLowerCase(); // убираем пробели + нижний регистр
  let newString2 = '';
  for (let i = newString1.length - 1; i >= 0; i--) { // перебираем с конца
    newString2 += newString1[i]; // записываем в новую переменную
  }
  if(newString1 === newString2) { // сравниваем и возвращаем булево значение
    return true;
  }
  return false;
}
/*console.log(checkPalindrome ('WoW'))*/

// Функция отделения числа

function takeNumberFromString (string) { // Принимаем строку
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
/*console.log(takeNumberFromString ('45ee,1.5 - -5'));*/
