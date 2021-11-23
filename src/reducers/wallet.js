import { ADD_EXPENSE } from '../actions/actionsTypes';

const INITIAL_STATE = {
  expenses: [],
};
const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      expenses: [...state, expense],
    };
  default:
    return state;
  }
};

export default walletReducer;
