// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 style={{color:'white'}}>Dashboard</h2>
      <ul>
        <li><a href="#Inventory">Inventory</a></li>
        <li><a href="#Orders">Orders</a></li>
        <li><a href="#Returns">Returns</a></li>
        <li><a href="#Customers">Customers</a></li>
        <li><a href="#Shipping">Shipping</a></li>
        <li><a href="#Channel">Channel</a></li>
        <li><a href="#Integrations">Integrations</a></li>
        <li><a href="#Calculators">Calculators</a></li>
        <li><a href="#Reports">Reports</a></li>
        <li><a href="#Account">Account</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
