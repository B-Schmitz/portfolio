import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster />
      <Router>
        <Home />
      </Router>
    </ThemeProvider>
  );
}

export default App;
