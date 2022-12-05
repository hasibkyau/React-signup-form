import React from 'react';
import Dashboard from './Dashborad';
import SignUp from './Auth/SignUp';
import '../components/css/components.css';
import logo from '../assets/logo.jpg';
import background from '../assets/background.jpg'

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
            <div style={{ margin: "5px" }}>
                <div style={{ position: "absolute", display: "inline-flex", left: "50px", top: "50px" }}>
                    <img className='' src={logo} alt="logo" width="164.21" height="60" />
                </div>

                <div className='' style={{ display: "inline-flex", paddingTop: "5%" }}>
                    <img className='bgImg' src={background} alt="Smiley face" />
                </div>

                <div className='leftBox' style={{ display: "inline-flex" }}>
                    <div className='BoxShadow' >
                        <SignUp />
                    </div>
                </div>

            </div>
        ),
    },
    {
        path: "dashboard",
        element: <div><Dashboard /></div>
    }
]);



function Main() {
    return (
        <div>
            <RouterProvider router={router} />
            {/* {
                createRoot(document.getElementById("root")).render(
                    <RouterProvider router={router} />
                )
            } */}
        </div>
    )
}

export default Main;