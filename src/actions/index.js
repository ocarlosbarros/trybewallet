import { LOGIN, ADD_EXPENSE, GET_CURRENCIES, GET_ERROR } from './actionsTypes';
import fetchCurrencies from '../services';

const loginAction = (email) => ({ type: LOGIN, payload: email });

const getCurrencies = () => {
  fetchCurrencies((currencies) => ({ type: GET_CURRENCIES, payload: currencies }));
};

const getError = (error) => ({ type: GET_ERROR, payload: error });

const getCurrenciesAction = () => (dispatch) => {
  dispatch(fetchCurrencies(getCurrencies));
};

const addExpenses = (expense) => (dispatch) => {
  fetchCurrencies((currencies) => {
    dispatch({ type: ADD_EXPENSE, payload: expense, exchangeRates: currencies });
  });
};

export {
  loginAction,
  addExpenses,
  getCurrencies,
  getCurrenciesAction,
  getError,
};
