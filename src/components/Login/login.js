import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../redux/actions/action";
import "./login.css";
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      submitted: false,
      message:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value,message:false });
  }

 async handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
       await this.props.login(username, password);
       if(this.props.loginData === 'success'){
        return <Redirect to="dashboard" push={true} />
       //window.location.href =window.location.hash+ "dashboard";

      }else{
        
       this.setState({message:true})
        console.log(this.props.loginData)
        
      }
    }
  }

  render() {
    const { username, password, submitted,message } = this.state;
    return (
      <div className="center">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            {submitted && !username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {submitted && !password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div>
            <button className='btn btn-primary'>Login</button>
          </div>
          <div>
          {submitted && message && (
              <div className="error-block">Please enter valid details</div>
            )}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { loginData: state.loginData };
};

export default connect(mapStateToProps, { login })(Login);
