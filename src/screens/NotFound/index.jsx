import React from 'react';
import ThemeContext from '../../themes/context';

export default function NotFound() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={`${theme} NotFound__wrapper`}>
          <h2 className="NotFound__wrapper__title">Pagina não encontrada</h2>
          <p className="NotFound__wrapper__errorCode">Erro 404</p>
          <span></span>
          <span></span>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
