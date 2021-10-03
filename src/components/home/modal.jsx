import React from 'react';
import { Modal } from 'react-bootstrap';

const NewModal = (props) => {
  const { modalTitle, show, handleClose, children } = props;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      style={{ zIndex: 10000, textAlign: 'center' }}
    >
      <Modal.Header closeButton style={{ textAlign: 'center' }}>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default NewModal;
