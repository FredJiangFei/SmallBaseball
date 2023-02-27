import jwtDecode from 'jwt-decode';
import * as SecureStore from 'expo-secure-store';

const key = 'authToken';

const storeToken = async (authToken: string) => await SecureStore.setItemAsync(key, authToken);
const getToken = async () => await SecureStore.getItemAsync(key);
const removeToken = async () => await SecureStore.deleteItemAsync(key);

const getUser = async () => {
  const token = await getToken();
  if (!token) return null;

  const user: any = jwtDecode(token);
  if (Date.now() >= user.exp * 1000) return null;

  return user;
};

export default {
  storeToken,
  getUser,
  getToken,
  removeToken,
};
