import React from "react";
import { DownOutlined, UnorderedListOutlined } from "@ant-design/icons";
import "./style.scss";

export function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-wrapper">
        <div className="all-category-btn">
          <UnorderedListOutlined />
          <span className="text">All categories</span>
          <DownOutlined />
        </div>
        <ul className="menu-list">
          <li className="menu-item">
            <span className="text">Home</span>
            <DownOutlined />
          </li>
          <li className="menu-item">
            <span className="text">Categories</span>
            <DownOutlined />
          </li>
          <li className="menu-item">
            <span className="text">Shop</span>
            <DownOutlined />
          </li>
          <li className="menu-item">
            <span className="text">Page</span>
            <DownOutlined />
          </li>
          <li className="menu-item">
            <span className="text">Special</span>
            <DownOutlined />
          </li>
          <li className="menu-item">
            <span className="text">Store list</span>
            <DownOutlined />
          </li>
          <li className="menu-item">
            <span className="text">Contact</span>
            <DownOutlined />
          </li>
        </ul>
      </div>
    </div>
  );
}
