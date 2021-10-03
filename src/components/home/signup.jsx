import { React, useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import Input from '../UI/components/Input';
import './css/signup.css';
// import Signuppopup from './signuppopup';
import NewModal from './modal';

export default function Signup() {
  // const [buttonPopup, setButtonPopup] = useState(false);
  const [userForm, setUserForm] = useState(false);

  // STATES OF INPUT FIELDS
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState(''); // for NGOs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [show, setShow] = useState(false);
  const [ngoButtonStyle, setNgoButtonStyle] = useState({
    backgroundColor: '#2b6777',
  });
  const [userButtonStyle, setUserButtonStyle] = useState({
    backgroundColor: '#6db5c9',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setErrorMsg('');
    setSuccessMsg('');
  };

  function submitSignUp(e) {
    setErrorMsg('');
    setSuccessMsg('');
    e.preventDefault();
    if (password === confirmPassword) {
      const name = userForm ? firstName + ' ' + lastName : fullName;
      const data = { name, email, password };
      const url = userForm ? '/api/usersignup' : '/api/ngosignup';
      axios
        .post(url, data)
        .then((res) => {
          if (res.status === 201) {
            setUserForm(false);
            setFirstName('');
            setLastName('');
            setFullName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            console.log(res);
            setSuccessMsg('Account created successfully. Now you can Log in.');
          } else {
            setErrorMsg(res.message);
          }
        })
        .catch((error) => {
          setErrorMsg(error.message);
        });
    } else {
      setErrorMsg('Passwords do not match');
    }
  }

  function toggleUser(flag) {
    if (flag) {
      setUserForm(true);
      setUserButtonStyle({ backgroundColor: '#2b6777' });
      setNgoButtonStyle({ backgroundColor: '#6db5c9' });
    } else {
      setUserForm(false);
      setUserButtonStyle({ backgroundColor: '#6db5c9' });
      setNgoButtonStyle({ backgroundColor: '#2b6777' });
    }
  }

  return (
    <div className="signup">
      <main>
        <button onClick={handleShow}>Sign Up</button>
      </main>
      <NewModal
        modalTitle={userForm ? ' User Sign Up' : 'NGO Sign Up'}
        show={show}
        handleClose={handleClose}
      >
        <div
          className="switch"
          style={{
            textAlign: 'center',
            transform: 'translateX(25%)',
            paddingBottom: '65px',
          }}
        >
          <button style={ngoButtonStyle} onClick={() => toggleUser(false)}>
            NGO
          </button>
          <button style={userButtonStyle} onClick={() => toggleUser(true)}>
            User
          </button>
        </div>
        <div className="successMsg">
          <p style={{ color: 'green' }}>{successMsg}</p>
        </div>
        <div className="errorMsg">
          <p style={{ color: 'red' }}>{errorMsg}</p>
        </div>
        <Form onSubmit={submitSignUp}>
          <div className="form-element">
            <div className="first-element">
              {userForm ? (
                <div>
                  <Input
                    type="text"
                    name="fName"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                  <Input
                    type="text"
                    name="lName"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
              ) : (
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                />
              )}
            </div>
          </div>
          <div className="form-element">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-element">
            <Input
              type="password"
              name="password"
              placeholder="Create Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="form-element">
            <Input
              type="password"
              name="cnfPassword"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
          <Button type="submit" variant="primary">
            Sign Up
          </Button>
          &nbsp;&nbsp;
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Form>
      </NewModal>
    </div>
  );
}
