import {GET_EMPLOYEES,GET_LOGIN} from '../actiontypes/actiontypes';
import axios from 'axios';
 

export const getEmployees = ()=>{
    return dispatch =>{
        //'https://sivagoutham.github.io/reactLogin/dashboard.json'
        //http://localhost:3000/user

        return axios.get('https://sivagoutham.github.io/reactLogin/dashboard.json').then((response)=>{
            dispatch({type:GET_EMPLOYEES,payload:response.data.user})
        })
    }
}

export const login= (username,password)=>{
    return dispatch=>{
        return axios.get('https://sivagoutham.github.io/reactLogin/login.json').then((response)=>{
            response.data.login.forEach(element => {
                if(element.username === username && element.password === password){
                    dispatch({type:GET_LOGIN,payload:"success"})
                }else{
                    dispatch({type:GET_LOGIN,payload:'failure'})
                }
                
            });
            

        })
    }
}