import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import Rating from '../Rating/Rating';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
  if (!review) return null;

  return (
    <div className="review-card">
      <div className="review-card-header">
        <UserAvatar src={review.reviewer.avatar} name={review.reviewer.name} size="medium" />
        <div className="reviewer-info">
          <div className="reviewer-name-row">
            <span className="reviewer-name">{review.reviewer.name}</span>
            <span className="reviewer-country">{review.reviewer.country}</span>
          </div>
          <div className="reviewer-meta">
            <Rating value={review.rating} showStars={true} size={12} />
            <span className="review-dot">•</span>
            <span className="review-date">{review.date}</span>
          </div>
        </div>
      </div>
      
      <div className="review-card-body">
        <p className="review-text">{review.text}</p>
      </div>
      
      <div className="review-card-footer">
        <span className="helpful-question">Helpful?</span>
        <button className="helpful-btn" aria-label="Mark review as helpful">
          <ThumbsUp size={14} />
          <span>Yes</span>
        </button>
        <button className="helpful-btn" aria-label="Mark review as unhelpful">
          <ThumbsDown size={14} />
          <span>No</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
