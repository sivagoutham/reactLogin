import React, { Component } from "react";
import { connect } from "react-redux";
import { getEmployees } from "../redux/actions/action";
import './dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emp: []
    };
  }

  componentDidMount() {
    this.props.getEmployees();
  }
  handleClick =()=>{
    window.history.back();
  }

  render() {
    
    const users = this.props.employee;
    return (
      <React.Fragment>
        
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email Id</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phoneNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
          <div className='btnPadding'>
            <button className='btn btn-primary' onClick={this.handleClick}>Logout</button>
          </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { employee: state.employee };
};

export default connect(mapStateToProps, { getEmployees })(Dashboard);
