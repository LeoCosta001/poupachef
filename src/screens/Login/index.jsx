import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ThemeContext from '../../themes/context';

import InputDefault from '../../components/InputDefault';

function Login() {

  const { loginWithRedirect } = useAuth0();

  return (
    <ThemeContext.Consumer>
      {theme => (
        
        <section className={`${theme} login__wrapper`}>
          <div className="login__container">
            <h2 className="login__title">Login</h2>
            <div className="login__input">
              <InputDefault title="Email" type="email" placeholder="Email" />
              <InputDefault title="Senha" type="password" placeholder="Senha" />
            </div>
            <div className="login__containerBtn">
              <button className="login__btn" onClick={() => loginWithRedirect()}>
                Sign In
              </button>
            </div>
          </div>  
        </section>

      )}
    </ThemeContext.Consumer>
  )
}

export default Login;