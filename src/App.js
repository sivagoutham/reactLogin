import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './components/redux/history';
import Login from './components/Login/login';
import Dashboard from './components/Dashboard/dashboard'
function App() {
  return (
    <div className="App">
      <div className='container'>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path='/dashboard' component ={Dashboard}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
