import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Navigation from './Navigation';
import Home from './Pages/Home';
import Users from './Pages/Users';

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
