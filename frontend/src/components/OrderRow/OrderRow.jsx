import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import './OrderRow.css';

const OrderRow = ({ order }) => {
  if (!order) return null;

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'badge-success';
      case 'in progress':
        return 'badge-info';
      case 'pending':
        return 'badge-warning';
      default:
        return 'badge-muted';
    }
  };

  return (
    <tr className="order-row">
      <td>
        <img src={order.img} alt={order.title} className="order-thumbnail" />
      </td>
      <td>
        <Link to={`/gig/${order.gigId}`} className="order-title-link">
          {order.title}
        </Link>
      </td>
      <td>
        <span className="order-price">${order.price.toFixed(2)}</span>
      </td>
      <td>
        <span className="order-buyer">{order.buyer}</span>
      </td>
      <td>
        <span className={`badge ${getStatusBadgeClass(order.status)}`}>
          {order.status}
        </span>
      </td>
      <td>
        <span className="order-delivery">{order.deliveryDate}</span>
      </td>
      <td>
        <Link to={`/message/${order.contactId}`} className="order-contact-btn" title="Contact Buyer">
          <MessageSquare size={16} />
        </Link>
      </td>
    </tr>
  );
};

export default OrderRow;
