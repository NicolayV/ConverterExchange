import axios from "axios";

const API_Access_Key = "0e82c677c28a3d518aaad042404e7255";
//
const API_KEY = "d636ee6c389d038f863ae5a7b335cfb8";
export const getExchangeRate = (current, exchange) =>
  axios.get(
    `http://api.exchangeratesapi.io/v1/latest?access_key=${API_Access_Key}&symbols=${current},${exchange}`
  );
export const getLatestRates = () =>
  axios.get(
    `http://api.exchangeratesapi.io/v1/latest?access_key=${API_Access_Key}`
  );
