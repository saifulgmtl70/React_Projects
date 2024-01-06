import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import ShowDetails from './Components/ShowDetails/ShowDetails';
import GivenDonation from './Components/Given_Donation/GivenDonation';
import Statistics from './Components/Statistics/Statistics';











const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/donations',
        element: <GivenDonation></GivenDonation>,
        loader: () => fetch('donation.json')
      },
      
      {
        path: '/donation/:id',
        element: <ShowDetails></ShowDetails>,
        loader: () => fetch('donation.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
      
    ]
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
