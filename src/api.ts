import axios from "axios"

const BASE_URL = `https://api.coinpaprika.com/v1`

export const fetchCoins = async () => {
  return await axios(`${BASE_URL}/coins`).then(res => res.data);
};

export const fetchCoinInfo = async (coinId: string | undefined) => {
  return await axios(`${BASE_URL}/coins/${coinId}`).then(res => res.data);
};

export const fetchCoinTickers = async (coinId: string) => {
  return await axios(`${BASE_URL}/tickers/${coinId}`).then(res => res.data);
};

export const fetchCoinHistory = async (coinId: string) => {
  const endDate = Math.floor(Date.now() / 1000);
  //일주일전
  const startDate = endDate - 60 * 60 * 24 * 7;
  return await axios(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`).then(res => res.data);
};