import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './login.css';

export default function LoginMod(){

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button variant="primary" onClick={handleShow} className="login">
        Log in
      </button>
      <div className="modal_box">
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className="header">
          
          <Modal.Title className="titles">LOG IN</Modal.Title>
          
        </Modal.Header >
        <Modal.Body className="body">
          <form>
            <input type="email" id="email" name="email" placeholder= "  Email" className="email"></input>
            <br></br>
            <br></br>
            <input type="password" id="password" name="password" placeholder= "  Password" className="pass"></input>
          </form>
        </Modal.Body>

        <Modal.Footer className="modal_footer">
          
          <button variant="primary" onClick={handleClose} className="getstarted">
            Get Started
          </button>

        </Modal.Footer>
      </Modal>
      </div>
    </>

  )
}
    
    