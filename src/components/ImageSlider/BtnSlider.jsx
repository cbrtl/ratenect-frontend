import React from 'react';
import './ImgSlider.css';
import leftArrow from '../asset/icons/left-arrow.svg';
import rightArrow from '../asset/icons/right-arrow.svg';

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <>
      <button
        onClick={moveSlide}
        className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
      >
        <img
          src={direction === 'next' ? rightArrow : leftArrow}
          alt="nav-buttons"
        />
      </button>
    </>
  );
}
