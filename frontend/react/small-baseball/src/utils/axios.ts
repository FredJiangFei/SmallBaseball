import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:52384/api',
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
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
