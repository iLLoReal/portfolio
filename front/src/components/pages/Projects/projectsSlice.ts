import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { projectType } from './ProjectsPage/ProjectsPage';
import axios from 'axios';
import * as routes from '../../../routes';
import { getProjects } from '../../../api/projects';

export interface projectsSliceState {
  projects: projectType[];
  status: 'idle' | 'failed' | 'loading'
}

export const notFound: projectType = {
  id: -1,
  title: 'Pas de projet',
  stack: ['pas de stack'],
  previewUrl: 'https://images.pexels.com/photos/159868/lost-cat-tree-sign-fun-159868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}

const initialState: projectsSliceState = {
  projects: [],
  status: 'idle'
}

export const loadProjects = createAsyncThunk(
  'projects/loadProjects',
  async () => {
    console.log('ici');
    return (getProjects())
  }
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject(state: projectsSliceState, action: PayloadAction<projectType>) {
      if (!state.projects.includes(action.payload)) {
        state.projects.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.
      addCase(loadProjects.pending, (state: projectsSliceState) => {
        state.status = 'loading'
        console.log('There')
      })
      .addCase(loadProjects.fulfilled, (state: projectsSliceState, action: PayloadAction<projectType[]>) => {
        state.status = 'idle';
        console.log('idle');
        console.log('après transform', action.payload);
        state.projects = action.payload;
      })
      .addCase(loadProjects.rejected, (state: projectsSliceState, action: PayloadAction<any>) => {
        state.status = 'failed';
        console.log('failed', action.payload);
        state.projects.push(notFound);
      })
  },
});

export const { addProject } = projectsSlice.actions

export default projectsSlice.reducer
