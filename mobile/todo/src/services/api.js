import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.105:3333/' //endereço ipv4 + porta da api
});

export default api;