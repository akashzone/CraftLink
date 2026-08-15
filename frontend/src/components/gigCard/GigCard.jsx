import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import UserAvatar from '../UserAvatar/UserAvatar';
import Rating from '../Rating/Rating';
import './GigCard.css';

const GigCard = ({ gig }) => {
  if (!gig) return null;

  return (
    <div className="gig-card-wrapper">
      <Link to={`/gig/${gig.id}`} className="gig-card-link">
        <div className="gig-card-image-box">
          <img src={gig.images[0]} alt={gig.title} className="gig-card-image" />
        </div>
        
        <div className="gig-card-content">
          <div className="gig-card-seller-info">
            <UserAvatar src={gig.seller.avatar} name={gig.seller.name} size="small" />
            <div className="gig-card-seller-details">
              <span className="gig-card-seller-name">{gig.seller.name}</span>
              <span className="gig-card-seller-level">{gig.seller.level}</span>
            </div>
          </div>
          
          <h3 className="gig-card-title">{gig.title}</h3>
          
          <div className="gig-card-ratings">
            <Rating value={gig.seller.rating} count={gig.seller.reviewsCount} showStars={false} size={14} />
          </div>
        </div>
      </Link>
      
      <div className="gig-card-footer">
        <button className="gig-card-heart-btn" aria-label="Add to favorites">
          <Heart size={16} className="heart-icon" />
        </button>
        <div className="gig-card-price">
          <span className="price-label">STARTING AT</span>
          <span className="price-amount">${gig.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default GigCard;
