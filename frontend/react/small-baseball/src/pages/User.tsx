import React, { useEffect, useState } from 'react';
import userService from '../services/userService';
import SfLink from '../components/SfLink';

function User() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res: any = await userService.getAll();
    setUsers(res.value);
  };

  return (
    <div>
      {users.map((u: any) => (
        <p key={u.id}>
          <SfLink to={`/chat/${u.id}`}>{u.name}</SfLink>
        </p>
      ))}
    </div>
  );
}

export default User;
