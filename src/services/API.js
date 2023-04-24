import axios from 'axios';

axios.defaults.baseURL = `http://localhost:3010/api`;
// axios.defaults.baseURL = `https://cma-p5y3.onrender.com/api`;

export const getData = async function () {
  return await axios.get('/cma');
};

export const excludePair = async function (market, symbol) {
  return await axios.post(`/cma/${market}/${symbol}`);
};
