import React from 'react';
import './UserAvatar.css';

const UserAvatar = ({ src, name = 'User', size = 'medium', isOnline = false }) => {
  const getInitials = (userName) => {
    return userName
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <div className={`user-avatar avatar-${size}`}>
      {src ? (
        <img src={src} alt={name} className="avatar-img" />
      ) : (
        <div className="avatar-placeholder">{getInitials(name)}</div>
      )}
      {isOnline && <span className="status-dot online"></span>}
    </div>
  );
};

export default UserAvatar;
