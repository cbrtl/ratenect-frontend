import React from 'react'
import './loginpopup.css'

export default function Loginpopup(props) {
  return (props.trigger) ? (
    <div className='login-popup'>
      <div className="inner-popup">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
        {props.children}
      </div>
    </div>
  ) : "";
}
