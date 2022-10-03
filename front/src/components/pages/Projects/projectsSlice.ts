import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { projectType } from './ProjectsPage';

export interface projectsSliceState {
  projects: projectType[];
  status: 'idle' | 'rejected' | 'loading'
}

const initialState: projectsSliceState = {
  projects: [{
    id: 0,
    title: 'Portfolio',
    stack: ['React', 'TypeScript']
  },{
    id: 1,
    title: 'RFP',
    stack: ['React', 'TypeScript', 'Strapi', 'Tauri']
  }],
  status: 'idle'
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject(state: projectsSliceState, action: PayloadAction<projectType>) {
      if (!state.projects.includes(action.payload)) {
        state.projects.push(action.payload);
      }
    },
  }
});

export const { addProject } = projectsSlice.actions

export default projectsSlice.reducer
