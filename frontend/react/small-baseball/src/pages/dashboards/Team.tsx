import { useEffect, useState } from 'react';
import teamService from '../../services/teamService';
import { useForm } from 'react-hook-form';

function Team() {
  const [teams, setTeams] = useState([]);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = async () => {
    const res: any = await teamService.getAll();
    setTeams(res.data);
  };

  const handleCreate = async (data: any) => {
    console.log(data);
    await teamService.create(data);
    getTeams();
  };

  const handleDelete = async (id: any) => {
    await teamService.deleteTeam(id);
    getTeams();
  };

  return (
    <>
      <h1>Teams</h1>

      {teams &&
        teams.map((team: any) => (
          <div key={team._id}>
            <text>{team.name}</text>
            <button onClick={() => handleDelete(team._id)}>X</button>
          </div>
        ))}

      <form autoComplete="off" onSubmit={handleSubmit(handleCreate)}>
        <label htmlFor="name">Name</label>
        <input type="text" {...register('name')} />
        <label htmlFor="description">SportType</label>
        <input type="text" {...register('sportType')} />
        <button>Create</button>
      </form>
    </>
  );
}

export default Team;
