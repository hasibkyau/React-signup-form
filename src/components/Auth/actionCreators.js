import { render } from '@testing-library/react';
import axios from 'axios';

const getData = (token) => {

    const USER_TOKEN = token;
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
}


const logIn = (authData) => {
    const values = {
        email: authData.email,
        password: authData.password,
    }

    axios.post('https://test.nexisltd.com/login', values)
        .then(response => {
            if (response.status === 200) {
                localStorage.removeItem('token');
                localStorage.setItem('token', JSON.stringify(response.data.access_token));
                getData(response.data.access_token)
            }
        })
}


export const auth = (authData, mode) => {
    if (mode === "Sign Up") {
        const values = {
            first_name: authData.first_name,
            last_name: authData.last_Name,
            phone_number: authData.phone_number,
            email: authData.email,
            password: authData.password,
        }
        console.log(values)
        // post Request to SignUP with user Information (values)
        axios.post('https://test.nexisltd.com/signup', values)
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    logIn(values)
                }
            });

    } else {
        logIn(authData);
    }
}

