import { LOGIN, ADD_EXPENSE } from './actionsTypes';

const loginAction = (email) => ({ type: LOGIN, payload: email });

const expensesAction = (expense) => ({ type: ADD_EXPENSE, payload: expense });

export { loginAction, expensesAction };
