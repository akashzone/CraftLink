import React from 'react';
import GigCard from '../GigCard/GigCard';
import './GigGrid.css';

const GigGrid = ({ gigs = [] }) => {
  if (gigs.length === 0) {
    return (
      <div className="gig-grid-empty">
        <p>No gigs found matching this criteria.</p>
      </div>
    );
  }

  return (
    <div className="gig-grid">
      {gigs.map((gig) => (
        <GigCard key={gig.id} gig={gig} />
      ))}
    </div>
  );
};

export default GigGrid;
