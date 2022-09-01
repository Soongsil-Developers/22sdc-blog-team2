import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => {
  return (
    <div>
      {/* HEADER */}
      <nav class="navbar navbar-light">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            conduit
          </a>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              {/* <!-- Add "active" class when you're on that page" --> */}
              <a class="nav-link active" href="">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                <i class="ion-compose"></i>&nbsp;New Article
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Sign in
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <!-- HOME --> */}
      <div class="home-page">
        <div class="banner">
          <div class="container">
            <h1 class="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>

        <div class="container page">
          <div class="row">
            <div class="col-md-9">
              <div class="feed-toggle">
                <ul class="nav nav-pills outline-active">
                  <li class="nav-item">
                    <a class="nav-link disabled" href="">
                      Your Feed
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="">
                      Global Feed
                    </a>
                  </li>
                </ul>
              </div>

              <div class="article-preview">
                <div class="article-meta">
                  <a href="profile.html">
                    <img src="http://i.imgur.com/Qr71crq.jpg" />
                  </a>
                  <div class="info">
                    <a href="" class="author">
                      Eric Simons
                    </a>
                    <span class="date">January 20th</span>
                  </div>
                  <button class="btn btn-outline-primary btn-sm pull-xs-right">
                    <i class="ion-heart"></i> 29
                  </button>
                </div>
                <a href="" class="preview-link">
                  <h1>How to build webapps that scale</h1>
                  <p>This is the description for the post.</p>
                  <span>Read more...</span>
                </a>
              </div>

              <div class="article-preview">
                <div class="article-meta">
                  <a href="profile.html">
                    <img src="http://i.imgur.com/N4VcUeJ.jpg" />
                  </a>
                  <div class="info">
                    <a href="" class="author">
                      Albert Pai
                    </a>
                    <span class="date">January 20th</span>
                  </div>
                  <button class="btn btn-outline-primary btn-sm pull-xs-right">
                    <i class="ion-heart"></i> 32
                  </button>
                </div>
                <a href="" class="preview-link">
                  <h1>
                    The song you won't ever stop singing. No matter how hard you
                    try.
                  </h1>
                  <p>This is the description for the post.</p>
                  <span>Read more...</span>
                </a>
              </div>
            </div>

            <div class="col-md-3">
              <div class="sidebar">
                <p>Popular Tags</p>

                <div class="tag-list">
                  <a href="" class="tag-pill tag-default">
                    programming
                  </a>
                  <a href="" class="tag-pill tag-default">
                    javascript
                  </a>
                  <a href="" class="tag-pill tag-default">
                    emberjs
                  </a>
                  <a href="" class="tag-pill tag-default">
                    angularjs
                  </a>
                  <a href="" class="tag-pill tag-default">
                    react
                  </a>
                  <a href="" class="tag-pill tag-default">
                    mean
                  </a>
                  <a href="" class="tag-pill tag-default">
                    node
                  </a>
                  <a href="" class="tag-pill tag-default">
                    rails
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- FOOTER --> */}
      <footer>
        <div class="container">
          <a href="/" class="logo-font">
            conduit
          </a>
          <span class="attribution">
            An interactive learning project from
            <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
            licensed under MIT.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
