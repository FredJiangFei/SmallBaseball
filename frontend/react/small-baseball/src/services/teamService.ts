import axios from '../utils/axios';

const getAll = () => {
  return axios.get(`teams`);
};

const create = (data: any) => {
  return axios.post(`teams`, data);
};

const deleteTeam = (id: any) => {
  return axios.delete(`teams/${id}`);
};

export default {
  getAll,
  create,
  deleteTeam,
};
