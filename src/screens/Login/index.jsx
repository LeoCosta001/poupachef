function Login() {
  return (
    <section className="login__wrapper">

      <div className="login__container">
        <h2 className="login__title">Login</h2>
        <div className="login__input">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
        </div>
        <div className="login__btn">
          <button className="btn">Sign in</button>
        </div>
      </div>  

    </section>
  )
}

export default Login;