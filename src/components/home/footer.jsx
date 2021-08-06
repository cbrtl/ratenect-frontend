import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="column">
          <div className="column1">
            <h4>LOGO</h4>
          </div>
          <div className="column2">
            <ul className="list-unstyled">
              <li>Volunteer</li>
              <li>NGO</li>
              <li>Blog</li>
              <li>Donation</li>
            </ul>
          </div>
          <div className="column3">
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Team</li>
            </ul>
          </div>
          <div className="column4">
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <br />
        <div className="footer-bottom">
          <p>
            &copy;{new Date().getFullYear()} Ratenect - All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
