import axios from 'axios';
import { refresh } from './RefreshToken.http';

export const API_URL = 'http://localhost:6969/api';

export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use(
  async (res) => {
    console.log('response received');
    return res;
  },
  async (err) => {
    if (err.response.status === 401) {
      try {
        return refresh(err);
      } catch (err) {
        localStorage.removeItem('token');
      }
    }
    return Promise.reject(err);
  }
);
