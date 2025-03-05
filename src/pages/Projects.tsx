import React, { useEffect, useState } from 'react';
import { getProjects } from '../services/projectService';
import { Project } from '../types';
import { ProjectList } from '../components/projects/ProjectList';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;