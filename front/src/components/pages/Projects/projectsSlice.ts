import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProjects } from '../../../api/projects';
import { projectType } from './ProjectsPage/ProjectsPage';
import rfpImage from './rfp_preview.jpg';
import portfolioImage from './portfolio_preview.jpg';
import octoberImage from './october_preview.png';

export interface projectsSliceState {
  projects: projectType[];
  status: 'idle' | 'failed' | 'loading'
}

export const notFound: projectType = {
  id: -1,
  title: 'Pas de projet',
  stack: [{ title: 'pas de stack' }],
  previewUrl: 'https://images.pexels.com/photos/159868/lost-cat-tree-sign-fun-159868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  context: 'Aucun projet n\'est disponible pour l\'instant !',
  videoUrl: 'https://www.youtube.com/watch?v=eHrcRqu_Es4',
  gitUrl: 'none',
}

const initialState: projectsSliceState = {
  projects: [
    {
      id: 0,
      title: 'RFP',
      stack: [
        { title: 'React', link: 'https://fr.reactjs.org/' },
        { title: 'Typescript', link: 'https://www.typescriptlang.org/' },
        { title: 'Strapi', link: 'https://strapi.io/' },
        { title: 'Tauri (Rust)', link: 'https://tauri.app/' }
      ],
      previewUrl: rfpImage,
      context: "Dans le cadre de mon stage de fin d'étude, en tant qu'auto-entrepreneur, j'ai eu l'occasion de réaliser la solution d'un client dans le domaine de l'art plastique, qui souhaitait son propre CMS, répondant à des besoins spécifiques.",
      videoUrl: "https://www.youtube.com/embed/xLykUIn6XI0",
      gitUrl: 'https://github.com/iLLoReal/rfp',
    },
    {
      id: 1,
      title: 'Portfolio',
      stack: [
        { title: 'React', link: 'https://fr.reactjs.org/' },
        { title: 'Typescript', link: 'https://www.typescriptlang.org/' },
        { title: 'MUI', link: 'https://mui.com/' },
        { title: 'Strapi', link: 'https://strapi.io/' },
      ],
      previewUrl: portfolioImage,
      context: 'Réalisation de mon portfolio',
      videoUrl: "https://www.youtube.com/watch?v=yhNewL6d6U8",//https://www.youtube.com/embed/yhNewL6d6U8
      gitUrl: 'https://github.com/iLLoReal/portfolio',
    },
    {
      id: 2,
      title: 'October',
      stack: [
        { title: 'Ember.js', link: 'https://emberjs.com/' },
        { title: 'Bootstrap', link: 'https://getbootstrap.com/' },
      ],
      previewUrl: octoberImage,
      context: `Partie front d'une application de suivi et de renseignement sur différents projets de financements participatifs`,
      videoUrl: 'https://www.youtube.com/embed/0fQlMH858Iw',
      gitUrl: 'https://github.com/iLLoReal'
    }
  ],
  status: 'idle'
}

export const loadProjects = createAsyncThunk(
  'projects/loadProjects',
  async () => {
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
    })
      .addCase(loadProjects.fulfilled, (state: projectsSliceState, action: PayloadAction<projectType[]>) => {
        state.status = 'idle';
        state.projects = action.payload;
      })
      .addCase(loadProjects.rejected, (state: projectsSliceState, action: PayloadAction<any>) => {
        state.status = 'failed';
        if (!state.projects.length)
          state.projects.push(notFound);
      })
  },
});

export const { addProject } = projectsSlice.actions

export default projectsSlice.reducer
