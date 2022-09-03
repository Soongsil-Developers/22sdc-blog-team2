import React from 'react';
import ReactDOM from 'react-dom';

const Signin = ({ form, onChange, onSubmit }) => {
  return (
    <div>
      <div class="auth-page">
        <div class="container page">
          <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
              <h1 class="text-xs-center">Sign In</h1>
              <p class="text-xs-center">
                <a href="">Need an account?</a>
              </p>

              <ul class="error-messages">
                <li>That email is already taken</li>
              </ul>

              <form onSubmit={onSubmit}>
                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    onChange={onChange}
                    value={form.username}
                  />
                </fieldset>
                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    onChange={onChange}
                    value={form.password}
                  />
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">
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
