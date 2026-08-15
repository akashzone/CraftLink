import React, { useState } from 'react';
import { Clock, RotateCcw, Check } from 'lucide-react';
import './PriceCard.css';

const PriceCard = ({ gig }) => {
  const [activeTab, setActiveTab] = useState('basic');

  if (!gig) return null;

  // Derive prices and details for demo purposes based on active tab
  const getPackageDetails = () => {
    switch (activeTab) {
      case 'standard':
        return {
          title: 'Standard Package',
          price: gig.price * 2,
          desc: 'Get advanced features and options with extra assets. Source files and commercial license included.',
          delivery: gig.deliveryTime + 2,
          revisions: gig.revisions + 2,
          includedFeatures: gig.features.slice(0, 3)
        };
      case 'premium':
        return {
          title: 'Premium Package',
          price: gig.price * 3.5,
          desc: 'Ultimate professional bundle. VIP customer support, fast delivery, maximum revisions, and source files.',
          delivery: Math.max(1, gig.deliveryTime - 1),
          revisions: 9,
          includedFeatures: gig.features
        };
      case 'basic':
      default:
        return {
          title: 'Basic Package',
          price: gig.price,
          desc: `Perfect basic starter option: ${gig.features[0] || 'Core files'} and primary project delivery.`,
          delivery: gig.deliveryTime,
          revisions: gig.revisions,
          includedFeatures: gig.features.slice(0, 2)
        };
    }
  };

  const pack = getPackageDetails();

  return (
    <div className="price-card">
      <div className="price-card-tabs">
        <button
          className={`tab-btn ${activeTab === 'basic' ? 'active' : ''}`}
          onClick={() => setActiveTab('basic')}
        >
          Basic
        </button>
        <button
          className={`tab-btn ${activeTab === 'standard' ? 'active' : ''}`}
          onClick={() => setActiveTab('standard')}
        >
          Standard
        </button>
        <button
          className={`tab-btn ${activeTab === 'premium' ? 'active' : ''}`}
          onClick={() => setActiveTab('premium')}
        >
          Premium
        </button>
      </div>

      <div className="price-card-body">
        <div className="price-card-header">
          <span className="package-title">{pack.title}</span>
          <span className="package-price">${pack.price.toFixed(2)}</span>
        </div>

        <p className="package-desc">{pack.desc}</p>

        <div className="package-specs">
          <div className="spec-item">
            <Clock size={16} />
            <span>{pack.delivery} Days Delivery</span>
          </div>
          <div className="spec-item">
            <RotateCcw size={16} />
            <span>{pack.revisions === 9 ? 'Unlimited' : `${pack.revisions} Revisions`}</span>
          </div>
        </div>

        <ul className="package-features">
          {gig.features.map((feature, idx) => {
            const isIncluded = pack.includedFeatures.includes(feature);
            return (
              <li key={idx} className={`feature-item ${isIncluded ? '' : 'excluded'}`}>
                <Check size={16} className="feature-icon" />
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>

        <button className="btn btn-primary btn-block continue-btn">
          Continue (${pack.price.toFixed(2)})
        </button>
        
        <button className="btn btn-secondary btn-block contact-seller-btn">
          Contact Seller
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
