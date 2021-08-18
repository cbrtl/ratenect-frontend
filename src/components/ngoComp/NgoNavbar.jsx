import React from 'react';
import './css/NgoNavbar.css';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

export default function Nav() {
  return (
    <header>
      <Link to="/ngo/home" style={{ color: '#000', textDecoration: 'none' }}>
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
          <Link
            to="/ngo/profile"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            <CgProfile size={30} />
          </Link>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            <button>Logout</button>
          </Link>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label" />
    </header>
  );
}
