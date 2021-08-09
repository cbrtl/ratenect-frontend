import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NgoProfileForm from './ngoProfileForm'

export default function NgoHome() {
  return (
    <Router>
      <Switch>
          <Route path="/ngo/Profile" exact component={NgoProfileForm} />
            <div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
              <div>
                <Link to="/ngo/Profile"><button>Go To NGO PROFILE page</button></Link>
              </div>
              <div>
                <h3>This is NGO Home Page</h3>
              </div>
            </div>
            
      </Switch>  
    </Router>
    
  )
}
