import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export default function Users() {
  return (
    <section className="users-container">
      <h1>Users</h1>
      <p>This is the Users Page</p>
      <Navigation />
    </section>
  );
}
