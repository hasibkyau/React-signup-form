import React, { Component } from 'react';
import axios from 'axios';


function Employee(props) {
    return <div style={{ border: "3px solid red" }}>
        <p>Employee ID : <b>{props.data.Id}</b></p>
        <p>Employee Name : <b>{props.data.name}</b></p>
        <p>Employee Position : <b>{props.data.position}</b></p>
    </div>;

}

class Dashboard extends Component {
    state = {

    }



    GetData = () => {
        const USER_TOKEN = JSON.parse(localStorage.getItem('token'));
        // const USER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6Imhhc2lia3lhdS5jc2VAZ21haWwuY29tIiwiRmlyc3RfbmFtZSI6IlRlc3QiLCJMYXN0X25hbWUiOiJPbmUiLCJVaWQiOiI2MzhiY2YxNWFiODBiY2I0MTU3NTFmMzkiLCJleHAiOjE2NzAyMTA5NDd9.hHqAdaYOu_7f3Zt55Z_uyrMaUI5Kflp29L0wlD23LDU"
        const URL = "https://test.nexisltd.com/test"
        const AuthStr = 'Bearer ' + USER_TOKEN;

        console.log("HELLO")
        axios.get(URL, { 'headers': { 'Authorization': AuthStr } })
            .then(response => {
                // localStorage.setItem("MyProfile", JSON.stringify(profile[0]))
                console.log("HELLO")
                console.log(response)
                localStorage.setItem('data', JSON.stringify(response.data));
            });
    }

    render() {

        const list = JSON.parse(localStorage.getItem('data'));
        const employee = list
        console.log(typeof (list))
        console.log(list[2].username)
        // list = [{list}]
        // const listElements = list.map((emp) =>
        //     <Employee key={emp.Id} data={emp} />
        // );
        return (
            <div>
                {/* {list} */}

                <button className="Button1" onClick={this.GetData}>Get Data</button>
                {/* {listElements} */}
                {
                    Object.keys(employee).map((key, index) => {
                        return (
                            <div key={index} style={{ border: "3px solid red" }}>
                                <p>Employee ID : <b>{list[key].id}</b></p>
                                <p>Employee Name : <b>{list[key].name}</b></p>
                                <p>Employee Position : <b>{list[key].position}</b></p>
                            </div>
                        );
                    })
                }


            </div >
        )
    }
}

export default Dashboard;