import React, { useEffect, useState } from "react";
import { Footer, Header, Menu } from "../../component";
import { CarouselProduct, CartItem, ProductListByCategory } from "./component";
import { boxList, boxListDiscount,Product } from "../../model";
import { TitleTopic } from "../../component";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.scss";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

export function Home() {
  const [data,setData] = useState<Product[]>([]);
  useEffect(()=>{
    fetch('http://localhost:3001/product')
    .then(response => response.json())
    .then(dataPro => setData(dataPro));
  },[])
  return (
    <div className="home-container">
      <Header />
      <Menu />
      <CarouselProduct />
      <div className="body-container">
        <div className="box-container">
          {boxList.map((box) => {
            return (
              <div
                className="box-item"
                style={{ backgroundImage: `url(${box.image})` }}
              >
                <h6 className="title">{box.title}</h6>
                <h4 className="name">{box.name}</h4>
                <div className="sub">{box.sub}</div>
                <div className="price">
                  <span className="price-new">{box.priceNew}</span>
                  <span className="price-old">{box.priceOld}</span>
                </div>
              </div>
            );
          })}
        </div>
        <TitleTopic title="Products Of The Week" />
        <>
          <Swiper
            slidesPerView={5}
            spaceBetween={8}
            slidesPerGroup={5}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            { data.map((item,index) => {
              if(index > 10) {
                return;
              }
              return (
                <SwiperSlide key={item.id}>
                  <CartItem product={item}  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
        <div className="box-container discount">
          {boxListDiscount.map((box) => {
            return (
              <div
                className="box-item"
                style={{ backgroundImage: `url(${box.image})` }}
              >
                <div className="sub">{box.sub}</div>
                <h4 className="name">{box.name}</h4>
                <Button className="button">
                  Shop Now <ArrowRightOutlined />
                </Button>
              </div>
            );
          })}
        </div>
        <TitleTopic title="All Categories" />
        <>
          <Swiper
            slidesPerView={5}
            spaceBetween={8}
            slidesPerGroup={5}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {data.map((item,index) => {
              if(index > 10) {
                return;
              }
              return (
                <SwiperSlide key={item.id}>
                  <CartItem product={item}/>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
        {/* <ProductListByCategory /> */}
        <TitleTopic title="All Products" />
        <div className="list-product">
        { data.map(item => {
          return <CartItem product={item} />
        })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
