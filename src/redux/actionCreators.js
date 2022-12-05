import axios from 'axios';
import * as actionTypes from './actionTypes';

const loadEmplyee = employeeList => ({
    type: actionTypes.LOAD_DATA,
    payload: employeeList,
})

export const fetchData = () => dispatch => {
    axios.get("https://foodninja-4c3c8-default-rtdb.firebaseio.com/dishes/.json")
    .then(response => dispatch(loadEmplyee(response.data)))
    .catch()
    
    
}


