import { LOGIN, ADD_EXPENSE, GET_CURRENCIES, GET_ERROR, DELETE_EXPENSE, EDIT_EXPENSE } from './actionsTypes';
import fetchCurrencies from '../services';

const loginAction = (email) => ({ type: LOGIN, payload: email });

const getCurrencies = (currencies) => ({ type: GET_CURRENCIES, payload: currencies });

const getError = (error) => ({ type: GET_ERROR, payload: error });

const getCurrenciesAction = () => (dispatch) => {
  fetchCurrencies((currencies) => {
    dispatch(getCurrencies(currencies));
  });
};

const addExpenses = (expense) => (dispatch) => {
  fetchCurrencies((currencies) => {
    dispatch({ type: ADD_EXPENSE, payload: expense, exchangeRates: currencies });
  });
};

const deleteExpenses = (id) => ({ type: DELETE_EXPENSE, payload: id });

const editExpenses = (id) => ({ type: EDIT_EXPENSE_EXPENSE, payload: id });

export {
  loginAction,
  addExpenses,
  deleteExpenses,
  editExpenses,
  getCurrencies,
  getCurrenciesAction,
  getError,
};
