import React, { useState } from 'react';
import { Formik } from 'formik';
import { Alert } from 'reactstrap';
import { Link, redirect } from 'react-router-dom';
import Dashboard from '../Dashborad';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { redirect } from "react-router-dom";

function SignUp2() {
    const [count, setCount] = useState(1);
    const [mode, setMode] = useState("Sign Up");
    let err = null;
    let form = null;
    const navigate = useNavigate();

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
                console.log(values)

                // post Request to SignUP with user Information (values)
                axios.post('https://test.nexisltd.com/signup', values)
                    .then(response => {
                        console.log(response)
                        if (response.status === 200) {

                            // if the signUp success the post request for Login will start
                            //values2 contained Login Information
                            const values2 = {
                                email: values.email,
                                password: values.password,
                            }

                            // Post request for login
                            axios.post('https://test.nexisltd.com/login', values2)
                                .then(response2 => {
                                    if (response2.status === 200) {
                                        // if the login is success, the token will be stored in localstorage and will get the employee information
                                        localStorage.removeItem('token');
                                        localStorage.setItem('token', JSON.stringify(response2.data.access_token));

                                        const USER_TOKEN = JSON.parse(localStorage.getItem('token'));
                                        const URL = "https://test.nexisltd.com/test"
                                        const AuthStr = 'Bearer ' + USER_TOKEN;

                                        // Post request to get the Empoloyee information
                                        axios.get(URL, { 'headers': { 'Authorization': AuthStr } })
                                            .then(response => {
                                                // localStorage.setItem("MyProfile", JSON.stringify(profile[0]))
                                                
                                                console.log(response)
                                                // Deleting previous data
                                                localStorage.removeItem('data');
                                                // Storing the employee information
                                                localStorage.setItem('data', JSON.stringify(response.data));
                                            });

                                            // waiting for 3 second for fetching the backend data
                                            setTimeout(() => {
                                                navigate("/Dashboard");  
                                              }, 3000);

                                    }
                                })


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

                    {/* {this.state.step === 1 ? */}
                    {count === 1 ?
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
                            <button className="Button1" onClick={() => setCount(count + 1)}>Next Step</button>
                            <br />
                            <p style={{ textAlign: "center" }}>Already have an account? <Link to="login">LOGIN HERE!</Link></p>
                            <br />

                        </div> :
                        // this.state.step === 2 ?
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
                                <span style={{float:"left", fontStyle: "italic", color: "red" }}>{errors.email}</span>
                                <br />

                                <button className="Button2" onClick={() => setCount(count - 1)}>Back</button>
                                <button className="Button1" onClick={() => setCount(count + 1)}>Next Step</button>

                                <br />
                                <p style={{ textAlign: "center" }}>Already have an account? <Link to="login">LOGIN HERE!</Link></p>

                            </div> :
                            // this.state.step === 3 ?
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
                                    <span style={{float:"left", fontStyle: "italic", color: "red" }}>{errors.password}</span>
                                    <br />
                                    <button className="Button2" onClick={() => setCount(count - 1)}>Back</button>
                                    <button type='submit' className="Button1" >Sign Up</button>
                                    <br />
                                    <p style={{ textAlign: "center" }}>Already have an account? <Link to="login">LOGIN HERE!</Link></p>

                                </div> : null}

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

export default SignUp2;