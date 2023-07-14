import { LoginCommand } from '../types/loginCommand';
import { RegisterCommand } from '../types/registerCommand';
import { ResetPassowrdCommand } from '../types/resetPassowrdCommand';
import axios from '../utils/axios';

const login = (command: LoginCommand) => {
  return axios.post(`users/login`, command);
};

const register = (command: RegisterCommand) => {
  return axios.post(`users/register`, command);
};

const resetPassword = (command: ResetPassowrdCommand) => {
  return axios.put(`users/reset-password`, command);
};

const getAll = () => {
  return axios.get(`users`);
};

const exportedObject = {
  login,
  register,
  resetPassword,
  getAll
};

export default exportedObject;
