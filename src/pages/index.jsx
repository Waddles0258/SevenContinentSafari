import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { App } from './App';

import { QuizzAnimal } from '../components/QuizzAnimal';
import { QuizzContinent } from '../components/QuizzContinent';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Videos } from '../components/Videos';
import { useState } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  
  {
    path: '/QuizzContinent',
    element: <QuizzContinent />,
  },
  {
    path: '/QuizzAnimal',
    element: <QuizzAnimal />,
  },

  
]);

createRoot(document.querySelector('#root')).render(
  <RouterProvider router={router} />,
);
