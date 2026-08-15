import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './Breadcrumb.css';

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="breadcrumb-nav">
      <ul className="breadcrumb-list">
        <li>
          <Link to="/" className="breadcrumb-link home-link">CRAFTLINK</Link>
        </li>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ChevronRight size={12} className="breadcrumb-separator" />
            <li>
              {item.url ? (
                <Link to={item.url} className="breadcrumb-link">
                  {item.name.toUpperCase()}
                </Link>
              ) : (
                <span className="breadcrumb-current">
                  {item.name.toUpperCase()}
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
