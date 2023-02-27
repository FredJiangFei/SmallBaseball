import axios from '../utils/axios';

const getProducts = (page: number, pageSize: number) => {
  return axios.get(`products?page=${page}&pageSize=${pageSize}`);
};

export default {
  getProducts,
};
