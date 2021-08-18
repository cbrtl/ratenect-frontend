import React from 'react';
import './css/ngoAboutUs.css';
import profilePic from '../asset/images/profile.png';
import Slider from '../ImageSlider/ImgSlider';

export default function AboutUsComp() {
  return (
    <div className="about-us-box">
      <div className="profile">
        <div className="image-container">
          <img src={profilePic} alt="logo" />
        </div>
        <div className="name-container">
          <h6>Rahul Maheswari</h6>
          <p>Founder</p>
        </div>
      </div>
      <div className="profile">
        <div className="image-container">
          <img src={profilePic} alt="logo" />
        </div>
        <div className="name-container">
          <h6>Rahul Maheswari</h6>
          <p>Secretary </p>
        </div>
      </div>
      <div className="profile">
        <div className="image-container">
          <img src={profilePic} alt="logo" />
        </div>
        <div className="name-container">
          <h6>Rahul Maheswari</h6>
          <p>Finance Trustee</p>
        </div>
      </div>
      <div className="slider">
        <Slider />
      </div>
    </div>
  );
}
