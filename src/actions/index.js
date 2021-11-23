import { LOGIN, ADD_EXPENSE } from './actionsTypes';

const loginAction = (email) => ({ type: LOGIN, payload: email });

const expensesAction = (expense) => ({ type: ADD_EXPENSE, payload: expense });

const getExchangesAPI = () => (dispatch) => {
  dispatch(expensesAction());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json()
      .then((exchanges) => console.log(exchanges)));
};

export { loginAction, expensesAction, getExchangesAPI };
