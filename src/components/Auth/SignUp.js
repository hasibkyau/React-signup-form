import React, { Component } from 'react';
import { Formik } from 'formik';
import { Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

import Spinner from '../Spinner/Spinner'


class SignUp extends Component {
    state = {
        mode: "Sign Up",
        account: "Create New Account",
        step: 1,
    }

    switchModeHandler = () => {
        // this.setState({ mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up" })
        this.setState({ step: this.state.step + 1 })
    }

    switchMode = () => {
        this.setState({ mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up" })
        // this.setState({ step: this.state.step - 1 })
    }

    switchBack = () => {
        // this.setState({ mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up" })
        this.setState({ step: this.state.step - 1 })
    }

    render() {
        let err = null;
        if (this.props.authFailedMsg != null) {
            err = <Alert color='danger'>{this.props.authFailedMsg}</Alert>
        }
        let form = null;
        if (this.props.authLoading) {
            form = <Spinner />
        } else {
            form = <Formik
                initialValues={
                    {
                        fName: "",
                        lName: "",
                        email: "",
                        password: "",
                        passwordConfirm: "",
                        phoneNumber: "",
                    }
                }

                onSubmit={
                    (values) => {
                        this.props.auth(values.email, values.password, this.state.mode, values.fName, values.lName);
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
                    } else if (values.password.length < 4) {
                        errors.password = 'Must be atleast 6 characters!';
                    }

                    if (this.state.mode === "Sign Up") {
                        if (!values.passwordConfirm) {
                            errors.passwordConfirm = 'Required';
                        } else if (values.password !== values.passwordConfirm) {
                            errors.passwordConfirm = 'Password field does no match!';
                        }
                    }
                    //console.log("Errors:", errors)
                    return errors;
                }}
            >
                {({ values, handleChange, handleSubmit, errors }) => (

                    <form onSubmit={handleSubmit}>

                        {this.state.mode === "Sign Up" ?
                            this.state.step === 1 ?
                                <div>
                                    <p className='Title1'>SignUp Form</p>
                                    <input
                                        required={true}
                                        name="fName"
                                        placeholder="Write First Name"
                                        className="form-control"
                                        value={values.fName}
                                        onChange={handleChange}
                                    />
                                    <br />

                                    <input
                                        required={true}
                                        name="lName"
                                        placeholder="Write Last Name"
                                        className="form-control"
                                        value={values.lName}
                                        onChange={handleChange}
                                    />
                                    <button className="Button1" onClick={this.switchModeHandler}>Next Step</button>
                                    <br />
                                    <p style={{ textAlign: "center" }}>Already have an account? <Link to="login">LOGIN HERE!</Link></p>
                                    <br />

                                </div> :
                                this.state.step === 2 ?
                                    <div>
                                        <p className='Title1'>SignUp Form</p>
                                        <input
                                            required={true}
                                            name="phoneNumber"
                                            placeholder="Phone Number"
                                            className="form-control"
                                            value={values.phoneNumber}
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

                                        <button className="Button2" onClick={this.switchBack}>Back</button>
                                        <button className="Button1" onClick={this.switchModeHandler}>Next Step</button>

                                        <br />
                                        <p style={{ textAlign: "center" }}>Already have an account? <Link to="login">LOGIN HERE!</Link></p>

                                    </div> :
                                    this.state.step === 3 ?
                                        <div>
                                            <p className='Title1'>SignUp Form</p>
                                            <input
                                                required={true}
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                className="form-control"
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                            <span style={{ fontStyle: "italic", color: "black" }}>{errors.password}</span>
                                            <br />
                                            <button className="Button2" onClick={this.switchBack}>Back</button>
                                            <button type='submit' className="Button1" >Sign Up</button>
                                            <br />
                                            <p style={{ textAlign: "center" }}>Already have an account? <Link to="login">LOGIN HERE!</Link></p>



                                        </div> : null
                            : null}

                    </form>
                )
                }
            </Formik >
        }
        return (
            <div>
                {err}
                {form}
            </div >
        )
    }
}

export default SignUp;