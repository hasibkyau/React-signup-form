import React from 'react';
import Dashboard from './Dashborad';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';

import { createRoot } from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <SignUp/>
          <Link to="login">Login</Link>
        </div>
      ),
    },
    {
      path: "login",
      element: <div>login</div>,
    },
  ]);
  


  function Main(){
    return(
        <div>
            {
                  createRoot(document.getElementById("root")).render(
                    <RouterProvider router={router} />
                  )
            }
        </div>
    )
  }

  export default Main;