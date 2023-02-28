import { useEffect } from 'react';
import managerService from '../../services/managerService';

function Managers() {
  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const res = await managerService.getAll();
    console.log(res);
  };

  return <h1>Managers</h1>;
}

export default Managers;
