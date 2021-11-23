import { ADD_EXPENSE } from '../actions/actionsTypes';
import incrementId from '../handlers';

const INITIAL_STATE = {
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
  case ADD_EXPENSE:
    incrementId(action.payload);
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default walletReducer;
