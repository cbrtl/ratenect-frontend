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

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  function submitSignUp(e) {
    e.preventDefault();
    const name = userForm ? firstName + ' ' + lastName : fullName;
    const data = { name, email, password, confirmPassword };
    const url = userForm ? '/api/usersignup' : '/api/ngosignup';
    axios.post(url, data).then((res) => {
      if (res.status === 201) {
        // setButtonPopup(false);
        setUserForm(false);
        setFirstName('');
        setLastName('');
        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      }
      console.log(res);
      handleClose();
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
                  />
                  <Input
                    type="text"
                    name="lName"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              ) : (
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                />
              )}
            </div>
          </div>
          <div className="form-element">
            <Input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-element">
            <Input
              type="password"
              name="password"
              placeholder="Create Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-element">
            <Input
              type="password"
              name="cnfPassword"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
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

/* <div className="signup">
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
                    onChange={(e) => setLastName(e.target.value)}
                    required="true"
                  />
                </div>
              ) : (
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              )}
            </div>
          </div>
          <div className="form-element">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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
    </div> */
