import { Avatar, Typography, Box } from '@mui/material';
import { getUser } from '../utils/jwt';
import SfLink from '../components/SfLink';

function Profile() {
  const { FirstName, LastName } = getUser();

  return (
    <>
      <h1>Profile</h1>
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar sx={{ width: 56, height: 56 }}>S</Avatar>
        <Typography variant="h5" ml={2}>
          {FirstName} {LastName}
        </Typography>
      </Box>
      <SfLink to="/reset-password">Reset Password</SfLink>
    </>
  );
}

export default Profile;
