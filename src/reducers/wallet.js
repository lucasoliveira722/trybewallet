// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, SAVE_ALL, SAVE_FORM } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES: {
    const currencies = Object.keys(action.rates);
    return {
      ...state,
      currencies,
    };
  }
  case SAVE_ALL: {
    const expenses = action;
    return {
      ...state,
      exchangeRates: [expenses],
    };
  }
  case SAVE_FORM: {
    return {
      ...state,
      expenses: [...state.expenses, action.formData],
    };
  }
  default:
    return state;
  }
}

export default walletReducer;
