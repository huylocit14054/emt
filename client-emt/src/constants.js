const dev = process.env.NODE_ENV === 'development';

const API_URL = dev && process.browser ? 'http://localhost:3004' : process.env.API_URL;
const CLIENT_URL = dev && process.browser ? 'http://localhost:3000' : process.env.CLIENT_URL;
const CLOUD_NAME = 'ezgamio';
const CLOUD_URL = 'http://res.cloudinary.com/ezgamio/image/upload/c_scale,h_40,w_40/';
const AUTH_TOKEN = 'auth-token';

module.exports = {
  API_URL,
  CLIENT_URL,
  CLOUD_NAME,
  CLOUD_URL,
  AUTH_TOKEN,
};
