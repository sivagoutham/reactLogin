import {GET_EMPLOYEES} from '../actiontypes/actiontypes';
import axios from 'axios';
 

export const getEmployees = ()=>{
    return dispatch =>{
        return axios.get('https://github.com/sivagoutham/reactLogin/blob/master/public/dashboard.json').then((response)=>{
            console.log(response);
            dispatch({type:GET_EMPLOYEES,payload:response.data})
        })
    }
}