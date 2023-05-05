import axios from 'axios';

// axios.defaults.baseURL = `http://localhost:3010/api`;
axios.defaults.baseURL = `https://cma-p5y3.onrender.com/api`;

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const getData = async function () {
  return await axios.get('/arbitrages');
};

export const excludePair = async function (market, symbol) {
  return await axios.post(`/arbitrages/${market}/${symbol}`);
};

export const registerUser = async function (body) {
  return await axios.post('/users/register', body);
};

export const verify = async function (body) {
  return await axios.post('/users/verify', body);
};

export const reVerify = async function (body) {
  return await axios.post('/users/reverify', body);
};

export const loginUser = async function (body) {
  const result = await axios.post('/users/login', body);
  setAuthHeader(result.data.token);
  return result;
};

export const loginOut = async function () {
  const result = await axios.post('/users/logout');
  clearAuthHeader();
  return result;
};

export const getCurrentUser = async function (token) {
  setAuthHeader(token);
  const result = await axios.get('/users/currentUser');
  return result;
};
