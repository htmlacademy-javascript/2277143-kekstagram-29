function checkLengthString (string, numb) {

  if (string.length <= numb) {
    return true;
  }
  return false;
}


function checkPalindrome(stringPalindrome) {
  let newString1 = stringPalindrome.replaceAll(' ', '').toLowerCase();
  let newString2 = '';
  for (let i = newString1.length - 1; i >= 0; i--) {
    newString2 += newString1[i];
  };
  if(newString1 === newString2) {
    return true;
  }
  return false;

}

console.log(checkPalindrome('Лёша на полке клопа нашёл '));

