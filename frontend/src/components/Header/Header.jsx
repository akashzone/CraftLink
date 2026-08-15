import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MessageSquare, Bell, User, PlusCircle, Search, Menu, X } from 'lucide-react';
import UserAvatar from '../UserAvatar/UserAvatar';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/gigs?search=${encodeURIComponent(searchVal)}`);
    } else {
      navigate('/gigs');
    }
  };

  return (
    <header className="main-header">
      <div className="container header-container">
        {/* Mobile menu toggle */}
        <button 
          className="mobile-toggle-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="logo-box">
          <Link to="/" className="brand-logo">
            CraftLink<span className="dot">.</span>
          </Link>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="header-search-form">
          <input
            type="text"
            placeholder="Find services..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="header-search-input"
          />
          <button type="submit" className="header-search-btn" aria-label="Search">
            <Search size={16} />
          </button>
        </form>

        {/* Navigation - Desktop */}
        <nav className="desktop-nav">
          <Link to="/gigs" className="nav-link">Explore</Link>
          <Link to="/add" className="nav-link add-gig-link">
            <PlusCircle size={16} />
            <span>Add Gig</span>
          </Link>
          <Link to="/orders" className="nav-link icon-link" title="Orders">
            <Bell size={18} />
            <span className="badge-count">3</span>
          </Link>
          <Link to="/messages" className="nav-link icon-link" title="Messages">
            <MessageSquare size={18} />
            <span className="badge-count">1</span>
          </Link>
          <div className="user-profile-menu">
            <UserAvatar 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
              name="Anna" 
              size="small" 
              isOnline={true} 
            />
            <span className="user-name">Anna</span>
          </div>
          <div className="auth-buttons">
            <Link to="/login" className="btn-login">Sign In</Link>
            <Link to="/register" className="btn btn-outline btn-join">Join</Link>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}>
          <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-user">
              <UserAvatar 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
                name="Anna" 
                size="large" 
                isOnline={true} 
              />
              <div className="mobile-user-details">
                <span className="mobile-username">Anna Bell</span>
                <span className="mobile-user-level">Top Rated Seller</span>
              </div>
            </div>
            
            <div className="mobile-nav-links">
              <Link to="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/gigs" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Explore Gigs</Link>
              <Link to="/add" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Add New Gig</Link>
              <Link to="/orders" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Orders (3)</Link>
              <Link to="/messages" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Messages (1)</Link>
              <div className="divider"></div>
              <Link to="/login" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
              <Link to="/register" className="mobile-link join-highlight" onClick={() => setMobileMenuOpen(false)}>Join CraftLink</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
