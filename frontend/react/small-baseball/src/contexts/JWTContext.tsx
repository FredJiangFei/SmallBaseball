import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { JWTContextType, AuthState } from '../types/auth';
import { isValidToken, removeSession } from '../utils/jwt';
import { INITIALIZE, SIGN_IN, SIGN_OUT } from './actions/AuthAction';
import { JWTReducer } from './JWTReducer';

const AuthContext = createContext<JWTContextType | null>(null);

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
};

function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      const accessToken = window.localStorage.getItem('accessToken');
      const isAuthenticated = accessToken && isValidToken(accessToken);
      dispatch({
        type: INITIALIZE,
        payload: {
          isAuthenticated: Boolean(isAuthenticated),
        },
      });
    };

    initialize();
  }, []);

  const signIn = async () => dispatch({ type: SIGN_IN });

  const signOut = async () => {
    removeSession();
    dispatch({ type: SIGN_OUT });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
