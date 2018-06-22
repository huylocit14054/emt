// const API_URL = 'http://localhost:3004';
// const CLIENT_URL = 'http://localhost:3000';
const API_URL = process.env.API_URL || 'http://localhost:3004';
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';
const CLOUD_NAME = 'ezgamio';
module.exports = {
  API_URL,
  CLIENT_URL,
  CLOUD_NAME,
};
