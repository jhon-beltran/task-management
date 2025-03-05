import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../../types';

interface ProjectState {
  projects: Project[];
}

const initialState: ProjectState = {
  projects: [],
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
  },
});

export const { setProjects } = projectSlice.actions;
export default projectSlice.reducer;
