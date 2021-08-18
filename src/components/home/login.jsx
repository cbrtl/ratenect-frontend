import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import './css/login.css';
import Loginpopup from './loginpopup';

export default function Login() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [userForm, setUserForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitLogin() {
    const data = {email, password};
    console.log(data);
    const url = userForm ? '/api/userlogin' : '/api/ngologin';
    console.log(url);
    axios.post(url, data).then(res => {
      if (res.status === 201) {
        setButtonPopup(false);
        setUserForm(false);
        setEmail('');
        setPassword('');
      } else {
        setButtonPopup(true);
      }
      console.log(res);
    })
  }

  return (
    <div className="login">
      <main>
        <button onClick={() => setButtonPopup(true)}>Login</button>
      </main>

      <Loginpopup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form>
          <h2>Log in</h2>
          <div className="switch">
          <button onClick={() => setUserForm(false)}>NGO</button>
          <button onClick={() => setUserForm(true)}>User</button>
        </div>
          <div className="form-element">
            <input
             type="text" 
             name="email" 
             placeholder="Email" 
             onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-element">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-element">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <div className="form-element">
            <button onClick={submitLogin}>Get Started!</button>
          </div>
          <div className="form-element">
            <a href="/">Forgot password?</a> {/* Link will be changed */}
          </div>
        </form>
      </Loginpopup>
    </div>
  );
}
