import axios from '../utils/axios';

const getAll = () => {
  return axios.get(`managers`);
};

export default {
  getAll,
};
