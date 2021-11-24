import { LOGIN, ADD_EXPENSE, GET_CURRENCIES, GET_ERROR } from './actionsTypes';

const loginAction = (email) => ({ type: LOGIN, payload: email });

const addExpenses = (expense) => ({ type: ADD_EXPENSE, payload: expense });

const setCurrencies = (currencies) => ({ type: GET_CURRENCIES, payload: currencies });

const getError = (error) => ({ type: GET_ERROR, payload: error });

function fetchCurrencies() {
  // recebe o dispatch para enviar outras actions
  return (dispatch) => {
    const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((currencies) => dispatch(setCurrencies(currencies)))
      .catch((error) => dispatch(getError(error)));
  };
}

export { loginAction, addExpenses, setCurrencies, fetchCurrencies, getError };
