
const URL_BASE = 'https://29.javascript.pages.academy/kekstagram/data';

const createLoader = (onSuccess, onError) => () => fetch(URL_BASE, {
    method: 'GET',
    credentials: 'same-origin',
  })
    .then((response) => {
      if(response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      console.log('Результат', data);
    })
    .catch((err) => {
      console.error(err);
    })
export {createLoader};




//console.log('+++');
