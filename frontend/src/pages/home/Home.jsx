import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Code, Palette, Play, PenTool, BarChart2, Cpu } from 'lucide-react';
import { gigs } from '../../data/gigs';
import GigGrid from '../../components/GigGrid/GigGrid';
import './Home.css';

const Home = () => {
  const [searchVal, setSearchVal] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/gigs?search=${encodeURIComponent(searchVal)}`);
    } else {
      navigate('/gigs');
    }
  };

  // Extract subset of gigs for different sections
  const popularGigs = gigs.slice(0, 4);
  const trendingGigs = gigs.slice(4, 8);

  const categoriesVisual = [
    { name: 'Graphics & Design', icon: <Palette size={32} />, slug: 'graphics-design', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&fit=crop' },
    { name: 'Programming & Tech', icon: <Code size={32} />, slug: 'programming-tech', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&fit=crop' },
    { name: 'Digital Marketing', icon: <BarChart2 size={32} />, slug: 'digital-marketing', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&fit=crop' },
    { name: 'Writing & Translation', icon: <PenTool size={32} />, slug: 'writing-translation', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&fit=crop' },
    { name: 'Video & Animation', icon: <Play size={32} />, slug: 'video-animation', img: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&fit=crop' },
    { name: 'AI Services', icon: <Cpu size={32} />, slug: 'ai-services', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&fit=crop' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-left">
            <h1 className="hero-title">
              Find the right <i>freelancer</i> for your project
            </h1>
            <p className="hero-subtitle">
              Connect with talented professionals and get your work done instantly.
            </p>
            
            <form onSubmit={handleSearch} className="hero-search-form">
              <div className="search-input-wrapper">
                <Search size={20} className="search-icon-hero" />
                <input
                  type="text"
                  placeholder='Search for "logo design" or "React app"...'
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="hero-search-input"
                />
              </div>
              <button type="submit" className="btn btn-primary hero-search-btn">Search</button>
            </form>

            <div className="hero-shortcuts">
              <span className="shortcut-label">Popular:</span>
              <div className="shortcut-links">
                <Link to="/gigs?cat=graphics-design" className="shortcut-link">Graphics & Design</Link>
                <Link to="/gigs?cat=programming-tech" className="shortcut-link">Web Dev</Link>
                <Link to="/gigs?cat=ai-services" className="shortcut-link">AI Art</Link>
                <Link to="/gigs?cat=digital-marketing" className="shortcut-link">SEO</Link>
              </div>
            </div>
          </div>
          
          <div className="hero-right">
            {/* Visual illustration / background placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=450&fit=crop" 
              alt="Freelancers working" 
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* Popular Services Grid */}
      <section className="home-gigs-section page-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Popular Services</h2>
            <p className="section-subtitle">Handpicked professional services loved by our clients</p>
          </div>
          <GigGrid gigs={popularGigs} />
        </div>
      </section>

      {/* Category Visual Section */}
      <section className="categories-explore-section page-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Explore Popular Categories</h2>
            <p className="section-subtitle font-secondary">Connect with experts across key digital domains</p>
          </div>
          <div className="categories-grid">
            {categoriesVisual.map((cat, idx) => (
              <Link to={`/gigs?cat=${cat.slug}`} key={idx} className="category-tile-card">
                <div className="category-tile-img-box">
                  <img src={cat.img} alt={cat.name} className="category-tile-img" />
                  <div className="category-tile-overlay"></div>
                </div>
                <div className="category-tile-content">
                  <span className="category-tile-icon">{cat.icon}</span>
                  <h3 className="category-tile-name">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="home-gigs-section page-section bg-light-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trending on CraftLink</h2>
            <p className="section-subtitle">Get inspired by top services trending in the market right now</p>
          </div>
          <GigGrid gigs={trendingGigs} />
        </div>
      </section>

      {/* Join Call to Action */}
      <section className="join-cta-section page-section">
        <div className="container cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Join thousands of freelancers and buyers</h2>
            <p className="cta-desc">
              Whether you want to offer your skills as a seller or hire top tier experts for your projects, CraftLink gives you the platform to succeed.
            </p>
            <div className="cta-actions">
              <Link to="/register" className="btn btn-primary btn-cta">Get Started</Link>
              <Link to="/login" className="btn btn-secondary btn-cta-secondary">Sign In</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
