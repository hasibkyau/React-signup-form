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

    componentDidMount(){
        console.log("did mount?")
        setTimeout(() => {
            console.log("set time out!");;
          }, 2000);
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
                <img src={logo} alt="Smiley face" width="164.21" height="60" style={{ float: "left" }} />
                <Link to={'/'} style={{ float: "right" }}>Logout</Link>
                <br />
                {/* <div className='d-flex flex-md-row flex-column m-5'> */}


                <div className='container'>
                    <br /><br />
                    <div className='row'>
                        <div style={{ width: "480px", height: "72px", borderRadius: "5px", margin: "auto", background: "#1678CB", }}>
                            <h1 style={{ fontSize: "36px", color: "white", paddingTop: "9px" }}>Attendance Information</h1>
                        </div>
                        <br /><br />
                    </div>
                    <br /><br />
                    <Table style={{textAlign:"left"}}>
                        <thead >
                            <tr >
                                <th>#</th>
                                <th>ID</th>
                                <th>Employee Name</th>
                                <th>Employee Position</th>
                                <th>Branch</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        {
                            Object.keys(employee).map((key, index) => {
                                return (
                                    <tbody  key={index}>
                                        <tr>
                                            <th scope='row'>{index}</th>
                                            <td>{list[key].id}</td>
                                            <td>{list[key].name}</td>
                                            <td>{list[key].position}</td>
                                            <td>{list[key].branch}</td>
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
            <div>{ DashBoard }</div>
        )
    }
}

export default Dashboard;