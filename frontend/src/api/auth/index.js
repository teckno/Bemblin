import axios from 'axios';

export const login = (username, password) => {
  return axios.post('/api/auth/login/', { username, password });
};

export const register = (username, email, password1, password2) => {
  return axios.post('/api/auth/register/', { username, email, password1, password2 });
};

export const logout = () => {
  return axios.post('/api/auth/logout/');
};

export const getUser = () => {
  return axios.get('/api/auth/user/');
};
