import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryNavbar.css';

const categories = [
  { name: 'Graphics & Design', slug: 'graphics-design' },
  { name: 'Video & Animation', slug: 'video-animation' },
  { name: 'Writing & Translation', slug: 'writing-translation' },
  { name: 'AI Services', slug: 'ai-services' },
  { name: 'Digital Marketing', slug: 'digital-marketing' },
  { name: 'Music & Audio', slug: 'music-audio' },
  { name: 'Programming & Tech', slug: 'programming-tech' },
  { name: 'Business', slug: 'business' },
  { name: 'Lifestyle', slug: 'lifestyle' }
];

const CategoryNavbar = () => {
  return (
    <div className="category-navbar">
      <div className="container category-container">
        <ul className="category-list">
          {categories.map((cat, idx) => (
            <li key={idx} className="category-item">
              <Link to={`/gigs?cat=${cat.slug}`} className="category-link">
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryNavbar;
export { categories };
