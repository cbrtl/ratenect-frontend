import React from 'react';

import Slider from '../../components/ImageSlider/ImgSlider';

// import './ngoForm.css';

export default function NgoProfileForm() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <h1>NGO Profile Form Page</h1>
      <h2>Sign Up</h2>
      <div className="switch">
        <button>NGO</button>
        <button>Volunteer</button>
      </div>
      <form>
        <div className="form-element">
          {/* <label>Organisation Name</label> */}
          <input
            type="text"
            name="First name"
            placeholder="Organisation Name"
          />
        </div>
        <div className="form-element">
          {/* <label>Password</label> */}
          <input
            type="password"
            name="Create password"
            placeholder="Create Password"
          />
        </div>
        <div className="form-element">
          {/* <label>Date of foundation</label> */}
          <input
            type="text"
            name="Date of foundation"
            placeholder="Date of foundation"
          />
        </div>
        <div className="form-element">
          {/* <label>Mobile No.</label> */}
          <input type="text" name="Mobile No." placeholder="Mobile No." />
        </div>
        <div className="form-element">
          {/* <label>Address</label> */}
          <input type="text" name="Line 1" placeholder="Line 1" />
          <input type="text" name="Line 2" placeholder="Line 2" />
        </div>
        <div className="form-element">
          <div className="Founder">
            <input type="text" name="First name" placeholder="First Name" />
            <input type="text" name="Last name" placeholder="Last Name" />
          </div>
        </div>
        <div className="form-element">
          <div className="Secratary">
            <input type="text" name="First name" placeholder="First Name" />
            <input type="text" name="Last name" placeholder="Last Name" />
          </div>
        </div>
        <div className="form-element">
          <div className="Finanace Trustee">
            <input type="text" name="First name" placeholder="First Name" />
            <input type="text" name="Last name" placeholder="Last Name" />
          </div>
        </div>

        <div className="form-element">
          <button>Submit</button>
        </div>
      </form>

      <Slider />
    </div>
  );
}
