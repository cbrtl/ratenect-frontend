import React from 'react';
import NgoEvent from './ngoEvent';

const NgoWorkspace = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
    }}
  >
    <NgoEvent />
  </div>
);

export default NgoWorkspace;
