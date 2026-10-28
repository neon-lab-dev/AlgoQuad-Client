import axios from 'axios';

// http://localhost:5000
// https://algoquad-server.vercel.app

export const api = axios.create({
  baseURL: 'https://algoquad-server.vercel.app/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});