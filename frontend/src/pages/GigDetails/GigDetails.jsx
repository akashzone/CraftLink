import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MessageSquare, Star } from 'lucide-react';
import { gigs } from '../../data/gigs';
import { reviews } from '../../data/reviews';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import Rating from '../../components/Rating/Rating';
import PriceCard from '../../components/PriceCard/PriceCard';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import './GigDetails.css';

const GigDetails = () => {
  const { id } = useParams();
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const gigId = parseInt(id, 10);
  const gig = gigs.find((g) => g.id === gigId) || gigs[0]; // fallback to first gig for demo if id not matching

  if (!gig) {
    return (
      <div className="gig-details-not-found container page-section">
        <h2>Gig not found</h2>
        <Link to="/gigs" className="btn btn-primary">Browse Gigs</Link>
      </div>
    );
  }

  // Get reviews for this gig
  const gigReviews = reviews.filter((r) => r.gigId === gig.id);

  const handleNextImage = () => {
    setActiveImgIdx((prev) => (prev === gig.images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevImage = () => {
    setActiveImgIdx((prev) => (prev === 0 ? gig.images.length - 1 : prev - 1));
  };

  const breadcrumbItems = [
    { name: gig.category, url: `/gigs?cat=${gig.category.toLowerCase().replace(' & ', '-').replace(' ', '-')}` },
    { name: gig.subCategory || 'Services' }
  ];

  return (
    <div className="gig-details-page container">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="gig-details-layout">
        {/* Main Left Content */}
        <div className="gig-details-main">
          <h1 className="gig-main-title">{gig.title}</h1>
          
          {/* Seller Top Summary */}
          <div className="gig-seller-summary">
            <UserAvatar src={gig.seller.avatar} name={gig.seller.name} size="medium" isOnline={true} />
            <div className="seller-summary-info">
              <div className="seller-summary-name-row">
                <span className="seller-summary-name">{gig.seller.name}</span>
                <span className="seller-summary-level">{gig.seller.level}</span>
              </div>
              <div className="seller-summary-rating-row">
                <Rating value={gig.seller.rating} count={gig.seller.reviewsCount} showStars={true} size={14} />
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="gig-gallery">
            <div className="gallery-main-container">
              <img src={gig.images[activeImgIdx]} alt={gig.title} className="gallery-main-img" />
              
              <button className="gallery-control-btn prev" onClick={handlePrevImage} aria-label="Previous image">
                <ChevronLeft size={24} />
              </button>
              <button className="gallery-control-btn next" onClick={handleNextImage} aria-label="Next image">
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="gallery-thumbnails">
              {gig.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIdx(idx)}
                  className={`thumbnail-btn ${activeImgIdx === idx ? 'active' : ''}`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="thumbnail-img" />
                </button>
              ))}
            </div>
          </div>

          {/* About this Gig */}
          <section className="gig-about-section details-section">
            <h2 className="details-section-title">About this Gig</h2>
            <div className="gig-description-text">
              {gig.description.split('\n\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </section>

          {/* About the Seller */}
          <section className="gig-seller-section details-section">
            <h2 className="details-section-title">About the Seller</h2>
            
            <div className="seller-details-profile">
              <UserAvatar src={gig.seller.avatar} name={gig.seller.name} size="xlarge" isOnline={true} />
              <div className="seller-details-info">
                <h3 className="seller-details-name">{gig.seller.name}</h3>
                <p className="seller-details-level">{gig.seller.level}</p>
                <div className="seller-details-rating">
                  <Rating value={gig.seller.rating} count={gig.seller.reviewsCount} showStars={true} size={14} />
                </div>
                <button className="btn btn-secondary contact-btn">
                  <MessageSquare size={16} />
                  <span>Contact Me</span>
                </button>
              </div>
            </div>

            <div className="seller-stats-card">
              <div className="seller-stats-grid">
                <div className="stat-box">
                  <span className="stat-label">From</span>
                  <span className="stat-val">{gig.seller.from}</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Member Since</span>
                  <span className="stat-val">{gig.seller.memberSince}</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Avg. Response Time</span>
                  <span className="stat-val">{gig.seller.responseTime}</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Last Delivery</span>
                  <span className="stat-val">{gig.seller.lastDelivery}</span>
                </div>
              </div>
              <div className="seller-languages-box">
                <span className="stat-label">Languages</span>
                <span className="stat-val">{gig.seller.languages.join(', ')}</span>
              </div>
              <div className="divider"></div>
              <p className="seller-description-text">{gig.seller.description}</p>
            </div>
          </section>

          {/* Reviews Section */}
          <section className="gig-reviews-section details-section">
            <h2 className="details-section-title">Reviews</h2>
            <div className="reviews-summary-meta">
              <span className="reviews-summary-count">{gigReviews.length} Reviews</span>
              <Rating value={gig.seller.rating} showStars={true} size={16} />
            </div>
            
            <div className="reviews-list">
              {gigReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Right Content */}
        <div className="gig-details-sidebar">
          <PriceCard gig={gig} />
        </div>
      </div>
    </div>
  );
};

export default GigDetails;
