import React, { useState } from 'react';
import './scss/styles.scss';
import Routes from './routes';
import Header from './components/Header';
import ThemeContext from './themes/context';

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light' );
    localStorage.setItem('theme', theme)
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Header toggleTheme={toggleTheme} />
        <Routes />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;