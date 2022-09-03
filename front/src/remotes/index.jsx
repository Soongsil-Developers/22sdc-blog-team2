import axios from 'axios';

const conduitAxios = axios.create({
  baseURL: 'https://conduit.productionready.io/api',
});

/**
 * @param {string} username
 * @returns {Promise<{ user: { email: string; token: string; username: string; bio: string; image: string } }>}
 */
const getUser = (username) => conduitAxios.get(`/profiles/${username}`);

/**
 * @param {string} username
 * @returns {Promise<{ user: { email: string; token: string; username: string; bio: string; following: boolean; } }>}
 */
const getProfile = (username) => conduitAxios.get(`/profiles/${username}`);

export { getUser, getProfile };