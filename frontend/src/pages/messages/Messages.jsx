import React from 'react';
import { conversations } from '../../data/messages';
import MessagePreview from '../../components/MessagePreview/MessagePreview';
import './Messages.css';

const Messages = () => {
  return (
    <div className="messages-page container">
      <div className="messages-page-header">
        <h1 className="messages-page-title">Messages</h1>
        <p className="messages-page-subtitle">Chat with clients, discuss project specifications and negotiate milestones</p>
      </div>

      <div className="messages-table-container">
        {conversations.length === 0 ? (
          <div className="messages-empty-state">
            <p>Inbox is empty.</p>
          </div>
        ) : (
          <table className="messages-table">
            <thead>
              <tr>
                <th>Buyer</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {conversations.map((convo) => (
                <MessagePreview key={convo.id} conversation={convo} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Messages;
