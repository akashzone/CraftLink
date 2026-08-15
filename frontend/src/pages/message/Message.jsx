import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';
import { conversations, chatMessages } from '../../data/messages';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import './Message.css';

const Message = () => {
  const { id } = useParams();
  const chatEndRef = useRef(null);

  // Retrieve room conversation details
  const conversation = conversations.find((c) => c.id === id) || conversations[0];
  const messages = chatMessages[id] || chatMessages[conversation.id];

  // Auto-scroll chat area to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id, messages]);

  const handleSend = (e) => {
    e.preventDefault();
    // UI only
  };

  return (
    <div className="message-page container">
      {/* Back to Messages button */}
      <div className="chat-back-row">
        <Link to="/messages" className="back-inbox-link">
          <ArrowLeft size={16} />
          <span>Back to Inbox</span>
        </Link>
      </div>

      {/* Chat Container */}
      <div className="chat-box-container">
        {/* Chat Header */}
        <div className="chat-header">
          <div className="chat-client-info">
            <UserAvatar src={conversation.avatar} name={conversation.buyer} size="medium" isOnline={true} />
            <div className="chat-client-meta">
              <span className="chat-client-name">{conversation.buyer}</span>
              <span className="chat-client-status">Online</span>
            </div>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="chat-messages-area">
          {messages.map((msg) => {
            const isSeller = msg.sender === 'seller';
            return (
              <div key={msg.id} className={`message-bubble-wrapper ${isSeller ? 'outgoing' : 'incoming'}`}>
                {!isSeller && (
                  <UserAvatar src={conversation.avatar} name={conversation.buyer} size="small" />
                )}
                <div className="bubble-content-box">
                  <div className="message-bubble">
                    <p className="message-bubble-txt">{msg.text}</p>
                  </div>
                  <span className="message-bubble-time">{msg.time}</span>
                </div>
              </div>
            );
          })}
          <div ref={chatEndRef} />
        </div>

        {/* Chat Editor Input */}
        <form onSubmit={handleSend} className="chat-editor-form">
          <textarea
            placeholder="Write a message..."
            className="chat-editor-textarea"
            required
          ></textarea>
          <div className="chat-editor-actions">
            <button type="submit" className="btn btn-primary chat-send-btn" aria-label="Send message">
              <Send size={16} />
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Message;
