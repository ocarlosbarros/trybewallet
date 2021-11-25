export default function fetchCurrencies(callback) {
  const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((currencies) => callback(currencies))
    .catch((error) => callback(error));
}
