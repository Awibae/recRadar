import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { MdOutlineStar, MdOutlineStarBorder  } from "react-icons/md";

const StarRatingComponent = ({ rating = 0, size = 24, style }) => {
  const clampedRating = Math.min(Math.max(rating, 0), 5);

  const renderStars = () => {
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
      let fillPercentage = 0;
      
      if (i < Math.floor(clampedRating)) {
        fillPercentage = 100;
      } else if (i === Math.floor(clampedRating)) {
        fillPercentage = (clampedRating % 1) * 100;
      }

      stars.push(
        <div key={i} className="position-relative" style={{ width: size, height: size }}>
          <MdOutlineStar 
            className="position-absolute top-0 start-0 text-secondary"
            style={{ 
              fontSize: `${size}px`, 
              zIndex: 1,
              fill: '#808080'
            }}
          />
          
          <MdOutlineStar 
            className="position-absolute top-0 start-0 text-warning"
            style={{
              fontSize: `${size}px`,
              zIndex: 2,
              clipPath: `polygon(0 0, ${fillPercentage}% 0, ${fillPercentage}% 100%, 0 100%)`,
              fill: '#45DFB1'
            }}
          />
        </div>
      );
    }
    
    return stars;
  };

  return (
    <div className="d-flex align-items-center" style={{ ...style }}>
      <div className="d-flex">
        {renderStars()}
      </div>
    </div>
  );
};

export default StarRatingComponent;