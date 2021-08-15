import { React, useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/signup.css';
import Signuppopup from './signuppopup';


export default function Signup() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [userForm, setUserForm] = useState(false);

  // STATES OF INPUT FIELDS
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState(""); // for NGOs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function submitSignUp(){
    const name = userForm ? firstName+" "+lastName : fullName;
    const data = {name, email, password, confirmPassword};
    const url = userForm ?  '/api/usersignup' : '/api/ngosignup';
    axios.post(url, data)
      .then(res => {
        console.log(res);
        if(res.status === 201){
          setButtonPopup(false);
          setUserForm(false);
          setFirstName("");
          setLastName("");
          setFullName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        }
      }
    );
  }

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
                    name="fName"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <input 
                  type="text" 
                  name="lName" 
                  placeholder="Last Name" 
                  onChange={(e) => 
                  setLastName(e.target.value)}
                  required="true"
                  />
                </div>
              ) : (
                <input type="text" name="fullName" placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} required/>
              )}
            </div>
          </div>
          <div className="form-element">
            <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="form-element">
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-element">
            <input
              type="password"
              name="cnfPassword"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-element">
            <Link to="/ngo/Home">
              <button onClick={submitSignUp}>Submit</button>
            </Link>
          </div>
        </form>
      </Signuppopup>
    </div>
  );
}
