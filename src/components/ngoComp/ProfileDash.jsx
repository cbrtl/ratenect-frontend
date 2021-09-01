import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/ProfileDash.css';
import { RiAddCircleFill as Add } from 'react-icons/ri';
import Rating from '../home/starRating';

export default function ProfileDash() {
  const [profileImg] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  );

  return (
    <>
      <div className="Dashboard">
        <ul>
          <div className="Profile-Img">
            <div className="img-holder">
              <img
                src={profileImg}
                alt="ProfileImage"
                id="img"
                className="img"
              />
              <input
                type="file"
                name="upload-image"
                id="input"
                accept="image/*"
              />
              <label htmlFor="input" className="upload">
                <Add color="white" fontSize="1.5em" cursor="pointer" />
              </label>
            </div>
          </div>
          <div className="ProfileName">
            <h2>GO GREEN FOUNDATION</h2>
          </div>
          <div className="Star">
            <Rating style={{ alignItems: 'center' }} />
          </div>
          <div className="ProfileDes">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </ul>
      </div>

      <div className="Profile-Nav">
        <ul>
          <Link
            to="/ngo/blog"
            style={{ color: '#000', textDecoration: 'none' }}
          >
            <li>Blog</li>
          </Link>
          <Link
            to="/ngo/profile"
            style={{ color: '#000', textDecoration: 'none' }}
          >
            <li>Profile</li>
          </Link>
          <Link
            to="/ngo/workspace"
            style={{ color: '#000', textDecoration: 'none' }}
          >
            <li>Workspace</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
