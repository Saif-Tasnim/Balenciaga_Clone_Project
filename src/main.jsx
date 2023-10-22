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
import EntryLayout from './Layout/EntryLayout.jsx';
import LogIn from './Pages/EntryPage/LogIn/LogIn.jsx';
import Register from './Pages/EntryPage/Register/Register.jsx';

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
  {
    path: '/entry',
    element: <EntryLayout></EntryLayout>,
    children: [
      {
        path: 'login',
        element: <LogIn></LogIn>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
