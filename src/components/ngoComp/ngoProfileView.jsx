import React from 'react';
import { Link } from 'react-router-dom';
import './css/ngoProfileView.css';
import EditBtn from './editBtn';

export default function ProfileView() {
  return (
    <>
      <div className="Mission">
        <h3>Our Mission</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className="edit-btn" style={{ marginTop: '50px' }}>
          <EditBtn />
        </div>
      </div>
      <div className="View-Nav">
        <ul>
          <Link
            to="/ngo/profile/aboutUs"
            style={{ color: '#000', textDecoration: 'none' }}
          >
            <li>About Us</li>
          </Link>
          <Link
            to="/ngo/profile/blog"
            style={{ color: '#000', textDecoration: 'none' }}
          >
            <li>Blog</li>
          </Link>
          <Link
            to="/ngo/profile/gallery"
            style={{ color: '#000', textDecoration: 'none' }}
          >
            <li>Gallery</li>
          </Link>
          <Link
            to="/ngo/profile/contactUs"
            style={{ color: '#000', textDecoration: 'none' }}
          >
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
      {/* <div className="Reviews">
        <h3>Reviews</h3>
      </div> */}
    </>
  );
}
