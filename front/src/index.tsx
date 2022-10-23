import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider as Router } from 'react-router-dom';
import ProjectsPage from "./components/pages/Projects/ProjectsPage/ProjectsPage";
import './index.css';
import store from './state/store';

export const router = createBrowserRouter([
  {
    path: '/*',
    element: <ProjectsPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <Router  router={router} />
  </Provider>
);
