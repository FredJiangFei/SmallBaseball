import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { JWTContextType, AuthState } from '../types/auth';
import { isValidToken, setSession } from '../utils/jwt';
import { INITIALIZE, SIGN_IN, SIGN_OUT, SIGN_UP } from './actions/AuthAction';
import { JWTReducer } from './JWTReducer';

const AuthContext = createContext<JWTContextType | null>(null);

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      const accessToken = window.localStorage.getItem('accessToken');

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);
        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: true,
            user: null,
          },
        });
      } else {
        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const signIn = async (email: string, password: string) => {
    const user = {
      email,
      password,
    };
    dispatch({
      type: SIGN_IN,
      payload: {
        user,
      },
    });
  };

  const signOut = async () => {
    dispatch({ type: SIGN_OUT });
  };

  const signUp = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    const user = {};
    dispatch({
      type: SIGN_UP,
      payload: {
        user,
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        signIn,
        signOut,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
