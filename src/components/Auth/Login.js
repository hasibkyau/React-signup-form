import React, { Component } from 'react';
import { Formik } from 'formik';
import { Alert } from 'reactstrap';
import { Link, redirect } from 'react-router-dom';
import Dashboard from '../Dashborad';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { redirect } from "react-router-dom";

class Login extends Component {
    state = {
        mode: "Login",
    }


    render() {
        let err = null;
        let form = null;

        form = <Formik
            initialValues={
                {
                    email: "",
                    password: "",
                }
            }

            onSubmit={
                (values) => {
                    console.log(values)

                      axios.post('https://test.nexisltd.com/login', values)
                        .then(response => {
                            console.log(response)
                            localStorage.setItem('token', JSON.stringify(response.data.access_token));
                            if(response.status === 200){
                                redirect("/")
                            }
                        });

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
                        <div>
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
                            <br />

                            <button type='submit' className="Button1" >Login</button>
                            <br />
                            <p style={{ textAlign: "center" }}>Don't have an account? <Link to="/">SIGN UP HERE!</Link></p>
                        </div>
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
}

export default Login;