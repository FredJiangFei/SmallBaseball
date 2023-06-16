import { useContext } from 'react';
import { ToggleContext } from '../contexts/ToggleContext';

const useToggle = () => {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error('useToggle must be used within a <Toggle />');
  }

  return context;
};

export default useToggle;
