export interface Project {
  id: string;
  name: string;
  description?: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  projectId: string;
  completed: boolean;
}
