import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './page/404page';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './page/Home';
import Users from './components/Users';
import List from './page/List';
import ListOfUsers from './page/ListOfUsers';
import './style.css';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Users" element={<Users />}>
            <Route path="List" element={<List />} />
            <Route path="ListOfUsers" element={<ListOfUsers />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
