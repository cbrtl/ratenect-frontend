import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './css/starRating.css';

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              classname="star"
              cursor="pointer"
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
