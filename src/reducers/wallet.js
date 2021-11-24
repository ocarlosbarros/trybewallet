import { ADD_EXPENSE, GET_CURRENCIES } from '../actions/actionsTypes';

const INITIAL_STATE = {
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.payload,
          id: state.expenses.length,
        },
      ],
    };
  case GET_CURRENCIES:
    return {
      ...state,
      expenses: state.expenses,
      exchangeRates: action.payload };
  default:
    return state;
  }
};

export default walletReducer;
