import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage/homepage';

function Main() {
  return (
    <Router>
      <Link to="/" />

      <Switch>
        <Route exact path="/">
          {' '}
          <Homepage />{' '}
        </Route>
      </Switch>
    </Router>
  );
}

export default Main;
