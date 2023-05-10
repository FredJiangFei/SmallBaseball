export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthUser = null | Record<string, any>;

export type AuthState = {
  isAuthenticated: boolean;
  isInitialized: boolean;
};

export type JWTContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  method: 'jwt';
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};
