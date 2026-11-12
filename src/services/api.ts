import axios from 'axios';

// http://localhost:5000
// https://algoquad-server.onrender.com
// https://api.algoquad.com

export const api = axios.create({
  baseURL: 'https://api.algoquad.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});