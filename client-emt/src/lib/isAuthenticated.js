import decode from 'jwt-decode';
import { AUTH_TOKEN } from '../constants';

const isAuthenticated = () => {
  const token = localStorage.getItem(AUTH_TOKEN);
  try {
    decode(token);
  } catch (err) {
    return false;
  }
  return true;
};

export default isAuthenticated;
