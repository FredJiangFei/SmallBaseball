import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import createTheme from './theme';
import routes from './routes';
import useTheme from './hooks/useTheme';
import { AuthProvider } from './contexts/JWTContext'

function App() {
  const { theme } = useTheme();
  const content = useRoutes(routes);

  return (
    <MuiThemeProvider theme={createTheme(theme)}>
      <ThemeProvider theme={createTheme(theme)}>
        <AuthProvider>{content}</AuthProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
