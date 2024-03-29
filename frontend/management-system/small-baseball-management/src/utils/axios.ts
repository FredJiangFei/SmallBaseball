import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: 'https://localhost:7031/api',
    baseURL: 'http://localhost:3001/api',
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

axiosInstance.interceptors.request.use(async (cfg: any) => {
  const token = window.localStorage.getItem('accessToken');
  cfg.headers['Authorization'] = 'Bearer ' + token;
  return cfg;
});

export default axiosInstance;
