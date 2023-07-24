const URL_BASE = 'https://29.javascript.pages.academy/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST'
};

const ErrorTextDescription = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму, Попробуйте ещё раз',
};

/** функция для выполнения запроса */
const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${URL_BASE}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

/** функция загрузки данных */
const getData = () => load(Route.GET_DATA, ErrorTextDescription.GET_DATA);

/** функция отправки данных */
const sendData = (body) => load(Route.SEND_DATA, ErrorTextDescription.SEND_DATA, Method.POST, body);

export {getData, sendData};
