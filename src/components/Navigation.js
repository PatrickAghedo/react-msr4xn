import React from "react";
import { NavLink } from "react-router-dom";
import "../style.css";

export default function Navigation() {
  return (
    <section className="nav-container">
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "blue" }
        }
        className="bar"
        to="/Home"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "blue" }
        }
        className="bar"
        to="/Users"
      >
        Users
      </NavLink>
    </section>
  );
}
