import { useContext } from 'react';
import { ToggleContext } from '../contexts/ToggleContext';

const useToggle = () => {
  const context = useContext(ToggleContext);

  if (!context) throw new Error('ToggleContext must be placed within ToggleProvider');

  return context;
};

export default useToggle;
