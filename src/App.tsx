import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Register } from "./module/account";
import "./App.scss";

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/login" className="nav-link">
          Đăng nhập
        </Link>
      </li>
      <li>
        <Link to="/register" className="nav-link">
          Đăng ký
        </Link>
      </li>
    </ul>
  );
};

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
