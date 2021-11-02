import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import NgoEventModal from './ngoEvent';

const NgoWorkspace = () => {
  const [showAddModal, setShowAddModal] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Row style={{ margin: '20px' }}>
        <Col>
          <Button
            variant="success"
            onClick={() => {
              setShowAddModal(true);
            }}
          >
            Create a New Campaign
          </Button>
        </Col>
      </Row>
      <NgoEventModal
        show={showAddModal}
        handleClose={() => {
          setShowAddModal(false);
        }}
      />
    </div>
  );
};

export default NgoWorkspace;
