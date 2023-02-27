import { Container } from "@mui/material";
import SignInComponent from "../../components/auth/SignIn";

function SignIn() {
  return (
      <Container maxWidth="sm" sx={{ 
            height: '100vh',
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center'
        }}>
        <SignInComponent />
      </Container>
  );
}

export default SignIn;
