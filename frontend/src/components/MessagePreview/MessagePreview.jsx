import React from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from '../UserAvatar/UserAvatar';
import './MessagePreview.css';

const MessagePreview = ({ conversation }) => {
  if (!conversation) return null;

  return (
    <tr className={`message-preview-row ${!conversation.read ? 'unread' : ''}`}>
      <td>
        <div className="message-sender-cell">
          <UserAvatar src={conversation.avatar} name={conversation.buyer} size="small" />
          <span className="message-sender-name">{conversation.buyer}</span>
        </div>
      </td>
      <td>
        <Link to={`/message/${conversation.id}`} className="message-text-link">
          <span className="message-last-snippet">{conversation.lastMessage}</span>
        </Link>
      </td>
      <td>
        <span className="message-date-cell">{conversation.date}</span>
      </td>
      <td>
        <div className="message-action-cell">
          {!conversation.read ? (
            <button className="mark-read-btn">Mark as Read</button>
          ) : (
            <span className="read-status">Read</span>
          )}
        </div>
      </td>
    </tr>
  );
};

export default MessagePreview;
