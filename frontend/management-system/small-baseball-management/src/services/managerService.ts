import axios from '../utils/axios';

const getAll = () => {
  return axios.get(`managers`);
};

const create = (data: any) => {
  return axios.post(`managers`, data);
};

const deleteManager = (id: any) => {
  return axios.delete(`managers/${id}`);
};

export default {
  getAll,
  create,
  deleteManager
};
