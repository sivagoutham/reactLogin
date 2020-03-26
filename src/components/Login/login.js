import React, { Component } from "react";
import data from "../../JSON/login.json";

class Login extends Component{

    render(){
        return(<h1>{data.username}</h1>)
    }
}

export default Login