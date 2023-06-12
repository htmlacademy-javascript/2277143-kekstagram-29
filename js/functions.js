// Функция проверки длинны строки

function checkLengthString (string, numb) {

  if (string.length <= numb) {
    return true;
  }
  return false;
}

//Фунция проверки на палидром

function checkPalindrome(stringPalindrome) {
  const newString1 = stringPalindrome.replaceAll(' ', '').toLowerCase(); // убираем пробели + нижний регистр
  let newString2 = '';
  for (let i = newString1.length - 1; i >= 0; i--) { // перебераем с конца
    newString2 += newString1[i]; // записываем в новую переменную
  }
  if(newString1 === newString2) { // сравниваем и возвращаем булево значение
    return true;
  }
  return false;
}


