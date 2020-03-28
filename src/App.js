import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login/login';
import Dashboard from './components/Dashboard/dashboard'
function App() {
  return (
    <div className="App">
      <div className='container'>
        <Router>
          <switch>
            <Route exact path="/reactLogin" component={Login} />
            <Route path='/dashboard' component ={Dashboard}/>
          </switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
