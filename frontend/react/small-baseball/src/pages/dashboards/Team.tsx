import { useEffect, useState } from 'react';
import teamService from '../../services/teamService';

function Team() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = async () => {
    const res: any = await teamService.getAll();
    setTeams(res.data);
  };

  const handleCreate = async () => {
    await teamService.create({
      name: 'Team 2',
      description: 'Team 2 description',
    });
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

      <button onClick={handleCreate}>Create</button>
    </>
  );
}

export default Team;
