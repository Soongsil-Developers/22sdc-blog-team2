import axios from 'axios';

const conduitAxios = axios.create({
  baseURL: 'https://conduit.productionready.io/api',
});

/**
 * @param {string} username
 * @returns {Promise<{ user: { email: string; token: string; username: string; bio: string; image: string } }>}
 */
const getUser = (username) => conduitAxios.get(`/user`);

/**
 * @param {string} username
 * @returns {Promise<{ user: { username: string; bio: string; image: string; following: boolean; } }>}
 */
const getProfile = (username) => conduitAxios.get(`/profiles/${username}`);

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
 * @param {string} slug
 * @returns {Promise<{ articles: [ { slug: string; title: string; description: string; body: string;
 * tagList: [string]; createdAt: string;updatedAt: string;favorited: boolean;favoritesCount: number;
 * author: {username: string;bio: string;image: string;following: boolean}}];
 *                     articlesCount: number;}>}
 */
const getArticleSlug = (slug) => conduitAxios.get(`/articles/${slug}`);

/**
 * @param {string} slug
 * @returns {Promise<{ comments: [
 *  {
 *     id: number;
 *      createdAt: string;
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
const getComments = (slug) => conduitAxios.get(`/articles/${slug}/comments`);

/**
 * @param {string} tags
 * @returns {Promise<{ tags: [string] }>}
 */
const getDefault = (tags) => conduitAxios.get(`/tags`);

export {
  getUser,
  getProfile,
  getArticleFeed,
  getArticle,
  getArticleSlug,
  getComments,
  getDefault,
};
