import React, { Components } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import './style.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
