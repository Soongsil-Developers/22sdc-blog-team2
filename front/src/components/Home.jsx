//@ts-check

import React from 'react';
import ReactDOM from 'react-dom';
import ArticleFeed from './ArticleFeed';
import { getArticleFeed } from '../remotes';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    getArticleFeed((limit: 20), (offset: 0)).then((res) => {
      const data = res.data.article;
    });
  });

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link disabled" href="">
                    Your Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>

            {data.map(() => {
              return (
                <ArticleFeed
                  author={data.author}
                  createdAt={data.createdAt}
                  description={data.description}
                  favoritesCount={data.favoritesCount}
                  slug={data.slug}
                  title={data.title}
                  updatedAt={data.updatedAt}
                />
              );
            })}
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <a className="tag-pill tag-default" href="">
                  React
                </a>
                <a className="tag-pill tag-default" href="">
                  JavaScript
                </a>
                <a className="tag-pill tag-default" href="">
                  Redux
                </a>
                <a className="tag-pill tag-default" href="">
                  Java
                </a>
                <a className="tag-pill tag-default" href="">
                  Spring
                </a>
                <a className="tag-pill tag-default" href="">
                  Node
                </a>
                <a className="tag-pill tag-default" href="">
                  Python
                </a>
                <a className="tag-pill tag-default" href="">
                  Golang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
