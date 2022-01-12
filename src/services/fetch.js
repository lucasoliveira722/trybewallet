const url = 'https://economia.awesomeapi.com.br/json/all';

export const fetchCoins = async () => {
  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => (data));
  return coins;
};

export default fetchCoins;
