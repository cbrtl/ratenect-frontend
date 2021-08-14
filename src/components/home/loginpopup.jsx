import React from 'react';
import './css/loginpopup.css';

export default function Loginpopup(props) {
  const { trigger, setTrigger, children } = props;
  return trigger ? (
    <div className="login-popup">
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
