// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CURRENCIES_API_SUCCESS, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES_API_SUCCESS:
    return action.payload;
  case ADD_EXPENSES:
    return { state, expenses: action.payload };
  default:
    return state;
  }
}

export default walletReducer;
