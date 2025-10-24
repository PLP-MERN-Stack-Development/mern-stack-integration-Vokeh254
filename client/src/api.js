import axios from 'axios';

const API = import.meta.env.VITE_API_URL || '/api';

export const api = axios.create({
  baseURL: API
});

export function setAuthToken(token) {
  if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete api.defaults.headers.common['Authorization'];
}