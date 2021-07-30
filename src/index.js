import Homepage from "./pages/Homepage/homepage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import NgoSignup from "./pages/NgoSignup/ngoSignup";

//This is the main function
function Main() {
  return (
    <Router>
      <Link to="/"></Link>
      
      <Switch>
        <Route exact path="/"> <Homepage /> </Route>
        
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
