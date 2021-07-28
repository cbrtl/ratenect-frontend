import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

export default function Nav(){
    return (
        <nav>
          <Link to='/'><h3>LOGO</h3></Link>
            <ul  className="nav-links">
              <Link to='/volunteer'><li>Volunteer</li></Link>
              <Link to='/ngo'><li>NGO</li></Link>
              <Link to='/blog'><li>Blogs</li></Link>
              <Link to='/donation'><li>Donation</li></Link>
            </ul>
        
            <Link to='/login'><button className="login">Log in</button></Link>
            <Link to='/user-signup'><button className="signup">Sign up</button></Link>
        
          
        </nav>
    )
}