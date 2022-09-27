import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Projects from "./components/pages/Projects/Projects";
import { Provider } from 'react-redux';
import store from './state/store';

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
    element: <Projects />,
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
