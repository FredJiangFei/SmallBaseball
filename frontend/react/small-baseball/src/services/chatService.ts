import axios from '../utils/axios';

const getChatHistory = (receiverId: any) => {
  return axios.get(`chat/receivers/${receiverId}/history`);
};

export default {
  getChatHistory,
};
