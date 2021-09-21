import React from 'react';
import NgoEvent from './ngoEvent';

export default function NgoWorkspace() {
  return (
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
}
