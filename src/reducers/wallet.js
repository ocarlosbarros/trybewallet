import { ADD_EXPENSE, GET_CURRENCIES } from '../actions/actionsTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.payload,
          id: state.expenses.length,
          exchangeRates: action.exchangeRates,
        },
      ],
    };
  case GET_CURRENCIES: {
    const currencies = Object.keys(action.payload)
      .filter((currencie) => currencie !== 'USDT');
    return {
      ...state,
      expenses: state.expenses,
      currencies };
  }
  default:
    return state;
  }
};

export default walletReducer;
