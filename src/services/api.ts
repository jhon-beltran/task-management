import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const api = axios.create({
  baseURL: import.meta.env.PUBLIC_TASK_MANAGEMENT_API_URL
});

api.interceptors.request.use((config) => {
  const { user } = useAuth();
  if (user) {
    config.headers.Authorization = `Bearer ${user.access_token}`;
  }
  return config;
});

export default api;
