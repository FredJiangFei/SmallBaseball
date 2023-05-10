import jwtDecode from 'jwt-decode';
import { User } from '../types/user';

const tokenKey = 'accessToken';

const isValidToken = (token: string) => {
  if (!token) {
    return false;
  }
  const decoded = jwtDecode<{ exp: number }>(token);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const setSession = (token: string) => localStorage.setItem(tokenKey, token);

const removeSession = () => localStorage.removeItem(tokenKey);

const getUser = () => {
  const token = window.localStorage.getItem(tokenKey);
  const user = jwtDecode<User>(token ?? '');
  return user;
};

export { isValidToken, setSession, removeSession, getUser };
