import React, { Component } from 'react';
import axios from 'axios';

const getProfile = () => {
    let profile = [];
    axios.get("https://test.nexisltd.com/test")
        .then(response => {
            // localStorage.setItem("MyProfile", JSON.stringify(profile[0]))
            console.log(response)
        });
}



class Dashboard extends Component {
    state = {

    }

    GetData = () => {
        let profile = [];
        console.log("HELLO")
        axios.get("https://test.nexisltd.com/test/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImFiY0BleGFtcGxlLmNvbSIsIkZpcnN0X25hbWUiOiJGaXJzdCBOYW1lIiwiTGFzdF9uYW1lIjoiTGFzdCBOYW1lIiwiVWlkIjoiNjM4ODUwNGMzNjNmNzU4OWYxNDMyZTIzIiwiZXhwIjoxNjcwMTkyNDY3fQ.79Bp5Wxo_evI10HHjBM6D1i5XQFPYRDGecahepHlqP4")
            .then(response => {
                // localStorage.setItem("MyProfile", JSON.stringify(profile[0]))
                console.log("HELLO")
                console.log(response)
            });
    }

    PostData = () => {
        let profile = [];
        const values = { email: "abc@example.com", password: "SuperSecretPassword" };
        console.log("HELLO")
        axios.post('https://test.nexisltd.com/login', values)
            .then(response => {
                console.log(response)
            });
    }

    render() {
        let err = null;
        let form = <div></div>
        return (
            <div>
                <button className="Button1" onClick={this.GetData}>Get Data</button>
                <button className="Button1" onClick={this.PostData}>Post Data</button>
            </div >
        )
    }
}

export default Dashboard;