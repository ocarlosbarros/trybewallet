import { ADD_EXPENSE } from '../actions/actionsTypes';

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
  default:
    return state;
  }
};

export default walletReducer;
