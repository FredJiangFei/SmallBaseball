import { ActionMap, AuthState } from '../types/auth';
import { AuthActionTypes, INITIALIZE, SIGN_IN, SIGN_OUT } from './actions/AuthAction';

export const JWTReducer = (
  state: AuthState,
  action: ActionMap<AuthActionTypes>[keyof ActionMap<AuthActionTypes>],
) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
      };
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
