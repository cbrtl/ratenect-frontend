import React, { useState } from 'react';
import axios from 'axios';
import './css/login.css';
import { Form, Button } from 'react-bootstrap';
import Input from '../UI/components/Input';
import NewModal from './modal';

export default function Login() {
  const [userForm, setUserForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [ngoButtonStyle, setNgoButtonStyle] = useState({
    backgroundColor: '#2b6777',
  });
  const [userButtonStyle, setUserButtonStyle] = useState({
    backgroundColor: '#6db5c9',
  });
  const [errorMsg, setErrorMsg] = useState('');

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setErrorMsg('');
  };

  function submitLogin(e) {
    setErrorMsg('');
    e.preventDefault();
    const data = { email, password };
    console.log(data);
    const url = userForm ? '/api/userlogin' : '/api/ngologin';
    axios
      .post(url, data)
      .then((res) => {
        if (res.status === 200) {
          setUserForm(false);
          setShow(false);
          setEmail('');
          setPassword('');
        } else {
          setErrorMsg(res.message);
        }
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg('Authentication failed');
      });
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
    <div className="login">
      <main>
        <button onClick={handleShow}>Login</button>
      </main>
      <NewModal
        modalTitle={userForm ? ' User Log In' : 'NGO Log In'}
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
        <div className="errorMsg">
          <p style={{ color: 'red' }}>{errorMsg}</p>
        </div>
        <Form onSubmit={submitLogin}>
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
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <Button type="submit" variant="primary">
            Log In
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
