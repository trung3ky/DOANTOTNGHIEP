import React from "react";
import { Carousel } from "antd";
import { carouselList } from "../../../../model";
import "./style.scss";
export function CarouselProduct() {
  return (
    <Carousel className="carousel" autoplay arrows>
      {carouselList.map((carousel) => {
        return (
          <div className="carousel-item">
            <img className="image" src={carousel.image} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
}
