import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://algoquad-server.vercel.app/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});