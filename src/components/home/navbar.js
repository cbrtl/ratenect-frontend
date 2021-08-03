import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
<<<<<<< HEAD:src/components/homepage/navbar.js
import LoginMod from './login.js'
=======
import Login from './login.js'
>>>>>>> 603d1959d9cc310a647679148c108636f01a3a49:src/components/home/navbar.js

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
<<<<<<< HEAD:src/components/homepage/navbar.js
          <LoginMod />
=======
          <Login />
>>>>>>> 603d1959d9cc310a647679148c108636f01a3a49:src/components/home/navbar.js
        </ul>
      </nav>
        <label for='nav-toggle' class='nav-toggle-label'><span></span>
        </label>
      
    </header>
    )
} 