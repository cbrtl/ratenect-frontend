/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import axios from 'axios';
import './css/NgoNavbar.css';
import { useHistory, Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

export default function Nav() {
  const history = useHistory();
  const loggedIn = localStorage.getItem('loggedInUser');
  console.log(loggedIn);

  const logout = () => {
    axios.get('http://localhost:5000/logout').then(() => {
      window.localStorage.clear();
      // Redirect to Home Page
      history.push('/');
    });
  };

  return (
    <header>
      <Link to="/ngo/home" style={{ color: '#000', textDecoration: 'none' }}>
        <img src="https://i.ibb.co/d6BxB9j/ratenect-logo.png" alt="logo" />
      </Link>
      {/* <input type="checkbox" id="nav-toggle" className="nav-toggle" /> */}
      <nav>
        <ul>
          <Link
            to="/ngo/workspace"
            style={{ color: '#000', textDecoration: 'none' }}
          >
            <li>Workspace</li>
          </Link>
          {/* <Link
            to="/volunteer"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            <li>VOLUNTEER</li>
          </Link>
          <Link to="/ngo" style={{ color: '#fff', textDecoration: 'none' }}>
            <li>NGO</li>
          </Link>
          <Link to="/blog" style={{ color: '#fff', textDecoration: 'none' }}>
            <li>BLOG</li>
          </Link>
          <Link
            to="/donation"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            <li>DONATION</li>
          </Link> */}
          <Link
            to="/ngo/profile"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            <CgProfile size={30} />
          </Link>
          {/* <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}> */}
          <button onClick={logout}>Logout</button>
          {/* </Link> */}
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label" />
    </header>
  );
}
