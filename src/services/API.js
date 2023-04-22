import axios from 'axios';

axios.defaults.baseURL = `http://localhost:3000/api`;
// axios.defaults.baseURL = `https://cma-p5y3.onrender.com/api`;

export const getData = async function () {
  return await axios.get('/cma');
};
