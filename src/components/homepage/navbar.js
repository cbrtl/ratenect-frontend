import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import Login_mod from './login.js'

export default function Nav(){
  // const [show, setShow] = React.useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
    return (
        <nav>
          <Link to='/'><h3>LOGO</h3></Link>
            <ul  className="nav-links">
              <Link to='/volunteer'><li>Volunteer</li></Link>
              <Link to='/ngo'><li>NGO</li></Link>
              <Link to='/blog'><li>Blogs</li></Link>
              <Link to='/donation'><li>Donation</li></Link>
            </ul>
        
            {/* <button variant="primary" onClick={handleShow} className="login">Log in</button> */}
            <Login_mod />
            <Link to='/user-signup'><button className="signup">Sign up</button></Link>
        
          
        </nav>
    )
}