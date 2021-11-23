import { LOGIN } from './actionsTypes';

const loginAction = (email) => ({ type: LOGIN, payload: email });

export default loginAction;
