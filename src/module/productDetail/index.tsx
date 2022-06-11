import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TitleTopic } from "../../component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import { Product } from "../../model";
import "./style.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CartItem } from "../home/component";
export function ProductDetail() {
    const param = useParams();
    console.log(param.id);
    const [data, setData] = useState<Product>();
    const [dataRecommend, setDataRecommend] = useState<Product[]>([]);
    useEffect(() => {
        fetch(`http://localhost:3001/productDetail&id=${param.id}`)
            .then(response => response.json())
            .then(dataPro => setData(dataPro));
    }, [param.id])
    useEffect(() => {
        fetch(`http://localhost:3002/recomender&id=${param.id}`)
            .then(response => response.json())
            .then(row => setDataRecommend(row));
    }, [param.id])
    return <div className='product'>
        { data && <>
        <div className="product-wrap">
        <div className='product__image'>
                <img src={data.image} alt='product' />
            </div>
            <div className='product__infor'>
                <span className='infor__name'>{data.name}</span>
                <div className='infor__review'>
                    {/* <Star star={Number(product?.star)} /> */}
                    <div className='number--review'>
                        <span>{1123}</span>&nbsp;
                        <span>Đánh giá</span>
                    </div>
                    <div className='number--buy'>
                        <span>{21231}</span>&nbsp;
                        <span>Đã bán</span>
                    </div>
                </div>
                <div className='infor__price'>
                    <span className='price--min'>
                        {/* {`${formatPrice(Number(product?.['price-min']))}`} */}
                        {data.price}
                    </span>
                    <span>&nbsp;-&nbsp;</span>
                    <span className='price--max'>
                        {/* {`${formatPrice(Number(product?.['price-max']))}`} */}
                        {data.price}
                    </span>
                </div>
                {/* <div className='infor__color'>
                    <span>Màu</span>
                    <div className='color__list'>
                        <div key={1}
                            // className={classNames('color__item')}
                        // onClick={() => setColor(item)}
                        >
                            tím
                        </div>
                    </div>
                </div> */}
                {/* <div className='infor__size'>
                    <span>Size</span>
                    <div className='size__list'>

                        <div key={1}
                            // className={classNames('size__item')}
                        // onClick={() => setSize(item)}
                        >
                            xl
                        </div>
                    </div>
                </div> */}
                <div className='infor__quantity'>
                    <span>Số lượng</span>
                    <div className='input'>
                        <div>
                            <button className='btn-quantity'
                            >
                                -
                            </button>
                            <input
                                value={1}
                                type='text'
                                role='spinbutton'
                                // max={data.quantity}
                                readOnly
                            />
                            <button
                                className='btn-quantity'
                            >
                                +
                            </button>
                        </div>
                        <span className='overflow'>{data.quanlity} sản phẩm có sẵn</span>
                    </div>
                </div>
                <div className='infor__wraper-button'>
                    <div
                        className='button__add'
                    >
                        <i className='fas fa-cart-plus' />
                        <span>Thêm vào giỏ hàng</span>
                    </div>
                    <div
                        className='button__buy'
                    >
                        Mua ngay
                    </div>
                    {/* {loading && <LoaderFullScreen />} */}
                </div>
            </div>
        </div>
            <div className="product-desc">
                {/* <p>{data.description}</p> */}
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iusto cupiditate, iure rerum optio laborum? Quidem, possimus. Dicta, doloribus iusto obcaecati ex inventore perferendis accusamus architecto animi minima blanditiis placeat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In facilis vel aspernatur recusandae tempora ad architecto beatae veritatis sed velit cupiditate, a, voluptatibus, laudantium neque necessitatibus dolor voluptate maxime sit?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas optio perspiciatis laboriosam quasi reiciendis numquam et. Facilis, voluptatem obcaecati dicta quasi delectus cupiditate! Consequatur commodi ipsam ab, praesentium modi veritatis?
                Magnam atque sint, recusandae quo qui temporibus, iure nobis dolorum, error dolor minus repellat quisquam. Officiis architecto beatae dolore nostrum non assumenda, possimus ex, error itaque obcaecati, recusandae quibusdam repudiandae.
                Vel repellendus, maiores sunt aut voluptatum veritatis praesentium at distinctio obcaecati temporibus eaque asperiores. In, animi? Consequuntur, est, officia nostrum eveniet, possimus nemo quisquam adipisci distinctio labore esse quia aut.
                Magnam placeat adipisci debitis saepe non accusamus officiis? Totam quia quidem quaerat deleniti labore esse odit, aliquam repudiandae, magni deserunt accusamus consequuntur fuga iusto adipisci. Veritatis doloribus eos facilis nisi!
                Commodi beatae, itaque fuga iste dignissimos minima ullam ipsam magni amet laboriosam suscipit, recusandae quasi nostrum unde est. Fuga consequatur doloribus mollitia quia cupiditate eveniet fugiat atque quas porro numquam.
                Pariatur laborum illum ipsum impedit, sequi temporibus porro dignissimos quod cum quam in ipsam eos accusantium fugiat aperiam consequatur expedita modi aliquid debitis, laboriosam repellat. Blanditiis possimus distinctio eum. Sed.
                Saepe at enim tenetur obcaecati dolore atque nisi eius repellat suscipit, animi quam expedita modi placeat veniam quos aliquam totam beatae mollitia quisquam ullam corrupti incidunt sit quae harum. Soluta!
                Nemo eos cumque, officiis tempora iusto aliquid impedit ducimus doloremque, molestiae, illo voluptatibus! Veniam, esse ut. Reiciendis doloremque doloribus animi, enim, officiis molestias, quisquam soluta atque placeat cum iure veniam!
                Et iste porro ad veniam soluta quae doloremque exercitationem est sit consequatur necessitatibus, perspiciatis voluptates consectetur labore sapiente ut itaque similique rerum voluptatibus quia nobis, vel veritatis maxime odit? Pariatur?
                Exercitationem porro, sint neque dolores odio aut hic, dignissimos pariatur distinctio id quo ex vitae consectetur, repudiandae accusamus quas officia ratione rerum nam cumque blanditiis totam? Quae ipsa at nemo.
            </div>
            </>
        }
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
            { dataRecommend.map((item,index) => {
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
    </div>
}