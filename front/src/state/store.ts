import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../components/Project/projectsSlice';
import appReducer from '../appSlice';
const store = configureStore({
  reducer: {
    projectStore: projectsReducer,
    appStore: appReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
