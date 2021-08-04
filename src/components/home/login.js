import React, { useState } from 'react';
//import Modal from 'react-bootstrap/Modal';
import './login.css';
import Popup from './popup.js';

export default function Login() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="login-popup">
      <main>
        <button onClick={() => setButtonPopup(true)}>Login</button>
      </main>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form>
          <h2>Log in</h2>
          <div className="form-element">
            <label>Email</label>
            <input type="text" name="Enter email" />
          </div>
          <div className="form-element">
            <label>Password</label>
            <input type="password" name="Enter password" />
          </div>
          <div className="form-element">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <div className="form-element">
            <button>Sign in</button>
          </div>
          <div className="form-element">
            <a href="#">Forgot password?</a>
          </div>


        </form>

      </Popup>
    </div>

  );
}




























// export default function LoginMod(){

//   const [show, setShow] = React.useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <>
//       <button variant="primary" onClick={handleShow} className="login">
//         Log in
//       </button>
//       <div className="modal_box">
//       <Modal show={show} onHide={handleClose} >
//         <Modal.Header closeButton className="header">

//           <Modal.Title className="titles">LOG IN</Modal.Title>

//         </Modal.Header >
//         <Modal.Body className="body">
//           <form>
//             <input type="email" id="email" name="email" placeholder= "  Email" className="email"></input>
//             <br></br>
//             <br></br>
//             <input type="password" id="password" name="password" placeholder= "  Password" className="pass"></input>
//           </form>
//         </Modal.Body>

//         <Modal.Footer className="modal_footer">

//           <button variant="primary" onClick={handleClose} className="getstarted">
//             Get Started
//           </button>

//         </Modal.Footer>
//       </Modal>
//       </div>
//     </>

//   )
// }
