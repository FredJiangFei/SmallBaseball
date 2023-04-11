import React, { useContext, useState } from 'react';

const LoadingContext = React.createContext({
  loading: false,
  setLoading: (isLoading) => {},
});

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const value = { loading, setLoading };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }

  return context;
}
