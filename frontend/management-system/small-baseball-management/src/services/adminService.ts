import axios from '../utils/axios';

const login = (data: any) => {
  return axios.put(`user/login/admin`, data);
};

export default {
  login,
};
