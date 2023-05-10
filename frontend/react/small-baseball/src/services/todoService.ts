import axios from '../utils/axios';

const getAll = () => {
  return axios.get(`todos`);
};

const create = (data: any) => {
  return axios.post(`todos`, data);
};

const deleteTodo = (id: any) => {
  return axios.delete(`todos/${id}`);
};

const exportedObject = {
  getAll,
  create,
  deleteTodo,
};

export default exportedObject;
