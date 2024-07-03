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
import CraftItemDetails from './components/pages/CraftItemDetails';
import Register from './components/pages/Register';
import SignIn from './components/pages/SignIn';

export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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
        element: <AllItems />,
        loader: () => fetch(`${VITE_BACKEND_URL}/all-crafts/`)
      },
      {
        path: "/add-craft",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/edit-craft/:id",
        element: <EditProduct />
      },
      {
        path: "/craft-details/:id",
        element: <CraftItemDetails></CraftItemDetails>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>
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
