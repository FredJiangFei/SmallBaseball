import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (values: any) => {
    await signIn(values.email, values.password);
    navigate('/');
  };

  return (
    <>
      <h1>SignIn</h1>
      <button onClick={handleLogin}>Sign In</button>
    </>
  );
}

export default SignIn;
