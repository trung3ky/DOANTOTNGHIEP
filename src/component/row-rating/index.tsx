import React from "react";
import { Star, TitleTopic } from "../../component";
import "./style.scss";

export function RowRating({ image, nameUser, star, content }: any) {
  return (
    <div className="rating-container">
      <div className="user-rating">
        <div className="image-user">
          <img src={image} alt="ImageUsser" />
        </div>
        <div className="name-user">
          <b>{nameUser}</b>
          <Star star={star} isNumberStar={false} />
          <div className="content-rating">{content}</div>
        </div>
      </div>
    </div>
  );
}
