import axios from 'axios';
import { $api, API_URL } from './index';

export const refresh = async (err) => {
  const initialUrl: string = err.response.config.url;

  const res = await axios.get(`${API_URL}/refresh`, {
    withCredentials: true,
  });
  localStorage.setItem('token', res.data.activeToken);
  const initialRes = await $api.get(`${initialUrl}`);

  return initialRes;
};
