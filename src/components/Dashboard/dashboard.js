import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getEmployees} from '../redux/actions/action';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state ={
            emp:[]
        }
    }

    componentDidMount(){
        this.props.getEmployees();
    }

    render(){
        const employees = this.props.employee;
        console.log(employees)
        return(
            <h1>heelo</h1>
        )
    }

    
}
const mapStateToProps = (state)=>{
 return  {employee : state.employee}       
}

export default connect(mapStateToProps, {getEmployees})(Dashboard)