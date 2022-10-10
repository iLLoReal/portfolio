import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider as Router } from 'react-router-dom';
import App from "./App";
import DisplayResume from './components/pages/DisplayResume/DisplayResume';
import ProjectPage from './components/pages/Projects/ProjectPage/ProjectPage';
import ProjectsPage from "./components/pages/Projects/ProjectsPage/ProjectsPage";
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './state/store';

/*<CardHeader title='Olivier Laffon' action={
  <Avatar onClick={downloadResume}>CV</Avatar>
} />
*/
export const router = createBrowserRouter([
  {
    path: '/*',
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
  },
  {
    path: '/resume',
    element: <DisplayResume />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <Router router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals(console.log);
