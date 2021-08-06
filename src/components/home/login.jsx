import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
import './login.css';
import Loginpopup from './loginpopup';

export default function Login() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="login">
      <main>
        <button onClick={() => setButtonPopup(true)}>Login</button>
      </main>

      <Loginpopup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form>
          <h2>Log in</h2>
          <div className="form-element">
            <input type="text" name="Enter email" placeholder="Email" />
          </div>
          <div className="form-element">
            <input type="password" name="Enter password" placeholder="Password"/>
          </div>
          <div className="form-element">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <div className="form-element">
            <button>Get Started!</button>
          </div>
          <div className="form-element">
            <a href="/">Forgot password?</a> {/* Link will be changed */}
          </div>


        </form>

      </Loginpopup>
    </div>

  );
}




























