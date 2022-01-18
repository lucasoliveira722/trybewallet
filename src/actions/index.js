// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const SAVE_ALL = 'SAVE_ALL';
export const SAVE_FORM = 'SAVE_FORM';

export const login = (email) => ({
  type: LOGIN,
  payload: { email },
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSES,
  expense,
});

export const saveCurrencies = (rates) => ({
  type: GET_CURRENCIES,
  rates,
});

export const requestCurrencies = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((rates) => dispatch(saveCurrencies(rates)));

export const saveAll = (allInfo) => ({
  type: SAVE_ALL,
  allInfo,
});

export const saveForm = (formData) => ({
  type: SAVE_FORM,
  formData,
});

export function requestAll(formData) {
  return (dispatch) => {
    // dispatch(saveForm(formData));
    // const allInfo = {...formData, rates};
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((exchangeRates) => {
        const allInfo = { ...formData, exchangeRates };
        dispatch(saveAll(allInfo));
      });
  };
}
// dispatch(saveAll(rates))
// adicionar o valor do rates ao objeto formData antes de fazer o dispatch
