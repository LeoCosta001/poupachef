import React from 'react';
import './scss/styles.scss';
import Routes from './routes';
import Header from './components/Header';
import ThemeContext from './themes/context';
import usePersistedState from './themes/usePersistedState';

function App() {

  const [theme, setTheme] = usePersistedState('theme', 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light' );
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Header toggleTheme={toggleTheme} Theme={theme} />
        <Routes />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;