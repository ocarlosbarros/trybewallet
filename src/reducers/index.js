// import user from './user';
// import wallet from './wallet';
import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';
import errorReducer from './error';

const rootReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
  error: errorReducer,
});

export default rootReducer;
