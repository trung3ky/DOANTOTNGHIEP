import {
  EyeOutlined,
  HeartOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import React from "react";
import "./style.scss";

export function CartItem() {
  const image =
    "https://ninetheme.com/themes/venam/v1/wp-content/uploads/2021/05/1d20de71-9151-425f-890b-2fd4c703c430.dfbaf58eff390bef1eec9774e2e32233-600x600.jpg";
  return (
    <div className="cart-item">
      <div
        className="top-container"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="sale-contianer">
          <span className="sale">
            <a href="#a">Sale!</a>
          </span>
          <span className="sale">
            <a href="#a">4%</a>
          </span>
          <span className="sale">
            <a href="#a">Apple</a>
          </span>
        </div>
        <div className="option-popup">
          <div className="top-option">
            <Tooltip placement="top" title={"Quick view"}>
              <EyeOutlined className="icon icon-eye" />
            </Tooltip>
            <Tooltip placement="top" title={"Add to Wishlist"}>
              <HeartOutlined className="icon icon-heart" />
            </Tooltip>
          </div>
          <div className="bottom-option">
            <span>Select option</span>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="star">
          <StarFilled style={{ color: "yellow" }} />
          <StarFilled style={{ color: "yellow" }} />
          <StarFilled style={{ color: "yellow" }} />
          <StarOutlined style={{ color: "#d2d2d2" }} />
          <StarOutlined style={{ color: "#d2d2d2" }} />
        </div>
        <h5>
          <a href="#a">Apple 256GB</a>
        </h5>
        <span className="price">
          <span className="price-old">$250.00</span>
          <span className="price-new">$240.00</span>
        </span>
      </div>
    </div>
  );
}
