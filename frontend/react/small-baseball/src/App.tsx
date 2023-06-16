import './App.css';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import { AuthProvider } from './contexts/JWTContext';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as MyThemeProvider } from './contexts/ThemeContext';
import createTheme from './theme';
import useTheme from './hooks/useTheme';

function App() {
  return (
    <MyThemeProvider>
      <AppContent></AppContent>
    </MyThemeProvider>
  );
}

const AppContent = () => {
  const content = useRoutes(routes);
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <AuthProvider>{content}</AuthProvider>
    </ThemeProvider>
  );
};

export default App;
