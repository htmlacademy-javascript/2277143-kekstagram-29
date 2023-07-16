fetch('https://29.javascript.pages.academy/kekstagram',
  {
    method: 'POST',
    credentials: 'same-origin',
    body: new FormData(),
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log('Ответ', data);
  });




//console.log('+++');
