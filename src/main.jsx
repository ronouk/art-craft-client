import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

//route
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllItems from './components/pages/AllItems';
import Root from './components/pages/Root';
import ErrorPage from './components/pages/ErrorPage';
import Home from './components/pages/Home';
import AddProduct from './components/pages/AddProduct';
import EditProduct from './components/pages/EditProduct';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-crafts",
        element: <AllItems />
      },
      {
        path: "/add-craft",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/edit-craft",
        element: <EditProduct />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
