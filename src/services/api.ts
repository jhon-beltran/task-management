import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Use environment variables
});

api.interceptors.request.use((config) => {
  const { user } = useAuth();
  if (user) {
    config.headers.Authorization = `Bearer ${user.access_token}`;
  }
  return config;
});

export default api;
