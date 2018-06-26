const dev = process.env.NODE_ENV === 'development';

const API_URL = dev ? 'http://localhost:3004' : process.env.API_URL;
const CLIENT_URL = dev ? 'http://localhost:3000' : process.env.CLIENT_URL;
const CLOUD_NAME = 'ezgamio';

module.exports = {
  API_URL,
  CLIENT_URL,
  CLOUD_NAME,
};
