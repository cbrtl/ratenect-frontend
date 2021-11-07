import React from 'react';
import './css/navbar.css';
import { useHistory, Link } from 'react-router-dom';
import Login from './login';
import Signup from './signup';

export default function Nav() {
  const history = useHistory();
  const loggedIn = localStorage.getItem('loggedInUser');
  console.log(loggedIn);

  const ngoLogout = () => {
    localStorage.removeItem('loggedInUser');
    history.push('/');
  };
  return (
    <header>
      <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>
        <h3 className="logo">LOGO</h3>
      </Link>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav>
        <ul>
          <Link
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
          </Link>
          {/* <Link to='/login' style={{ color: '#fff', textDecoration: 'none' }}>
            <li className='login'>LOGIN</li>
          </Link>
          <Link to='/user-signup' style={{ color: '#fff', textDecoration: 'none' }}>
            <li className='signup'>SIGN UP</li>
          </Link> */}
          {loggedIn == null ? (
            <>
              <Login />
              <Signup />
            </>
          ) : (
            <>
              <button onClick={ngoLogout}>Logout</button>
            </>
          )}
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label" />
    </header>
  );
}
