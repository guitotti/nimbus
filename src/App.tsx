import { ThemeProvider } from './contexts/ThemeContext';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Home />
    </ThemeProvider>
  );
};

export default App;
