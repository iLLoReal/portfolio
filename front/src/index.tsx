import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider as Router, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './state/store';
import App from "./App";
import ProjectsPage from "./components/pages/Projects/ProjectsPage";
import ProjectPage from './components/pages/Projects/ProjectPage';
import Header  from './components/Template/Header';
import Footer  from './components/Template/Footer';

/*<CardHeader title='Olivier Laffon' action={
  <Avatar onClick={downloadResume}>CV</Avatar>
} />
*/
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <App />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/projects/:projectTitle',
    element: <ProjectPage />
  }

]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals(console.log);
