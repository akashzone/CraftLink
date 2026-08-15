import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container footer-content">
        {/* Footer Top Links */}
        <div className="footer-links-grid">
          <div className="footer-col">
            <h4 className="footer-title">Categories</h4>
            <ul>
              <li><Link to="/gigs?cat=graphics-design">Graphics & Design</Link></li>
              <li><Link to="/gigs?cat=digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/gigs?cat=writing-translation">Writing & Translation</Link></li>
              <li><Link to="/gigs?cat=video-animation">Video & Animation</Link></li>
              <li><Link to="/gigs?cat=music-audio">Music & Audio</Link></li>
              <li><Link to="/gigs?cat=programming-tech">Programming & Tech</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">About</h4>
            <ul>
              <li><a href="#press">Press & News</a></li>
              <li><a href="#partners">Partnerships</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#ip">Intellectual Property</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Support</h4>
            <ul>
              <li><a href="#help">Help & Support</a></li>
              <li><a href="#safety">Trust & Safety</a></li>
              <li><a href="#selling">Selling on CraftLink</a></li>
              <li><a href="#buying">Buying on CraftLink</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Community</h4>
            <ul>
              <li><a href="#hub">Community Hub</a></li>
              <li><a href="#forum">Forum</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">More From CraftLink</h4>
            <ul>
              <li><a href="#business">CraftLink Business</a></li>
              <li><a href="#pro">CraftLink Pro</a></li>
              <li><a href="#guides">CraftLink Guides</a></li>
              <li><a href="#inspired">Get Inspired</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-left">
            <span className="footer-logo">
              CraftLink<span className="dot">.</span>
            </span>
            <span className="footer-copyright">
              © CraftLink International Ltd. {currentYear}
            </span>
          </div>

          <div className="footer-right">
            <div className="footer-social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
