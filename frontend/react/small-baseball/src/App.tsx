import './App.css';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import { AuthProvider } from './contexts/JWTContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const content = useRoutes(routes);
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{content}</AuthProvider>
    </ThemeProvider>
  );
}

export default App;
