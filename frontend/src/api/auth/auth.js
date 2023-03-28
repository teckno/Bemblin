import axios from 'axios';

const api = axios.create({
  baseURL: '/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (username, password) => {
  try {
    const res = await api.post('auth/login/', { username, password });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.detail || 'Unable to log in');
  }
};

export const register = async (username, email, password1, password2) => {
  try {
    const res = await api.post('auth/registration/', {
      username,
      email,
      password1,
      password2,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data || 'Unable to register');
  }
};

export const resetPassword = async (email) => {
  try {
    const res = await api.post('auth/password/reset/', { email });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data || 'Unable to reset password');
  }
};
