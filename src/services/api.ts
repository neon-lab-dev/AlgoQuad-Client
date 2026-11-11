import axios from 'axios';

// http://localhost:5000
// https://algoquad-server.onrender.com
// http://13.206.129.199

export const api = axios.create({
  baseURL: 'http://13.206.129.199/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});