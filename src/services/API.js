import axios from 'axios';

axios.defaults.baseURL = `http://localhost:3000/api`;

export const getData = async function () {
  return await axios.get('/cca');
};
