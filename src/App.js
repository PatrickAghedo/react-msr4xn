import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./page/404page";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./page/Home";
import Users from "./components/Users";
import "./style.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Users/*" element={<Users />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
