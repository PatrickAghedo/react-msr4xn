import React from 'react';
import Navigation from './Navigation';
import './style.css';

export default function Home() {
  return (
    <section className="home-container">
      <h1>Home Page</h1>
      <p>This is the Home Page</p>
      <Navigation />
    </section>
  );
}