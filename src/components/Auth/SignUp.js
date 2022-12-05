import React, { Component, useState } from 'react';
import { Formik } from 'formik';
import { Alert } from 'reactstrap';
import { Link, redirect, useLocation } from 'react-router-dom';
import Dashboard from '../Dashborad';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { redirect } from "react-router-dom";
import { auth } from './actionCreators';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';



function SignUp() {

    const [count, setCount] = useState(1);
    const [mode, setMode] = useState("Sign Up");
    const navigate = useNavigate();

    let err = null;
    let form = null;


    form = <Formik
        initialValues={
            {
                first_name: "",
                last_Name: "",
                phone_number: "",
                email: "",
                password: "",
            }
        }

        onSubmit={
            (values) => {

                auth(values, mode);
                
                setTimeout(() => {
                    navigate("dashboard");  
                  }, 3000);
                


            }
        }

        validate={(values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 8) {
                errors.password = 'Must be atleast 8 characters!';
            }
            //console.log("Errors:", errors)
            return errors;
        }
        }>

        {
            ({ values, handleChange, handleSubmit, errors }) => (

                <form onSubmit={handleSubmit}>
                    {mode === "Sign Up" ?
                        count === 1 ?
                            <div>
                                <p className='Title1'>SignUp Form</p>
                                <input
                                    required={true}
                                    name="first_name"
                                    placeholder="Write First Name"
                                    className="form-control"
                                    value={values.first_name}
                                    onChange={handleChange}
                                />
                                <br />

                                <input
                                    required={true}
                                    name="last_Name"
                                    placeholder="Write Last Name"
                                    className="form-control"
                                    value={values.last_Name}
                                    onChange={handleChange}
                                />
                                <button className="Button1" onClick={() => setCount(count - 1)}>Next Step</button>
                                <br />
                                <p style={{ textAlign: "center" }}>Already have an account? <Link onClick={() => setMode("Login")}>LOGIN HERE!</Link></p>
                                <br />

                            </div> :
                            count === 2 ?
                                <div>

                                    <p className='Title1'>SignUp Form</p>
                                    <input
                                        required={true}
                                        name="phone_number"
                                        placeholder="Phone Number"
                                        className="form-control"
                                        value={values.phone_number}
                                        onChange={handleChange}
                                    />
                                    <br />

                                    <input
                                        required={true}
                                        name="email"
                                        placeholder="Enter Your Email"
                                        className="form-control"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    <br />

                                    <button className="Button2" onClick={() => setCount(count - 1)}>Back</button>
                                    <button className="Button1" onClick={() => setCount(count + 1)}>Next Step</button>

                                    <br />
                                    <p style={{ textAlign: "center" }}>Already have an account? <Link onClick={() => setMode("Login")}>LOGIN HERE!</Link></p>

                                </div> :
                                count === 3 ?
                                    <div>
                                        <p className='Title1'>SignUp Form</p>
                                        <input
                                            required={true}
                                            type="password"
                                            name="password"
                                            placeholder="password"
                                            className="form-control"
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                        <span style={{ textAlign: 'left', fontStyle: "italic", color: "black" }}>{errors.password}</span>
                                        <br />
                                        <button className="Button2" onClick={() => setCount(count - 1)}>Back</button>
                                        <button type='submit' className="Button1" >Sign Up</button>
                                        <br />
                                        <p style={{ textAlign: "center" }}>Already have an account? <Link onClick={this.switchModeHandler}>LOGIN HERE!</Link></p>

                                    </div> : null
                        : <div>
                            <p className='Title1'>Log In Form</p>

                            <input
                                required={true}
                                name="email"
                                placeholder="Enter Your Email"
                                className="form-control"
                                value={values.email}
                                onChange={handleChange}
                            />
                            <br />
                            <input
                                required={true}
                                type="password"
                                name="password"
                                placeholder="password"
                                className="form-control"
                                value={values.password}
                                onChange={handleChange}
                            />
                            <span style={{ fontStyle: "italic", color: "black" }}>{errors.password}</span>
                            <button type='submit' className="Button1" >Login</button>
                            <br />
                            <p style={{ textAlign: "center" }}>Don't have an account? <Link onClick={() => setMode("Sign Up")}>SIGN UP HERE!</Link></p>
                        </div>}
                    {/* {this.state.dashboard === true ? <Navigate to="/Dashboard" replace={true} /> : console.log("render")} */}
                </form>
            )
        }
    </Formik >

    return (
        <div>
            {err}
            {form}
        </div >
    )

}

export default SignUp;

// export default connect('', mapDispatchToProps)(SignUp);