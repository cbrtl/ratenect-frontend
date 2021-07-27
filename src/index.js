import App from "./pages/Homepage/homepage";
import Account from "./pages/Account";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
// import NgoSignup from "./pages/NgoSignup/ngoSignup";

//This is the main function
function Main() {
  return (
    <Router>
      <Link to="/"></Link>
      {/* <Link to="/account"></Link> */}
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/ngoSignup">
          {/* <NgoSignup /> */}
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
