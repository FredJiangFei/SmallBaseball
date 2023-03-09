import axios from '../utils/axios';

const getAll = () => {
  return axios.get(`managers`);
};

const create = (data: any) => {
  return axios.post(`managers`, data);
};

export default {
  getAll,
  create,
};
