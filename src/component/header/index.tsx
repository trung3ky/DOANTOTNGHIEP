import React from "react";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { SearchInput } from "../search";
import "./style.scss";

export function Header() {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="logo-container">
          <img
            className="logo"
            alt="logo"
            src="https://ninetheme.com/themes/venam/v1/wp-content/uploads/2021/05/logo.png"
          />
        </div>
        <div className="container-left">
          <div className="search-container">
            <SearchInput />
          </div>
          <div className="account-container">
            <UserOutlined />
            <HeartOutlined />
            <ShoppingCartOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}
