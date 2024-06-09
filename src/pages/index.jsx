import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { App } from './App';
import { Pexesso } from '../components/Pexesso';
import { Quizz } from '../components/Quizz';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Pexesso',
    element: <Pexesso />,
  },
  {
    path: '/Quizz',
    element: <Quizz />,
  },
]);

createRoot(document.querySelector('#root')).render(
  <RouterProvider router={router} />,
);
