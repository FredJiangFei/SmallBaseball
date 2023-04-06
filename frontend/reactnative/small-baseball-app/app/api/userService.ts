import http from './httpService';

function register(user) {
  return http.post(`users/register`, user);
}

function login(user) {
  return http.post(`users/login`, user);
}

export default {
  register,
  login,
};
