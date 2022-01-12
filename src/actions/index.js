import fetchCoins from '../services/fetch';

// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const REQUEST_CURRENCIES_API_SUCCESS = 'REQUEST_CURRENCIES_API_SUCCESS';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const login = (email) => ({
  type: LOGIN,
  payload: { email },
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSES,
  expense,
});

export const requestCurrenciesSuccess = (currencies) => ({
  type: REQUEST_CURRENCIES_API_SUCCESS,
  payload: { currencies },
});

export function requestThunkAPI() {
  return (dispatch) => {
    fetchCoins()
      .then((payload) => dispatch(requestCurrenciesSuccess(payload)));
  };
}
