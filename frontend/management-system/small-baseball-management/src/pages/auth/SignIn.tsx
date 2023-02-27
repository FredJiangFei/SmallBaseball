import React from "react";
import styled from "styled-components/macro";
import { Avatar, Container, Typography } from "@mui/material";
import SignInComponent from "../../components/auth/SignIn";
const BigAvatar = styled(Avatar)`
  width: 92px;
  height: 92px;
  text-align: center;
`;

function SignIn() {
  return (
      <Container maxWidth="sm" sx={{ 
            height: '100vh',
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center'
        }}>
        <BigAvatar alt="Lucy" src="/static/img/avatars/mario.png" />
        <Typography component="h1" variant="h4" align="center" gutterBottom>
            Sign in to your account to continue
        </Typography>
        <SignInComponent />
      </Container>
  );
}

export default SignIn;
