//@ts-check

import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { useEffect } from 'react';
import { LoginState } from '../atoms/Login';
import { postUsersLogin } from '../remotes';

const Signin = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
    }
  }, [isLoggedIn]);

  return (
    <div>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <a href="">Need an account?</a>
              </p>

              <ul className="error-messages">
                <li>That email is already taken</li>
              </ul>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  postUsersLogin({ email, password }).then((res) => {
                    if (res.data.user) {
                      setIsLoggedIn(true);
                      localStorage.setItem('token', res.data.user.token);
                    }
                  });
                }}
              >
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>

                <button
                  type="submit"
                  className="btn btn-lg btn-primary pull-xs-right"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
