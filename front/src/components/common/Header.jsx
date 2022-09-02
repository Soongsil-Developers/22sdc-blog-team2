import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-light">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            conduit
          </a>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              {/* <!-- Add "active" class when you're on that page" --> */}
              <Link to="/" class="nav-link active">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/article2" class="nav-link">
                <i class="ion-compose"></i>&nbsp;New Article
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/settings" class="nav-link">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/signin" class="nav-link">
                Sign in
              </Link>
            </li>
            <li class="nav-item">
              <Link to="signup" class="nav-link" href="">
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
