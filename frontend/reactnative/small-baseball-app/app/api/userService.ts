import http from './httpService';

function register (user) {
  return http.post(`User/register`, user);
}

function login(user) {
  return http.put(`User/login`, user);
}

export default {
  register,
  login,
};
