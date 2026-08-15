import React from 'react';
import { orders } from '../../data/orders';
import OrderRow from '../../components/OrderRow/OrderRow';
import './Orders.css';

const Orders = () => {
  return (
    <div className="orders-page container">
      <div className="orders-page-header">
        <h1 className="orders-page-title">Orders</h1>
        <p className="orders-page-subtitle">Track and manage your active and completed gig orders</p>
      </div>

      <div className="orders-table-container">
        {orders.length === 0 ? (
          <div className="orders-empty-state">
            <p>No orders found.</p>
          </div>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Buyer</th>
                <th>Status</th>
                <th>Delivery Date</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <OrderRow key={order.id} order={order} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Orders;
