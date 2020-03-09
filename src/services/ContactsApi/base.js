import axios from 'axios';

const base = axios.create({
  baseURL: 'http://localhost:5000/contacts/',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
  },
});

export default base;
