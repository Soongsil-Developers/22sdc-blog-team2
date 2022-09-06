// @ts-check
import axios from 'axios';

const conduitAxios = axios.create({
  baseURL: 'https://conduit.productionready.io/api',
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

// ㅡㅡㅡㅡㅡ User ㅡㅡㅡㅡㅡ
/**
 * @param {{ email: string; password: string;}} user
 * @returns {Promise<{ data: { user: User }}>}
 */
const postUsersLogin = (user) => conduitAxios.post(`/users/login`);

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

// article
/**
 * @param {number} limit
 * @param {number} offset
 * @returns {Promise<{ articles: [ { slug: string; title: string; description: string; body: string;
 * tagList: [string]; createdAt: string;updatedAt: string;favorited: boolean;favoritesCount: number;
 * author: {username: string;bio: string;image: string;following: boolean}}];
 *                     articlesCount: number;}>}
 */
const getArticleFeed = (limit, offset) => conduitAxios.get(`/articles/feed`);
/**
 * @param {string} articles
 * @returns {Promise<{ articles: [ { slug: string; title: string; description: string; body: string;
 * tagList: [string]; createdAt: string;updatedAt: string;favorited: boolean;favoritesCount: number;
 * author: {username: string;bio: string;image: string;following: boolean}}];
 *                     articlesCount: number;}>}
 */
const getArticle = (articles) => conduitAxios.get(`/articles`);
/**
 * @param {string} articles
 * @returns {Promise<{ articles: [ { slug: string; title: string; description: string; body: string;
 * tagList: [string]; createdAt: string;updatedAt: string;favorited: boolean;favoritesCount: number;
 * author: {username: string;bio: string;image: string;following: boolean}}];
 *                     articlesCount: number;}>}
 */
const postArticle = (articles) => conduitAxios.post(`/articles`);
/**
 * @param {string} slug
 * @returns {Promise<{ articles: [ { slug: string; title: string; description: string; body: string;
 * tagList: [string]; createdAt: string;updatedAt: string;favorited: boolean;favoritesCount: number;
 * author: {username: string;bio: string;image: string;following: boolean}}];
 *                     articlesCount: number;}>}
 */
const getArticleSlug = (slug) => conduitAxios.get(`/articles/${slug}`);
/**
 * @param {string} slug
 * @returns {Promise<{ articles: [ { slug: string; title: string; description: string; body: string;
 * tagList: [string]; createdAt: string;updatedAt: string;favorited: boolean;favoritesCount: number;
 * author: {username: string;bio: string;image: string;following: boolean}}];
 *                     articlesCount: number;}>}
 */
const putArticle = (slug) => conduitAxios.put(`/articles/${slug}`);
/**
 * @param {string} slug
 * @returns {Promise<{ articles: [ { slug: string; title: string; description: string; body: string;
 * tagList: [string]; createdAt: string;updatedAt: string;favorited: boolean;favoritesCount: number;
 * author: {username: string;bio: string;image: string;following: boolean}}];
 *                     articlesCount: number;}>}
 */
const deleteArticle = (slug) => conduitAxios.delete(`/articles/${slug}`);

// comments
/**
 * @param {string} slug
 * @returns {Promise<{
 *  comments: [
 *    {
 *      id: number;
 *      createdAt: string;
 *      updatedAt: string;
 *      body: string;
 *      author: {
 *        username: string;
 *        bio: string;
 *        image: string;
 *        following: boolean
 *      }
 *    }
 *   ]
 * }>}
 */
const getComments = (slug) => conduitAxios.get(`/articles/${slug}/comments`);
/**
 * @param {string} slug
 * @returns {Promise<{ comments: [
 *  {
 *     id: number;
 *     createdAt: string;
 *     updatedAt: string;
 *     body: string;
 *     author: {
 *       username: string;
 *       bio: string;
 *       image: string;
 *       following: boolean
 *     }
 *   }
 * ]
 *
 *
 * }>}
 */
const postComments = (slug) => conduitAxios.post(`/articles/${slug}/comments`);
/**
 * @param {string} slug
 * @param {number} id
 */
const deleteComments = (slug, id) =>
  conduitAxios.delete(`/articles/${slug}/comments/${id}`);

//favorites
/**
 * @param {string} slug
 * @returns {Promise<{ articles: [ { slug: string; title: string; description: string; body: string;
 * tagList: [string]; createdAt: string;updatedAt: string;favorited: boolean;favoritesCount: number;
 * author: {username: string;bio: string;image: string;following: boolean}}]
 * }>}
 */
const postFavoirtes = (slug) => conduitAxios.post(`/articles/${slug}/favorite`);
/**
 * @param {string} slug
 * @returns {Promise<{ articles: [ { slug: string; title: string; description: string; body: string;
 * tagList: [string]; createdAt: string;updatedAt: string;favorited: boolean;favoritesCount: number;
 * author: {username: string;bio: string;image: string;following: boolean}}]
 * }>}
 */
const deleteFavoirtes = (slug) =>
  conduitAxios.delete(`/articles/${slug}/favorite`);

//default
/**
 * @param {string} tags
 * @returns {Promise<{ tags: [string] }>}
 */
const getDefault = (tags) => conduitAxios.get(`/tags`);

export {
  postUsersLogin,
  postUsers,
  getUser,
  putUser,
  getProfile,
  postProfile,
  deleteProfile,
  getArticleFeed,
  getArticle,
  postArticle,
  getArticleSlug,
  putArticle,
  deleteArticle,
  getComments,
  postComments,
  deleteComments,
  postFavoirtes,
  deleteFavoirtes,
  getDefault,
};
