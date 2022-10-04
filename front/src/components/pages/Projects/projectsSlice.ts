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
    stack: ['React', 'TypeScript'],
    previewUrl: 'https://img.freepik.com/free-psd/phone-14-pro-front-view_187299-22711.jpg?w=826&t=st=1664891574~exp=1664892174~hmac=8a76ae7fad69dcdfe7f2853dc822ecc162b8d2bcf108a6043a95365039565096'
  },{
    id: 1,
    title: 'RFP',
    stack: ['React', 'TypeScript', 'Strapi', 'Tauri'],
    previewUrl: 'https://img.freepik.com/free-psd/phone-14-pro-front-view_187299-22711.jpg?w=826&t=st=1664891574~exp=1664892174~hmac=8a76ae7fad69dcdfe7f2853dc822ecc162b8d2bcf108a6043a95365039565096'
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
