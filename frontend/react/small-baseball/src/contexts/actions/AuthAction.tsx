export const INITIALIZE = 'INITIALIZE';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export type AuthActionTypes = {
  [INITIALIZE]: {
    isAuthenticated: boolean;
  };
  [SIGN_IN]: undefined;
  [SIGN_OUT]: undefined;
};
