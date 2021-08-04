import React from 'react'
import './popup.css'

export default function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className="inner-popup">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
        {props.children}
      </div>
    </div>
  ) : "";
}
