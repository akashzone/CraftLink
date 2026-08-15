import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { gigs } from '../../data/gigs';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import GigGrid from '../../components/GigGrid/GigGrid';
import { SlidersHorizontal } from 'lucide-react';
import './Gigs.css';

const Gigs = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('cat') || '';
  const searchParam = searchParams.get('search') || '';

  // Get nice headings based on category
  const getCategoryMeta = () => {
    if (searchParam) {
      return {
        title: `Search results for "${searchParam}"`,
        subtitle: `Explore top experts offering services matching "${searchParam}"`,
        breadcrumb: [{ name: 'Search Results' }]
      };
    }

    switch (categoryParam) {
      case 'graphics-design':
        return {
          title: 'Graphics & Design',
          subtitle: 'Designs that stand out. Logo, brand identity, character sheets, illustrations.',
          breadcrumb: [{ name: 'Graphics & Design' }]
        };
      case 'programming-tech':
        return {
          title: 'Programming & Tech',
          subtitle: 'Clean code. Websites, APIs, automation scripts, scrapers, full-stack systems.',
          breadcrumb: [{ name: 'Programming & Tech' }]
        };
      case 'ai-services':
        return {
          title: 'AI Services',
          subtitle: 'Explore the boundaries of art and technology with custom AI prompt engineers.',
          breadcrumb: [{ name: 'AI Services' }]
        };
      case 'digital-marketing':
        return {
          title: 'Digital Marketing',
          subtitle: 'Organic growth and conversions. Social media management, SEO strategies.',
          breadcrumb: [{ name: 'Digital Marketing' }]
        };
      case 'video-animation':
        return {
          title: 'Video & Animation',
          subtitle: 'Stunning stories. High-converting animated explainer videos and editing.',
          breadcrumb: [{ name: 'Video & Animation' }]
        };
      default:
        return {
          title: 'All Services',
          subtitle: 'Browse all professional freelance services on CraftLink.',
          breadcrumb: [{ name: 'All Services' }]
        };
    }
  };

  const meta = getCategoryMeta();

  // Simple visual filtering (not full state logic, just reflecting path query!)
  const filteredGigs = gigs.filter((gig) => {
    if (searchParam) {
      const query = searchParam.toLowerCase();
      return (
        gig.title.toLowerCase().includes(query) ||
        gig.category.toLowerCase().includes(query) ||
        gig.description.toLowerCase().includes(query)
      );
    }
    if (categoryParam) {
      // Map slug to category name parts
      const query = categoryParam.replace('-', ' ').toLowerCase();
      return gig.category.toLowerCase().includes(query.split(' ')[0]);
    }
    return true;
  });

  return (
    <div className="gigs-page container">
      {/* Breadcrumb */}
      <Breadcrumb items={meta.breadcrumb} />

      {/* Title & Header */}
      <div className="gigs-header">
        <h1 className="gigs-title">{meta.title}</h1>
        <p className="gigs-subtitle">{meta.subtitle}</p>
      </div>

      {/* Filter Section */}
      <div className="filters-wrapper">
        <div className="filters-left">
          <div className="filter-item-control">
            <label className="filter-label-text">Budget</label>
            <div className="budget-inputs">
              <input type="number" placeholder="Min" className="budget-input" />
              <input type="number" placeholder="Max" className="budget-input" />
              <button className="btn-budget-apply">Apply</button>
            </div>
          </div>

          <div className="filter-item-control">
            <label className="filter-label-text">Delivery Time</label>
            <select className="filter-select-element">
              <option value="">Anytime</option>
              <option value="1">Express (24h)</option>
              <option value="3">Up to 3 days</option>
              <option value="7">Up to 7 days</option>
            </select>
          </div>

          <div className="filter-item-control">
            <label className="filter-label-text">Seller Level</label>
            <select className="filter-select-element">
              <option value="">All Levels</option>
              <option value="top">Top Rated Seller</option>
              <option value="level2">Level 2</option>
              <option value="level1">Level 1</option>
            </select>
          </div>
          
          <div className="filter-item-control">
            <label className="filter-label-text">Sort By</label>
            <select className="filter-select-element">
              <option value="best">Best Selling</option>
              <option value="newest">Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="filters-right">
          <span className="results-count">{filteredGigs.length} services available</span>
        </div>
      </div>

      {/* Gig Grid */}
      <main className="gigs-grid-container page-section">
        <GigGrid gigs={filteredGigs} />
      </main>
    </div>
  );
};

export default Gigs;
