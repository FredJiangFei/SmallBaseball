import './App.css';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import { AuthProvider } from './contexts/JWTContext';

function App() {
  const content = useRoutes(routes);

  return <AuthProvider>{content}</AuthProvider>;
}

export default App;
