import {GET_EMPLOYEES,GET_LOGIN} from '../actiontypes/actiontypes';
import axios from 'axios';
import {history} from '../history'
 

export const getEmployees = ()=>{
    return dispatch =>{
        //'https://sivagoutham.github.io/reactLogin/dashboard.json'
        //http://localhost:3000/user

        return axios.get('https://sivagoutham.github.io/reactLogin/dashboard.json').then((response)=>{
            console.log(response);
            dispatch({type:GET_EMPLOYEES,payload:response.data.user})
        })
    }
}

export const login= (username,password)=>{
    return dispatch=>{
        return axios.get('https://sivagoutham.github.io/reactLogin/login.json').then((response)=>{
            console.log(response)
            response.data.login.forEach(element => {
                console.log(element)
                if(element.username === username && element.password === password){
                    console.log('test')
                    dispatch({type:GET_LOGIN,payload:"success"})
                }else{
                    dispatch({type:GET_LOGIN,payload:'failure'})
                }
                
            });
            

        })
    }
}
export const logout=(username,password)=>{
    return dispatch=>{
        return axios.get('http://localhost:3000').then((response)=>{
            console.log(response)
        })
    }
}