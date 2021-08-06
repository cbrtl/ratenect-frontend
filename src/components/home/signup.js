import React, { useState } from 'react';
//import Modal from 'react-bootstrap/Modal';
import './signup.css';
import Signuppopup from './signuppopup.js';

export default function Signup() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="signup">
      <main>
        <button onClick={() => setButtonPopup(true)}>Sign Up</button>
      </main>

      <Signuppopup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h2>Sign Up</h2>
          <div className="switch">
              <button>NGO</button>
              <button>Volunteer</button>
          </div>
        <form>
          <div className="form-element">
            <div className="first-element">
              <input type="text" name="First name" placeholder="First Name" />
              <input type="text" name="Last name" placeholder="Last Name" />
            </div>
          </div>
          <div className="form-element">
            <input type="text" name="Enter email" placeholder="Email" />
          </div>
          <div className="form-element">
            <input type="password" name="Enter password" placeholder="Create Password"/>
          </div>
          <div className="form-element">
            <input type="password" name="Re enter password" placeholder="Confirm Password"/>
          </div>
          
          <div className="form-element">
            <button>Submit</button>
          </div>
          


        </form>

      </Signuppopup>
    </div>

  );
}



