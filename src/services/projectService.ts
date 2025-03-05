import api from './api';
import { Project } from '../types';

export const getProjects = async () => {
  const response = await api.get('/projects');
  return response.data;
};

export const createProject = async (project: Project) => {
  const response = await api.post('/projects', project);
  return response.data;
};