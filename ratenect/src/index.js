import App from './pages/Homepage'
import Account from './pages/Account'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, {Component} from 'react';
import  ReactDOM  from 'react-dom';


function Main(){
  return (
    <Router>
    <Link to="/"></Link>
    <Link to="/account"></Link>
    <Switch>
        <Route exact path="/">
            <App />
        </Route>
        <Route path="/account">
            <Account />
        </Route>
    </Switch>
</Router>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
