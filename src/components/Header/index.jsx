import React from 'react';
import ThemeContext from '../../themes/context';

function Header({ toggleTheme, Theme }) {
  
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={`${theme} Header__wrapper`}>
          <h1 className="Header__title">{`<PoupaChefe/>`}</h1>
          <label className="Header__switch">
            <input type="checkbox" onClick={toggleTheme} defaultChecked={Theme === 'light'}/>
            <span className="Header__slider Header__round"></span>
          </label>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default Header;