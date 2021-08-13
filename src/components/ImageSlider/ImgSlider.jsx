import React, { useState } from 'react';
import dataSlider from './dataSlider';
import BtnSlider from './BtnSlider';
import './ImgSlider.css';

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="slider-container">
      {dataSlider.map((obj, index) => (
        <div
          key={obj.id}
          className={
            slideIndex === index + 1 ? 'slide active-animation' : 'slide'
          }
        >
          <img src={obj.image} alt="Introduction" />
          <p>{obj.title}</p>
        </div>
      ))}

      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />

      <div className="dots-container">
        {Array.from({ length: 4 }).map((item, index) => (
          <div>
            <button
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? 'dot active' : 'dot'}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
