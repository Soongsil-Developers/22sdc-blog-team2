// @ts-check
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Signin from '../components/Signin';

const conduitAxios = axios.create({
  baseURL:
    // 'https://api.realworld.io/api-docs/#/User%20and%20Authentication/Login',
    'https://api.realworld.io/api-docs/',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

/**
 * @typedef {Object} User
 * @property {string} email
 * @property {string} token
 * @property {string} username
 * @property {string} bio
 * @property {string} image
 *
 */

/**
 * @typedef {Object} Profile
 * @property {string} username
 * @property {string} bio
 * @property {string} image
 * @property {boolean} following
 *
 */

/**
 * @typedef {Object} Comments
 * @property {number} id
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {string} body
 * @property {Object} author
 * @property {string} username
 * @property {string} bio
 * @property {string} image
 * @property {boolean} following
 */

/**
 * @typedef {Object} Article
 * @property {string} slug
 * @property {string} title
 * @property {string} description
 * @property {string} body
 * @property {Array<string>} tagList
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {boolean} favorited
 * @property {number} favoritesCount //articles에서 이 부분만 추가된거니 omit 사용하면 되려나
 * @property {Object} author
 * @property {string} username
 * @property {string} bio
 * @property {string} image
 * @property {boolean} following
 */

/**
 * @typedef {Array<string>} tags
 */

// ㅡㅡㅡㅡㅡ User ㅡㅡㅡㅡㅡ
/**
 * @param {{email: string; password: string;}} user
 * @returns {Promise<{ data: { user: User }}>}
 */
const postUsersLogin = (user) =>
  conduitAxios.post(`/users/login`, {
    data: { email: user.email, password: user.password },
  });

/**
 * @param {{username: string; email: string; password: string;}} user
 * @returns {Promise<{ data: { user: User }}>}
 */
const postUsers = (user) => conduitAxios.post(`/users`);

/**
 * @returns {Promise<{ data: { user: User }}>}
 */
const getUser = () => conduitAxios.get(`/user`);

/**
 * @param {{user: User}} user
 * @returns {Promise<{ data: { user: User }}>}
 */
const putUser = (user) => conduitAxios.put(`/user`);

// ㅡㅡㅡㅡㅡ Profile ㅡㅡㅡㅡㅡ
/**
 * @param {{string}} username
 * @returns {Promise<{ data: { profile: Profile }}>}
 */
const getProfile = (username) => conduitAxios.get(`/profiles/${username}`);

/**
 * @param {string} username
 * @returns {Promise<{ data: { profile: Profile }}>}
 */
const postProfile = (username) =>
  conduitAxios.post(`/profiles/${username}/follow`);

/**
 * @param {string} username
 * @returns {Promise<{ data: { profile: Profile }}>}
 */
const deleteProfile = (username) =>
  conduitAxios.delete(`/profiles/${username}/follow`);

// ㅡㅡㅡㅡㅡ Articles ㅡㅡㅡㅡㅡ
/**
 * @param {{number}} limit //default 값은 어떻게 처리할까
 * @param {{number}} offset
 * @returns {Promise<{ data: { article: Omit<Article, 'favoritesCount'>  }}>}
 */
const getArticleFeed = (limit, offset) => conduitAxios.get(`/articles/feed`);

/**
 * @param {{string}} tag
 * @param {{string}} author
 * @param {{string}} favorited
 * @param {{number}} limit
 * @param {{number}} offset
 * @returns {Promise<{ data: { article: Omit<Article, 'favoritesCount'>  }}>}
 */
const getArticles = (tag, author, favorited, limit, offset) =>
  conduitAxios.get(`/articles`);

/**
 * @param {{title:string; description:string; body:string; tagList:Array<string>}} article
 * @returns {Promise<{ data: { article: Omit<Article, 'favoritesCount'>  }}>}
 */
const postArticles = (article) => conduitAxios.post(`/articles`);

/**
 * @param {{string}} slug
 * @returns {Promise<{ data: { article: Omit<Article, 'favoritesCount'>  }}>}
 */
const getArticlesSlug = (slug) => conduitAxios.get(`/articles/${slug}`);

/**
 * @param {{string}} slug
 * @param {{title:string; description:string; body:string}} article
 * @returns {Promise<{ data: { article: Omit<Article, 'favoritesCount'>  }}>}
 */
const putArticlesSlug = (slug, article) =>
  conduitAxios.put(`/articles/${slug}`);

/**
 * @param {string} slug
 */
const deleteArticlesSlug = (slug) => conduitAxios.delete(`/articles/${slug}`);

// ㅡㅡㅡㅡㅡ Comments ㅡㅡㅡㅡㅡ
/**
 * @param {{string}} slug
 * @returns {Promise<{ data: { comments: Article }}>}
 */
const getComments = (slug) => conduitAxios.get(`/articles/${slug}/comments`);

/**
 * @param {{string}} slug
 * @param {{body: string}} comment
 * @returns {Promise<{ data: { comments: Article }}>}
 */
const postComments = (slug, comment) =>
  conduitAxios.post(`/articles/${slug}/comments`);

/**
 * @param {{string}} slug
 * @param {{number}} id
 * @returns {Promise<{ data: { comments: Article }}>}
 */
const deleteComments = (slug, id) =>
  conduitAxios.delete(`/articles/${slug}/comments/${id}`);

// ㅡㅡㅡㅡㅡ Favorites ㅡㅡㅡㅡㅡ
/**
 * @param {{ string }} slug
 * @returns {Promise<{ data: { article: Article }}>}
 */
const postFavorites = (slug) => conduitAxios.post(`/articles/${slug}/favorite`);

/**
 * @param {{ string }} slug
 * @returns {Promise<{ data: { article: Article }}>}
 */
const deleteFavorites = (slug) =>
  conduitAxios.delete(`/articles/${slug}/favorite`);

// ㅡㅡㅡㅡㅡ default ㅡㅡㅡㅡㅡ
/**
 * @returns {Promise<{ data: { tag: tags }}>}
 */
const getTags = () => conduitAxios.get(`/tags`);

export {
  postUsersLogin,
  postUsers,
  getUser,
  putUser,
  getProfile,
  postProfile,
  deleteProfile,
  getArticleFeed,
  postArticles,
  getArticlesSlug,
  putArticlesSlug,
  deleteArticlesSlug,
  getComments,
  postComments,
  deleteComments,
  postFavorites,
  deleteFavorites,
  getTags,
};
