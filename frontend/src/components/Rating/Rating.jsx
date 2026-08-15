import React from 'react';
import { Star } from 'lucide-react';
import './Rating.css';

const Rating = ({ value = 5, count, showStars = true, size = 16 }) => {
  const roundedValue = Math.round(value);

  return (
    <div className="rating-container">
      {showStars ? (
        <div className="stars-wrapper">
          {[1, 2, 3, 4, 5].map((index) => (
            <Star
              key={index}
              size={size}
              className={index <= roundedValue ? 'star filled' : 'star'}
              fill={index <= roundedValue ? 'var(--star-gold)' : 'none'}
            />
          ))}
        </div>
      ) : (
        <Star size={size} className="star filled" fill="var(--star-gold)" />
      )}
      
      {value > 0 && <span className="rating-val">{value.toFixed(1)}</span>}
      {count !== undefined && <span className="rating-count">({count})</span>}
    </div>
  );
};

export default Rating;
