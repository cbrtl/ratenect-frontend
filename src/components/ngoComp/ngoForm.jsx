import React from 'react';
import Slider from '../ImageSlider/ImgSlider';
import './css/ngoForm.css';

export default function NgoForm() {
  return (
    <form className="ngo-form">
      <div className="ngo-form-element">
        <label>Organisation Name</label>
        <br />
        <input type="text" name="First name" placeholder="Organisation Name" />
      </div>
      <div className="ngo-form-element">
        <label>Password</label>
        <br />
        <input
          type="password"
          name="Create password"
          placeholder="Create Password"
        />
      </div>
      <div className="ngo-form-element">
        <label>Date of foundation</label>
        <br />
        <input
          type="date"
          name="Date of foundation"
          placeholder="Date of foundation"
        />
      </div>
      <div className="ngo-form-element">
        <label>Mobile No.</label>
        <br />
        <input type="number" name="Mobile No." placeholder="Mobile No." />
      </div>
      <div className="ngo-form-element">
        <label>Address</label>
        <br />
        <input type="text" name="Line 1" placeholder="Line 1" />
        <br />
        <input type="text" name="Line 2" placeholder="Line 2" />
        <br />
        <select id="city" name="city">
          <option value="city">Select City</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <select id="state" name="state">
          <option value="state">Select state</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
      </div>
      <div className="ngo-form-element">
        <label>Founder</label>
        <br />
        <input type="text" name="First name" placeholder="First Name" />
        <input type="text" name="Last name" placeholder="Last Name" />
      </div>
      <div className="ngo-form-element">
        <label>Secratary</label>
        <br />
        <input type="text" name="First name" placeholder="First Name" />
        <input type="text" name="Last name" placeholder="Last Name" />
      </div>
      <div className="ngo-form-element">
        <label>Finanace Trustee</label>
        <br />
        <input type="text" name="First name" placeholder="First Name" />
        <input type="text" name="Last name" placeholder="Last Name" />
      </div>
      <br />
      <br />
      <div className="ngo-form-element">
        <div className="rectangle">
          <label>Tax Exemption Certificate</label>
          <br />
          <br />
          <button>upload</button>
        </div>
      </div>
      <div className="ngo-form-element">
        <div className="rectangle">
          <label>Registration Certificate </label>
          <br />
          <br />
          <button>upload</button>
        </div>
      </div>
      <div className="ngo-form-element">
        <div className="rectangle">
          <label>Annual Report</label>
          <br />
          <br />
          <br />
          <button>upload</button>
        </div>
      </div>
      <div className="ngo-form-element">
        <div className="rectangle">
          <label>Trust Deeds</label>
          <br />
          <br />
          <br />
          <button>upload</button>
        </div>
      </div>
      <div className="ngo-form-element">
        <label>URL</label>
        <input type="url" name="url" placeholder="Website link" />
      </div>
      <br />
      <div className="ngo-form-element">
        <label>About Us</label>
        <br />
        <textarea rows="7" cols="80" name="about" />
      </div>
      <br />
      <br />
      <div className="ngo-form-element">
        <button>Save Changes!</button>
      </div>
      <br />
      <br />
      <div className="gallery">
        <div className="upload-gallery">
          <button>upload</button>
        </div>
        <Slider />
      </div>
    </form>
  );
}
