import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProjects } from '../../../api/projects';
import { projectType } from './ProjectsPage/ProjectsPage';
import rfpImage from './rfp_preview.jpg';
import portfolioImage from './portfolio_preview.jpg';

export interface projectsSliceState {
  projects: projectType[];
  status: 'idle' | 'failed' | 'loading'
}

export const notFound: projectType = {
  id: -1,
  title: 'Pas de projet',
  stack: ['pas de stack'],
  previewUrl: 'https://images.pexels.com/photos/159868/lost-cat-tree-sign-fun-159868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  context: 'Aucun projet n\'est disponible pour l\'instant !',
}

const initialState: projectsSliceState = {
  projects: [
    {
      id: 0,
      title: 'RFP',
      stack: ['React', 'Typescript', 'Strapi', 'Tauri (Rust)'],
      previewUrl: rfpImage,
      context: "Dans le cadre de mon stage de fin d'étude, en tant qu'auto-entrepreneur, j'ai eu l'occasion de réaliser la solution d'un client dans le domaine de l'art plastique, qui souhaitait son propre CMS, répondant à des besoins spécifiques.",
    },
    {
      id: 1,
      title: 'Portfolio',
      stack: ['React', 'TypeScript', 'MUI', 'Strapi'],
      previewUrl: portfolioImage,
      context: 'Réalisation de mon portfolio',
    }
  ],
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
    builder.addCase(loadProjects.pending, (state: projectsSliceState) => {
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
        if (!state.projects.length)
          state.projects.push(notFound);
      })
  },
});

export const { addProject } = projectsSlice.actions

export default projectsSlice.reducer
