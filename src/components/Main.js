import React from 'react';
import Dashboard from './Dashborad';
import SignUp from './Auth/SignUp';
import './components.css';
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
            <div>
                                
                    <img className='img-fluid' src={logo} alt="logo" width="164.21" height="60" style={{ float: "left" }} />
            
            
            <div className='container pt-3'>

                <div className='row'>

                    <div className='co-12 col-sm-12 col-md-12 col-lg-7 '>
                        <img className='img-fluid' src={background} alt="Smiley face" width="612" height="437" style={{ float: "left" }} />
                    </div>


                    <div className='col-12 col-sm-12 col-md-12 col-lg-5 BoxShadow'>
                        <SignUp />
                    </div>
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