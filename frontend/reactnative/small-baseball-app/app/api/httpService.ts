import axios from 'axios';
import storage from '../auth/storage';
import config from '../config/config';

const request = axios.create({
  timeout: 30000,
  baseURL: config.apiUrl + '/api',
});

request.interceptors.response.use(
  res => res?.data,
  error => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 600;
    if (expectedError) {
      return Promise.resolve(error.response.data);
    }

    return Promise.resolve(null);
  },
);

request.interceptors.request.use(async (cfg: any) => {
  const token = await storage.getToken();
  cfg.headers['Authorization'] = 'Bearer ' + token;
  return cfg;
});

export default {
  get: request.get,
  post: request.post,
  put: request.put,
  delete: request.delete,
};
