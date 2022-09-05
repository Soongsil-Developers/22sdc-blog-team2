// @ts-check
import axios from 'axios';

const conduitAxios = axios.create({
  baseURL: 'https://conduit.productionready.io/api',
});

// user
/**
 * @param {string} username
 * @returns {Promise<{ user: {email: string; token: string; username: string; bio: string; image: string}}>}
 */
const postUsersLogin = (username) => conduitAxios.post(`/users/login`);
/**
 * @param {{email: string; token: string; username: string; bio: string; image: string}} user
 * @returns {Promise<{ user: {email: string; token: string; username: string; bio: string; image: string}}>}
 */
const postUsers = (user) => conduitAxios.post(`/users`);
/**
 * @param {string} username
 * @returns {Promise<{ user: { email: string; token: string; username: string; bio: string; image: string } }>}
 */
const getUser = (username) => conduitAxios.get(`/user`);

/**
 * @param {string} username
 * @returns {Promise<{ user: { email: string; token: string; username: string; bio: string; image: string } }>}
 */
const putUser = (username) => conduitAxios.put(`/user`);

// profile
/**
 * @param {string} username
 * @returns {Promise<{ profile: { username: string; bio: string; image: string; following: boolean; } }>}
 */
const getProfile = (username) => conduitAxios.get(`/profiles/${username}`);
/**
 * @param {string} username
 * @returns {Promise<{ profile: { username: string; bio: string; image: string; following: boolean; } }>}
 */
const postProfile = (username) =>
  conduitAxios.post(`/profiles/${username}/follow`);
/**
 * @param {string} username
 * @returns {Promise<{ profile: { username: string; bio: string; image: string; following: boolean; } }>}
 */
const deleteProfile = (username) =>
  conduitAxios.delete(`/profiles/${username}/follow`);

// article
/**
 * @param {string} feed
 * @returns {Promise<{ articles: [ { slug: string; title: string; description: string; body: string;
 * tagList: [string]; createdAt: string;updatedAt: string;favorited: boolean;favoritesCount: number;
 * author: {username: string;bio: string;image: string;following: boolean}}];
 *                     articlesCount: number;}>}
 */
const getArticleFeed = (feed) => conduitAxios.get(`/articles/feed`);
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
