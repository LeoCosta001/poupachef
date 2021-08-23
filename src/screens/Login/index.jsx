import React, { useState } from 'react';
import ThemeContext from '../../themes/context';
import InputDefault from '../../components/InputDefault';
import api from '../../services/api';

function Login({ history }) {

  const [ username, setUsername ] = useState(null);
  const [ password, setPassword ] = useState(null);


  async function handleLogin (e) {
    e.preventDefault();

    if(!username || !password) {
      setUsername('');
      setPassword('');
      window.alert('Insira todos os dados do login');
      return;
    }

    try { 
      const formData = new FormData();
      formData.append('grant_type', 'password');
      formData.append('username', username);
      formData.append('password', password);
      formData.append('scope', 'web');

      const response = await api.post('/oauth/token', formData, {
        auth: {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD, 
        },
      });

      localStorage.setItem('user', JSON.stringify(response.data))
      history.push('/suppliers')


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
            <form>
              <div className="login__input">
                <InputDefault title="Username" type="text" placeholder="Username" onChange={(e) => { setUsername(e.currentTarget.value) }} />
                <InputDefault title="Senha" type="password" placeholder="Senha" onChange={(e) => {setPassword(e.currentTarget.value) }} />
              </div>
              <div className="login__containerBtn">
                <button className="login__btn" onClick={handleLogin}>
                  Sign In
                </button>
              </div>
            </form>
          </div>  
        </section>

      )}
    </ThemeContext.Consumer>
  )
}

export default Login;