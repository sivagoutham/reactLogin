import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../redux/actions/action";
import "./login.css";
import { Redirect } from 'react-router-dom'

const validEmailRegex = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const validPassword = RegExp(/^[0-9a-zA-Z]+$/)
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      submitted: false,
      message:false,
      errors:{
        email: '',
        password : '',
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    let emailValid = errors.email;
    let passwordValid = errors.password;
    if(value.length>0){
      switch (name) {
        case 'username': 
        emailValid = validEmailRegex.test(value)
          errors.email =  emailValid? '':'Email is not valid!'
          break;
        case 'password':
          passwordValid = validPassword.test(value)
          errors.password =  passwordValid? '':'Password is not valid!'
        
          break;
        default:
          break;
      }
      
    }else{
    errors.email ='';
    errors.password=''
    }
    this.setState({errors, [name]: value,message:false });
  }

 async handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password,errors } = this.state;
    if (username && password && errors.email===''&&errors.password==='') {
       await this.props.login(username, password);
       if(this.props.loginData === 'success'){
        let url = 'https://sivagoutham.github.io/reactLogin/#/dashboard';
       window.location.href =url;
       window.location.reload(true);
      }else{
        
       this.setState({message:true})
        
      }
    }
  }

  render() {
    const { username, password, submitted,message,errors } = this.state;
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
            <span className='help-block'>{errors.email}</span>
            {submitted && !username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <span className='help-block'>{errors.password}</span>
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
