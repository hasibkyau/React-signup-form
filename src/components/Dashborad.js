import React, { Component } from 'react';
import axios from 'axios';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';


class Dashboard extends Component {
    state = {
        date: [],
        status: ""
    }
    // GetData = () => {
    //     const USER_TOKEN = JSON.parse(localStorage.getItem('token'));
    //     // const USER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6Imhhc2lia3lhdS5jc2VAZ21haWwuY29tIiwiRmlyc3RfbmFtZSI6IlRlc3QiLCJMYXN0X25hbWUiOiJPbmUiLCJVaWQiOiI2MzhiY2YxNWFiODBiY2I0MTU3NTFmMzkiLCJleHAiOjE2NzAyMTA5NDd9.hHqAdaYOu_7f3Zt55Z_uyrMaUI5Kflp29L0wlD23LDU"
    //     const URL = "https://test.nexisltd.com/test"
    //     const AuthStr = 'Bearer ' + USER_TOKEN;

    //     axios.get(URL, { 'headers': { 'Authorization': AuthStr } })
    //         .then(response => {
    //             // localStorage.setItem("MyProfile", JSON.stringify(profile[0]))
    //             console.log(response)
    //             localStorage.setItem('data', JSON.stringify(response.data));
    //         });
    // }

    render() {

        const list = JSON.parse(localStorage.getItem('data'));
        const employee = list;

        return (
            <div>
                <img src={logo} alt="Smiley face" width="164.21" height="60" style={{ float: "left" }} />
                <br />
                {/* <div className='d-flex flex-md-row flex-column m-5'> */}

                <div className='container'>
                    <br /><br />
                    <div className='row'>
                        <div style={{ width: "480px", height: "72px", borderRadius: "5px", margin: "auto", background: "#1678CB", }}>
                            <h1 style={{ fontSize: "36px", color: "white", paddingTop: "9px" }}>Attendance Information</h1>
                        </div>
                        <br/><br/>
                    </div>


                    {/* <button className="Button1" onClick={this.GetData}>Get Data</button> */}

                    <Table>
                        <thead>
                            <tr>
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
                                    <tbody key={index}>
                                        <tr>
                                            <th scope='row'>{index}</th>
                                            <td>{list[key].id}</td>
                                            <td>{list[key].name}</td>
                                            <td>{list[key].position}</td>
                                            <td>{list[key].branch}</td>
                                            {
                                                (Object.keys(list[key].attendance).map((key2, index) => {

                                                    if (index === 29) {
                                                        // console.log(list[key].attendance[key2].status)
                                                        return (
                                                        <th key={index}>{key2}</th>
                                                        )
                                                    }
                                                }))
                                            }
                                                   {
                                                (Object.keys(list[key].attendance).map((key2, index) => {

                                                    if (index === 29) {
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
                <Link to={'/'}>Logout</Link>
            </div>

        )
    }
}

export default Dashboard;