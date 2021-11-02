import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

import "./Login.css"
import { useHistory } from 'react-router-dom'

export default function Login() {
  const [loginState, setloginState] = useState(false)
  const history = useHistory();

  const succesLogin = (respuesta) => {
    setloginState(true);
  }

  const responseGoogle = (respuesta) => {
    setloginState(false);
  }

  const logout = (respuesta) => {
    console.log(respuesta);
  }

  useEffect(() => {
    console.log('Validacion exitosa');
    loginState && history.push('/Products')
  }, [loginState]);



  return (
    <div>
      <br /><br />

      <div class="login-form">
        <form>
          <h1>BookStore</h1>
          <div class="form-group">
            <input type="email" name="email" placeholder="E-mail Address" />
            <span class="input-icon"><i class="fa fa-envelope"></i></span>
          </div>
          <div class="form-group">
            <input type="password" name="psw" placeholder="Password" />
            <span class="input-icon"><i class="fa fa-lock"></i></span>
          </div>

          <button class="login-btn">Login</button>
          <a class="reset-psw" href="#">Forgot your password?</a>
          <div class="seperator"><b>or</b></div>

          <div class="social-icon">
            <GoogleLogin
              clientId="17332478216-0lt72fj95uaub56922jovjsufer51un9.apps.googleusercontent.com"
              /*
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
              )}
              */

              onSuccess={succesLogin}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              className="btnGoogle"
            />


          </div>
        </form>






      </div>
    </div>
  )
}
