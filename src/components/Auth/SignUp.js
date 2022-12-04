// import React, { Component } from 'react';
// import { Formik } from 'formik';
// import { Alert } from 'reactstrap';
// import { Link, redirect } from 'react-router-dom';
// import Dashboard from '../Dashborad';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// // import { redirect } from "react-router-dom";

// class SignUp extends Component {
//     state = {
//         mode: "Sign Up",
//         step: 1,
//     }


//     switchModeHandler = () => {
//         // this.setState({ mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up" })
//         this.setState({ step: this.state.step + 1 })
//     }

//     switchBack = () => {
//         // this.setState({ mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up" })
//         this.setState({ step: this.state.step - 1 })
//     }


//     render() {
//         let err = null;
//         let form = null;

//         form = <Formik
//             initialValues={
//                 {
//                     first_name: "",
//                     last_Name: "",
//                     phone_number: "",
//                     email: "",
//                     password: "",
//                 }
//             }

//             onSubmit={
//                 (values) => {
//                     console.log(values)
//                     // this.setState({step: 0})

//                       axios.post('https://test.nexisltd.com/signup', values)
//                         .then(response => {
//                             console.log(response)
//                             if(response.status === 200){
//                                 redirect("/login")
//                             }
//                         });

//                 }
//             }

//             validate={(values) => {
//                 const errors = {};
//                 if (!values.email) {
//                     errors.email = 'Required';
//                 } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//                     errors.email = 'Invalid email address';
//                 }
//                 if (!values.password) {
//                     errors.password = 'Required';
//                 } else if (values.password.length < 8) {
//                     errors.password = 'Must be atleast 8 characters!';
//                 }
//                 //console.log("Errors:", errors)
//                 return errors;
//             }
//             }>

//             {
//                 ({ values, handleChange, handleSubmit, errors }) => (

//                     <form onSubmit={handleSubmit}>

//                         {this.state.step === 1 ?
//                             <div>
//                                 <p className='Title1'>SignUp Form</p>
//                                 <input
//                                     required={true}
//                                     name="first_name"
//                                     placeholder="Write First Name"
//                                     className="form-control"
//                                     value={values.first_name}
//                                     onChange={handleChange}
//                                 />
//                                 <br />

//                                 <input
//                                     required={true}
//                                     name="last_Name"
//                                     placeholder="Write Last Name"
//                                     className="form-control"
//                                     value={values.last_Name}
//                                     onChange={handleChange}
//                                 />
//                                 <button className="Button1" onClick={this.switchModeHandler}>Next Step</button>
//                                 <br />
//                                 <p style={{ textAlign: "center" }}>Already have an account? <Link to="login">LOGIN HERE!</Link></p>
//                                 <br />

//                             </div> :
//                             this.state.step === 2 ?
//                                 <div>
//                                     <p className='Title1'>SignUp Form</p>
//                                     <input
//                                         required={true}
//                                         name="phone_number"
//                                         placeholder="Phone Number"
//                                         className="form-control"
//                                         value={values.phone_number}
//                                         onChange={handleChange}
//                                     />
//                                     <br />

//                                     <input
//                                         required={true}
//                                         name="email"
//                                         placeholder="Enter Your Email"
//                                         className="form-control"
//                                         value={values.email}
//                                         onChange={handleChange}
//                                     />
//                                     <br />

//                                     <button className="Button2" onClick={this.switchBack}>Back</button>
//                                     <button className="Button1" onClick={this.switchModeHandler}>Next Step</button>

//                                     <br />
//                                     <p style={{ textAlign: "center" }}>Already have an account? <Link to="login">LOGIN HERE!</Link></p>

//                                 </div> :
//                                 this.state.step === 3 ?
//                                     <div>
//                                         <p className='Title1'>SignUp Form</p>
//                                         <input
//                                             required={true}
//                                             type="password"
//                                             name="password"
//                                             placeholder="password"
//                                             className="form-control"
//                                             value={values.password}
//                                             onChange={handleChange}
//                                         />
//                                         <span style={{textAlign:'left', fontStyle: "italic", color: "black" }}>{errors.password}</span>
//                                         <br />
//                                         <button className="Button2" onClick={this.switchBack}>Back</button>
//                                         <button type='submit' className="Button1" >Sign Up</button>
//                                         <br />
//                                         <p style={{ textAlign: "center" }}>Already have an account? <Link to="login">LOGIN HERE!</Link></p>

//                                     </div> : null}

//                     </form>
//                 )
//             }
//         </Formik >

//         return (
//             <div>
//                 {err}
//                 {form}
//             </div >
//         )
//     }
// }

// export default SignUp;