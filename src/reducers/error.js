import { GET_ERROR } from '../actions/actionsTypes';

const INITIAL_STATE = {
  error: '',
};

const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_ERROR:
    return {
      ...state,
      error: action.payload,
    };

  default:
    return state;
  }
};

export default errorReducer;
