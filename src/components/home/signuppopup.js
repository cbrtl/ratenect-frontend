import React from 'react'
import './signuppopup.css'

export default function Signuppopup(props) {
  return (props.trigger) ? (
    <div className='signup-popup'>
      <div className="inner-popup">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
        {props.children}
      </div>
    </div>
  ) : "";
}
