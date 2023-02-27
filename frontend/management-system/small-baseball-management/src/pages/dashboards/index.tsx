import { Typography } from '@mui/material';

function Default() {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Default Dashboard
      </Typography>
      <Typography variant="subtitle1">
        Hi
        <span role="img" aria-label="Waving Hand Sign">
          👋
        </span>
      </Typography>
    </>
  );
}

export default Default;
