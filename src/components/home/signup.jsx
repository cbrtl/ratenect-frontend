import { React, useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import './css/signup.css';
import Signuppopup from './signuppopup';

export default function Signup() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [userForm, setUserForm] = useState(false);

  return (
    <div className="signup">
      <main>
        <button onClick={() => setButtonPopup(true)}>Sign Up</button>
      </main>

      <Signuppopup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h2>Sign Up</h2>
        <div className="switch">
          <button onClick={() => setUserForm(false)}>NGO</button>
          <button onClick={() => setUserForm(true)}>User</button>
        </div>
        <form>
          <div className="form-element">
            <div className="first-element">
              {userForm ? (
                <div>
                  <input
                    type="text"
                    name="First name"
                    placeholder="First Name"
                  />
                  <input type="text" name="Last name" placeholder="Last Name" />
                </div>
              ) : (
                <input type="text" name="Name" placeholder="Name" />
              )}
            </div>
          </div>
          <div className="form-element">
            <input type="text" name="Enter email" placeholder="Email" />
          </div>
          <div className="form-element">
            <input
              type="password"
              name="Enter password"
              placeholder="Create Password"
            />
          </div>
          <div className="form-element">
            <input
              type="password"
              name="Re enter password"
              placeholder="Confirm Password"
            />
          </div>

          <div className="form-element">
            <Link to="/ngo/Home">
              <button>Submit</button>
            </Link>
          </div>
        </form>
      </Signuppopup>
    </div>
  );
}
