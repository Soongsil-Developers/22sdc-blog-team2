import React from 'react';
import ReactDOM from 'react-dom';
import Signin from './Signin';

import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { useEffect } from 'react';
import { LoginState } from '../atoms/Login';
import { postUsersLogin } from '../remotes';

const Settings = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  const Logout = () => {
    localStorage.removeItem('token');
    // LoginState(false);
    if (isLoggedIn) {
      setIsLoggedIn(false);
    }
    document.location.href = '/';
  };

  return (
    <div>
      <div className="settings-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Your Settings</h1>

              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="URL of profile picture"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Your Name"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      rows="8"
                      placeholder="Short bio about you"
                    ></textarea>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Email"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                    />
                  </fieldset>
                  <button className="btn btn-lg btn-primary pull-xs-right">
                    Update Settings
                  </button>
                </fieldset>
              </form>
              <hr />
              <button className="btn btn-outline-danger" onClick={Logout}>
                Or click here to logout.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
