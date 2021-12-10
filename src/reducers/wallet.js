import { ADD_EXPENSE, DELETE_EXPENSE,
  EDIT_EXPENSE, GET_CURRENCIES } from '../actions/actionsTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE: {
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
  }
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((expense) => action.payload !== expense.id)],
    };

  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: [action.payload, ...state.expenses
        .filter((expense) => action.payload.id !== expense.id)],
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
