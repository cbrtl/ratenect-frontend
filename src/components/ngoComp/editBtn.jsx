import React from 'react';
import { useHistory } from 'react-router-dom';

export default function EditBtn() {
  const history = useHistory();

  return (
    <div
      className="edit-btn"
      style={{ marginRight: '10rem', position: 'relative', float: 'right' }}
    >
      <button
        onClick={() => {
          history.push('/ngo/profile-edit');
        }}
        style={{
          width: '90px',
          height: '45px',
          fontSize: '16px',
          background: '#5c9cad',
          color: '#fff',
          borderRadius: '10px',
        }}
      >
        Edit
      </button>
    </div>
  );
}
