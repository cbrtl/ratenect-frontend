import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Button } from 'react-bootstrap';
import NgoEventModal from './ngoEvent';
import ActiveCampaigns from '../../components/ngoComp/activeCampaigns';

const NgoWorkspace = () => {
  const [showAddModal, setShowAddModal] = useState('');
  const [activeCampaigns, setActiveCampaigns] = useState([]);

  useEffect(() => {
    axios.get('/api/getNgoCampaignDetails').then((res) => {
      setActiveCampaigns(res.data.campaigns);
      console.log(activeCampaigns);
    });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
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
      <Row style={{ margin: '20px' }}>
        <Col>
          <ActiveCampaigns campaigns={activeCampaigns} />
        </Col>
      </Row>
      <NgoEventModal
        show={showAddModal}
        handleClose={() => {
          setShowAddModal(false);
        }}
        updateCampaigns={setActiveCampaigns}
      />
    </div>
  );
};

export default NgoWorkspace;
