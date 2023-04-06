import axios from '../utils/axios';

const login = (data: any) => {
  return axios.post(`users/login/backend`, data);
};

export default {
  login,
};
