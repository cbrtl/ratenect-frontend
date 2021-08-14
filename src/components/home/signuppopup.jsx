import React from 'react';
import './css/signuppopup.css';

export default function Signuppopup(props) {
  const { trigger, setTrigger, children } = props;
  return trigger ? (
    <div className="signup-popup">
      <div className="inner-popup">
        <button className="close-btn" onClick={() => setTrigger(false)}>
          X
        </button>
        {children}
      </div>
    </div>
  ) : (
    ''
  );
}
