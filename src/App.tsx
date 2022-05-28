import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Register, Home } from "./module";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Register />} />
        <Route path="/register" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
