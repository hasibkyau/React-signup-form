import React, { Component } from 'react';
import axios from 'axios';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import Spinner from '../components/Spinner/Spinner'

class Dashboard extends Component {
    state = {
        date: [],
        status: ""
    }


    render() {

        console.log("render")
        const list = JSON.parse(localStorage.getItem('data'));
        const employee = list;
        let DashBoard = null

        if (employee === null) {
            console.log("null")
            DashBoard = <Spinner />
        }
        else {
            console.log("not null")

            DashBoard = <div>
                {/* Logo */}
                <img className='img-fluid m-2' src={logo} alt="Smiley face" width="164.21" height="60" style={{ float: "left" }} />

                {/* Logout */}
                

                <br />

                <div className='container'>
                {/* <img className='img-fluid' src={logo} alt="Smiley face" width="164.21" height="60" style={{ float: "left" }} /> */}

                <Link to={'/'} style={{ float: "right" }}>Logout</Link>
                    <br /><br />

                    {/* Title */}
                    <div className='row' >
                        <div style={{margin:"auto"}}>
                            <h1 className='bg-primary' style={{ fontSize: "36", color: "white", padding: "15px" }}>Attendance Information</h1>

                        </div>
                    </div>

                    <br /><br />

                    {/* Attendance Table */}
                    <Table style={{ textAlign: "left" }}>
                        <thead >
                            <tr >
                                <th>#</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Position</th>
                                {/* <th>Branch</th> */}
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        {
                            // Extracting the data found from GET request
                            Object.keys(employee).map((key, index) => {
                                return (
                                    <tbody key={index}>
                                        <tr>
                                            <th scope='row'>{index}</th>
                                            <td>{list[key].id}</td>
                                            <td>{list[key].name}</td>
                                            <td>{list[key].position}</td>
                                            {/* <td>{list[key].branch}</td> */}
                                            {
                                                (Object.keys(list[key].attendance).map((key2, index) => {

                                                    if (index === 26) {
                                                        // console.log(list[key].attendance[key2].status)
                                                        return (
                                                            <th key={index}>{key2}</th>
                                                        )
                                                    }
                                                }))
                                            }

                                            {
                                                (Object.keys(list[key].attendance).map((key2, index) => {

                                                    if (index === 26) {
                                                        // console.log(list[key].attendance[key2].status)
                                                        return (
                                                            <th key={index}>{list[key].attendance[key2].status}</th>)
                                                    }
                                                }))
                                            }
                                        </tr>
                                    </tbody>
                                );
                            })
                        }
                    </Table>

                </div >
            </div>
        }

        return (
            <div>{DashBoard}</div>
        )
    }
}

export default Dashboard;