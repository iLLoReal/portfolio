import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../components/pages/Projects/projectsSlice';

const store = configureStore({
  reducer: {
    projectStore: projectsReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
