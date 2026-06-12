import axios from 'axios';

const API = axios.create({
  // Use Render-provided URL if set; otherwise fall back to local dev.
  // NOTE: backend mounts routes at `/api`, so baseURL must include `/api`.
  baseURL:
    import.meta.env.VITE_API_URL || 'https://gemstone-backend-1.onrender.com',
});



// Attach JWT to every outgoing request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;

