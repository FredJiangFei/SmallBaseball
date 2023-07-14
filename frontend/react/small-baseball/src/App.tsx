import './App.css';
import routes from './routes';
import { useRoutes, useNavigate } from 'react-router-dom';
import { AuthProvider } from './contexts/JWTContext';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as MyThemeProvider } from './contexts/ThemeContext';
import createTheme from './theme';
import useTheme from './hooks/useTheme';
import { ErrorBoundary } from 'react-error-boundary';

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
  const navigate = useNavigate();

  function ErrorFallback({ error, resetErrorBoundary }: any) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: 'red' }}>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }

  function handleReset() {
    navigate('/');
  }

  const logError = (error: Error, info: { componentStack: string }) => {
    console.log(error, info);
  };

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset} onError={logError}>
        <AuthProvider>{content}</AuthProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
