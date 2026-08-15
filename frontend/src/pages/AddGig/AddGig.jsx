import React from 'react';
import { Upload, Plus, Trash2 } from 'lucide-react';
import './AddGig.css';

const AddGig = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // UI only
  };

  return (
    <div className="add-gig-page container">
      <h1 className="add-gig-page-title">Add New Gig</h1>
      
      <form onSubmit={handleSubmit} className="add-gig-form">
        <div className="add-gig-grid">
          
          {/* Left Column: Core Gig Details */}
          <div className="add-gig-left-col">
            <div className="form-card">
              <h2 className="form-card-title">Basic Info</h2>
              
              <div className="form-group">
                <label className="form-label" htmlFor="gigTitle">Gig Title</label>
                <input
                  type="text"
                  id="gigTitle"
                  placeholder="e.g. I will build a modern responsive React website for your brand"
                  className="form-input"
                  required
                />
                <span className="input-hint">Make it catchy and descriptive (max 80 chars)</span>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="gigCategory">Category</label>
                <select id="gigCategory" className="form-select" required>
                  <option value="">Select a Category</option>
                  <option value="design">Graphics & Design</option>
                  <option value="programming">Programming & Tech</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="writing">Writing & Translation</option>
                  <option value="video">Video & Animation</option>
                  <option value="ai">AI Services</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Cover Image</label>
                <div className="gig-upload-area">
                  <input type="file" id="cover-img" className="upload-hidden-input" accept="image/*" />
                  <label htmlFor="cover-img" className="gig-upload-label">
                    <Upload size={24} className="upload-icon" />
                    <span className="upload-main-txt">Upload cover image</span>
                    <span className="upload-sub-txt">This is the main card image displayed in listing searches (Min 1280x769px)</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Gallery Images (Optional, max 3)</label>
                <div className="gallery-uploads-row">
                  <div className="gallery-upload-box">
                    <input type="file" id="gal-1" className="upload-hidden-input" accept="image/*" />
                    <label htmlFor="gal-1" className="gal-upload-label">
                      <Plus size={20} />
                      <span>Upload</span>
                    </label>
                  </div>
                  <div className="gallery-upload-box">
                    <input type="file" id="gal-2" className="upload-hidden-input" accept="image/*" />
                    <label htmlFor="gal-2" className="gal-upload-label">
                      <Plus size={20} />
                      <span>Upload</span>
                    </label>
                  </div>
                  <div className="gallery-upload-box">
                    <input type="file" id="gal-3" className="upload-hidden-input" accept="image/*" />
                    <label htmlFor="gal-3" className="gal-upload-label">
                      <Plus size={20} />
                      <span>Upload</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="gigDesc">Full Description</label>
                <textarea
                  id="gigDesc"
                  placeholder="Describe your service in detail..."
                  className="form-textarea"
                  required
                ></textarea>
                <span className="input-hint">Be thorough. Explain what is included, what you need from the buyer, and your process.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Scope Details */}
          <div className="add-gig-right-col">
            <div className="form-card">
              <h2 className="form-card-title">Scope & Pricing</h2>

              <div className="form-group">
                <label className="form-label" htmlFor="serviceTitle">Service Package Title</label>
                <input
                  type="text"
                  id="serviceTitle"
                  placeholder="e.g. Basic React Webpage"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="shortDesc">Short Package Description</label>
                <textarea
                  id="shortDesc"
                  placeholder="Briefly describe what's included in this basic package..."
                  className="form-textarea short-textarea"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="delivery">Delivery Time</label>
                <select id="delivery" className="form-select" required>
                  <option value="">Choose delivery timeline</option>
                  <option value="1">1 Day Delivery</option>
                  <option value="2">2 Days Delivery</option>
                  <option value="3">3 Days Delivery</option>
                  <option value="5">5 Days Delivery</option>
                  <option value="7">7 Days Delivery</option>
                  <option value="14">14 Days Delivery</option>
                  <option value="30">30 Days Delivery</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="revisions">Revisions</label>
                <select id="revisions" className="form-select" required>
                  <option value="">Choose Revisions</option>
                  <option value="1">1 Revision</option>
                  <option value="2">2 Revisions</option>
                  <option value="3">3 Revisions</option>
                  <option value="5">5 Revisions</option>
                  <option value="9">Unlimited Revisions</option>
                </select>
              </div>

              {/* Add Features */}
              <div className="form-group">
                <label className="form-label">Features Included</label>
                <div className="add-feature-input-row">
                  <input
                    type="text"
                    placeholder="e.g. Responsive layout"
                    className="form-input feature-item-input"
                  />
                  <button type="button" className="btn btn-secondary add-feature-btn">
                    <Plus size={16} />
                  </button>
                </div>
                
                <ul className="added-features-list">
                  <li className="added-feature-item">
                    <span>Source Files</span>
                    <button type="button" className="remove-feature-btn" aria-label="Remove feature">
                      <Trash2 size={14} />
                    </button>
                  </li>
                  <li className="added-feature-item">
                    <span>Responsive Layout</span>
                    <button type="button" className="remove-feature-btn" aria-label="Remove feature">
                      <Trash2 size={14} />
                    </button>
                  </li>
                </ul>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="price">Price ($)</label>
                <input
                  type="number"
                  id="price"
                  placeholder="e.g. 59.99"
                  className="form-input"
                  min="5"
                  step="0.01"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block create-gig-submit-btn">
                Publish Gig
              </button>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default AddGig;
