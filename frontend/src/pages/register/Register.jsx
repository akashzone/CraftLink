import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, ShoppingCart, Briefcase } from 'lucide-react';
import './Register.css';

const Register = () => {
  const [role, setRole] = useState('buyer');

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI only
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-card-header">
          <Link to="/" className="register-logo">
            CraftLink<span className="dot">.</span>
          </Link>
          <h1 className="register-title">Join CraftLink</h1>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label className="form-label" htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="e.g. John Doe"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="e.g. johndoe12"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-enter password"
              className="form-input"
              required
            />
          </div>

          {/* Role Selection UI */}
          <div className="role-selection-section">
            <span className="form-label">I want to join as a:</span>
            <div className="role-cards-grid">
              <div 
                className={`role-card ${role === 'buyer' ? 'active' : ''}`}
                onClick={() => setRole('buyer')}
              >
                <ShoppingCart size={24} className="role-icon" />
                <div className="role-text-box">
                  <span className="role-name">Buyer</span>
                  <span className="role-desc">Looking to hire talents</span>
                </div>
              </div>

              <div 
                className={`role-card ${role === 'seller' ? 'active' : ''}`}
                onClick={() => setRole('seller')}
              >
                <Briefcase size={24} className="role-icon" />
                <div className="role-text-box">
                  <span className="role-name">Seller</span>
                  <span className="role-desc">Looking to offer services</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Picture Upload UI */}
          <div className="form-group">
            <span className="form-label">Profile Picture (Optional)</span>
            <div className="upload-container-box">
              <input type="file" id="avatar-upload" className="upload-hidden-input" accept="image/*" />
              <label htmlFor="avatar-upload" className="upload-clickable-zone">
                <Upload size={20} className="upload-icon" />
                <span className="upload-primary-text">Click to upload photo</span>
                <span className="upload-secondary-text">PNG, JPG up to 5MB</span>
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block register-submit-btn">
            Create Account
          </button>
        </form>

        <div className="register-card-footer">
          <span>Already have an account?</span>
          <Link to="/login" className="login-link">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
