import { EyeOutlined, HeartOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../../model";
import { Star } from "../../../../component";
import "./style.scss";

export function CartItem({ product }: { product: Product }) {
  const { name, image, price, id, rating } = product;
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
          <Star star={Number(rating)} isNumberStar={false} />
        </div>
        <h5>
          <Link to={`/product/${id}`}>{name}</Link>
        </h5>
        <span className="price">
          <span className="price-old">$240.00</span>
          <span className="price-new">${price}.00</span>
        </span>
      </div>
    </div>
  );
}
