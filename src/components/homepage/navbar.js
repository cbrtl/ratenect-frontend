import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import Login_mod from './login.js'

export default function Nav(){
    return (
      <header>
      <Link to='/' style={{ color: '#000', textDecoration: 'none'}}>
            <h3 className="logo">LOGO</h3>
      </Link>
      <input type='checkbox' id='nav-toggle' className='nav-toggle'/>
      <nav>
        <ul>
          <Link to='/volunteer' style={{ color: '#fff', textDecoration: 'none'}}>
            <li>VOLUNTEER</li>
          </Link>
          <Link to='/ngo' style={{ color: '#fff', textDecoration: 'none' }}>
            <li>NGO</li>
          </Link>
          <Link to='/blog' style={{ color: '#fff', textDecoration: 'none' }}>
            <li>BLOG</li>
          </Link>
          <Link to='/donation' style={{ color: '#fff', textDecoration: 'none' }}>
            <li>DONATION</li>
          </Link>
          {/* <Link to='/login' style={{ color: '#fff', textDecoration: 'none' }}>
            <li className='login'>LOGIN</li>
          </Link>
          <Link to='/user-signup' style={{ color: '#fff', textDecoration: 'none' }}>
            <li className='signup'>SIGN UP</li>
          </Link> */}
          <Login_mod />
        </ul>
      </nav>
        <label for='nav-toggle' class='nav-toggle-label'><span></span>
        </label>
      
    </header>
    )
} 