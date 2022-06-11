import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star, TitleTopic } from "../../component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { productDetail, productRecommended } from "../../access";

import { Product } from "../../model";
import "./style.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CartItem } from "../home/component";
import { RowRating } from "../../component";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
export function ProductDetail() {
  const param = useParams();

  const [data, setData] = useState<Product>();
  const [dataRecommend, setDataRecommend] = useState<Product[]>([]);
  const [dataRating, setDataRating] = useState<any>([]);

  useEffect(() => {
    fetch(productDetail(param?.id))
      .then((response) => response.json())
      .then((dataPro) => setData(dataPro));
  }, [param.id]);

  useEffect(() => {
    fetch(
      `https://357a-2402-800-620e-2000-9a0-faa1-dd06-a24c.ap.ngrok.io/recomender&id=${param.id}`
    )
      .then((response1) => response1.json())
      .then((row) => setDataRecommend(row));
  }, [param.id]);

  useEffect(() => {
    fetch(
      `https://4ff5-2402-800-620e-2000-9a0-faa1-dd06-a24c.ap.ngrok.io/rating&id=${param.id}`
    )
      .then((response2) => response2.json())
      .then((rating) => setDataRating(rating));
  }, [param.id]);

  return (
    <div className="product">
      {data && (
        <>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>{data.name}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="product-wrap">
            <div className="product__image">
              <img src={data.image} alt="product" />
            </div>
            <div className="product__infor">
              <span className="infor__name">{data.name}</span>
              <div className="infor__review">
                {/* <Star star={Number(product?.star)} /> */}
                <div className="number--review">
                  <span>{dataRating.length}</span>&nbsp;
                  <span>Đánh giá</span>
                </div>
                <div className="number--buy">
                  <span>{dataRating.length}</span>&nbsp;
                  <span>Đã bán</span>
                </div>
              </div>
              <div className="infor__price">
                {/* <span className="price--min"> */}
                {/* {`${formatPrice(Number(product?.['price-min']))}`} */}
                {/* {data.price} */}
                {/* </span> */}
                {/* <span>&nbsp;-&nbsp;</span> */}
                <span className="price--max">
                  {/* {`${formatPrice(Number(product?.['price-max']))}`} */}$
                  {data.price}.00
                </span>
              </div>
              <div className="infor__quantity">
                <span>Số lượng</span>
                <div className="input">
                  <div>
                    <button className="btn-quantity">-</button>
                    <input
                      value={1}
                      type="text"
                      role="spinbutton"
                      // max={data.quantity}
                      readOnly
                    />
                    <button className="btn-quantity">+</button>
                  </div>
                  <span className="overflow">
                    {data.quanlity} sản phẩm có sẵn
                  </span>
                </div>
              </div>
              <div className="infor__wraper-button">
                <div className="button__add">
                  <i className="fas fa-cart-plus" />
                  <span>Thêm vào giỏ hàng</span>
                </div>
                <div className="button__buy">Mua ngay</div>
                {/* {loading && <LoaderFullScreen />} */}
              </div>
            </div>
          </div>
          <div className="product-desc">
            {/* <p>{data.description}</p> */}
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Odio iusto cupiditate, iure rerum optio laborum? Quidem,
            possimus. Dicta, doloribus iusto obcaecati ex inventore perferendis
            accusamus architecto animi minima blanditiis placeat. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. In facilis vel
            aspernatur recusandae tempora ad architecto beatae veritatis sed
            velit cupiditate, a, voluptatibus, laudantium neque necessitatibus
            dolor voluptate maxime sit? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Voluptas optio perspiciatis laboriosam quasi
            reiciendis numquam et. Facilis, voluptatem obcaecati dicta quasi
            delectus cupiditate! Consequatur commodi ipsam ab, praesentium modi
            veritatis? Magnam atque sint, recusandae quo qui temporibus, iure
            nobis dolorum, error dolor minus repellat quisquam. Officiis
            architecto beatae dolore nostrum non assumenda, possimus ex, error
            itaque obcaecati, recusandae quibusdam repudiandae. Vel repellendus,
            maiores sunt aut voluptatum veritatis praesentium at distinctio
            obcaecati temporibus eaque asperiores. In, animi? Consequuntur, est,
            officia nostrum eveniet, possimus nemo quisquam adipisci distinctio
            labore esse quia aut. Magnam placeat adipisci debitis saepe non
            accusamus officiis? Totam quia quidem quaerat deleniti labore esse
            odit, aliquam repudiandae, magni deserunt accusamus consequuntur
            fuga iusto adipisci. Veritatis doloribus eos facilis nisi! Commodi
            beatae, itaque fuga iste dignissimos minima ullam ipsam magni amet
            laboriosam suscipit, recusandae quasi nostrum unde est. Fuga
            consequatur doloribus mollitia quia cupiditate eveniet fugiat atque
            quas porro numquam. Pariatur laborum illum ipsum impedit, sequi
            temporibus porro dignissimos quod cum quam in ipsam eos accusantium
            fugiat aperiam consequatur expedita modi aliquid debitis, laboriosam
            repellat. Blanditiis possimus distinctio eum. Sed. Saepe at enim
            tenetur obcaecati dolore atque nisi eius repellat suscipit, animi
            quam expedita modi placeat veniam quos aliquam totam beatae mollitia
            quisquam ullam corrupti incidunt sit quae harum. Soluta! Nemo eos
            cumque, officiis tempora iusto aliquid impedit ducimus doloremque,
            molestiae, illo voluptatibus! Veniam, esse ut. Reiciendis doloremque
            doloribus animi, enim, officiis molestias, quisquam soluta atque
            placeat cum iure veniam! Et iste porro ad veniam soluta quae
            doloremque exercitationem est sit consequatur necessitatibus,
            perspiciatis voluptates consectetur labore sapiente ut itaque
            similique rerum voluptatibus quia nobis, vel veritatis maxime odit?
            Pariatur? Exercitationem porro, sint neque dolores odio aut hic,
            dignissimos pariatur distinctio id quo ex vitae consectetur,
            repudiandae accusamus quas officia ratione rerum nam cumque
            blanditiis totam? Quae ipsa at nemo.
          </div>
        </>
      )}
      <TitleTopic title="Rating Of Product" />
      {dataRating.length === 0 ? (
        <h3>Sản phẩm không có rating</h3>
      ) : (
        dataRating.map((item: any) => {
          return (
            <RowRating
              image={item.avatar}
              nameUser={item.last_name + " " + item.first_name}
              star={item.rating}
              content={item.content}
            />
          );
        })
      )}
      <TitleTopic title="Products Recomender" />
      <>
        <Swiper
          slidesPerView={5}
          spaceBetween={8}
          slidesPerGroup={5}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {dataRecommend.map((item, index) => {
            if (index > 10) {
              return;
            }
            return (
              <SwiperSlide key={item.id}>
                <CartItem product={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </div>
  );
}
