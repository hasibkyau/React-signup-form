import React from 'react';
import Dashboard from './Dashborad';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import './components.css';
import logo from '../assets/logo.jpg';

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
                <div className='d-flex flex-md-row flex-column m-5'>

                    <div className='col-sm-12 col-md-6 col-lg-7 m-2 BackGround'>
                        <img src={logo} alt="Smiley face" width="164.21" height="60" style={{ float: "left" }} />
                        {/* <h1><span style={{ color: "black" }}>Ultimate</span></h1>
                        <h5>Human Resource Management System</h5> */}
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4 m-2 BoxShadow'>
                        <SignUp />
                    </div>
                </div>
            </div>

        ),
    },
    {
        path: "login",
        element: <div>
            <div className='d-flex flex-md-row flex-column m-5'>
                <div className='col-sm-12 col-md-6 col-lg-7 m-2 BackGround'>
                    <img src={logo} alt="Smiley face" width="164.21" height="60" style={{ float: "left" }} />
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4 m-2 BoxShadow'>
                <Login />
                    </div>
            </div>
            
        </div>,
    },
]);



function Main() {
    return (
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