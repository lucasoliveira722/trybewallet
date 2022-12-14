const CURRENCY_API = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencyApi = async () => {
  const response = await fetch(CURRENCY_API);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default getCurrencyApi;
