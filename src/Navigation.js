import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export default function Navigation() {
  return (
    <section className="nav-container">
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: 'white' } : { color: 'black' }
        }
        className="nav"
        to="/"
      >
        Home Page
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: 'white' } : { color: 'black' }
        }
        className="nav"
        to="/users"
      >
        Users
      </NavLink>
    </section>
  );
}
