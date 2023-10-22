import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import WomenPage from './Pages/WomenPage/WomenPage.jsx';
import MenPage from './Pages/MenPage/MenPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "womenPage",
        element: <WomenPage></WomenPage>
      },
      {
        path: "menPage",
        element: <MenPage></MenPage>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
