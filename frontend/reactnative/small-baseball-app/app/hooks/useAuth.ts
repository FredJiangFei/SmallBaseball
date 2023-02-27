import jwtDecode from 'jwt-decode';
import { useContext } from 'react';
import { AuthContext } from '../auth/context';
import authStorage from '../auth/storage';

const useAuth = () => {
    const { user, setUser }: any = useContext(AuthContext);

    const logout = () => {
        setUser(null);
        authStorage.removeToken();
    };

    const login = async (authToken, isRegister = false) => {
        const user: any = jwtDecode(authToken);
        user.isRegister = isRegister;
        setUser(user);
        await authStorage.storeToken(authToken);
    };

    return { user, logout, login, setUser };
};

export default useAuth;