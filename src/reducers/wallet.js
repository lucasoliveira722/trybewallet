// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES: {
    const currencies = Object.keys(action.rates);
    // const currencies = asArray.filter((currency) => currency !== 'USDT');
    return {
      ...state,
      currencies,
    };
  }
  default:
    return state;
  }
}

export default walletReducer;
