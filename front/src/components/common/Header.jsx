//@ts-check

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            conduit
          </a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              {/* <!-- Add "active" className when you're on that page" --> */}
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/article2" className="nav-link">
                <i className="ion-compose"></i>&nbsp;New Article
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/settings" className="nav-link">
                <i className="ion-gear-a"></i>&nbsp;Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link to="signup" className="nav-link">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
