import {GET_EMPLOYEES} from '../actiontypes/actiontypes';
import axios from 'axios';
 

export const getEmployees = ()=>{
    return dispatch =>{
        return axios.get('https://sivagoutham.github.io/reactLogin/public/dashboard.json/user').then((response)=>{
            console.log(response);
            dispatch({type:GET_EMPLOYEES,payload:response.data})
        })
    }
}