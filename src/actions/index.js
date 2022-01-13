// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const login = (email) => ({
  type: LOGIN,
  payload: { email },
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSES,
  expense,
});

// trecho de código tirado do pull request do Leonardo Henrique (https://github.com/tryber/sd-016-b-project-trybewallet/pull/27)
export const saveCurrencies = (rates) => ({
  type: GET_CURRENCIES,
  rates,
});

export const requestCurrencies = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((rates) => dispatch(saveCurrencies(rates)));
