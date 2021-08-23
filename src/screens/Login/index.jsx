import React, { useState } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import ThemeContext from '../../themes/context';
import InputDefault from '../../components/InputDefault';
import api from '../../services/api';

function Login() {

  // const { loginWithRedirect } = useAuth0();
  const [ userEmail, setUserEmail ] = useState(null);
  const [ password, setPassword ] = useState(null);


  async function handleLogin (e) {
    e.preventDefault();

    if(!userEmail || !password) {
      setUserEmail('');
      setPassword('');
      window.alert('Insira todos os dados do login');
      return;
    }

    try {
      const response = await api.post('/oauth/token', {
        userEmail,
        password
      })
      console.log(response);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ThemeContext.Consumer>
      {theme => (
        
        <section className={`${theme} login__wrapper`}>
          <div className="login__container">
            <h2 className="login__title">Login</h2>
            <div className="login__input">
              <InputDefault title="Email" type="email" placeholder="Email" onChange={(e) => { setUserEmail(e.currentTarget.value) }} />
              <InputDefault title="Senha" type="password" placeholder="Senha" onChange={(e) => {setPassword(e.currentTarget.value) }} />
            </div>
            <div className="login__containerBtn">
              <button className="login__btn" onClick={handleLogin}>
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