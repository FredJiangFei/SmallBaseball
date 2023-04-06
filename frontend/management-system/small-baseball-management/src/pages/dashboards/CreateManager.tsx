import { NavLink, useNavigate } from 'react-router-dom';
import managerService from '../../services/managerService';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';

function CreateManager() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleCreate = async (data: any) => {
    await managerService.create(data);
    navigate('/managers');
  };

  return (
    <>
      <NavLink to="/managers">Back</NavLink>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>CreateManager</h1>
        <form autoComplete="off" onSubmit={handleSubmit(handleCreate)}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="First Name"
            {...register('firstName')}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Last Name"
            {...register('lastName')}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            {...register('email')}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create
          </Button>
        </form>
      </Box>
    </>
  );
}

export default CreateManager;
