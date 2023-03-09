import axios from '../utils/axios';

const login = (data: any) => {
  return axios.put(`user/login/backend`, data);
};

export default {
  login,
};
