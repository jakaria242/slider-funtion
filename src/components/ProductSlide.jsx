import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductSlide = () => {
  const data = [
    {
      id: 0,
      img: "https://swiperjs.com/demos/images/nature-1.jpg",
    },
    {
      id: 1,
      img: "https://swiperjs.com/demos/images/nature-2.jpg",
    },
    {
      id: 2,
      img: "https://swiperjs.com/demos/images/nature-3.jpg",
    },
    {
      id: 3,
      img: "https://swiperjs.com/demos/images/nature-4.jpg",
    },
    {
      id: 4,
      img: "https://swiperjs.com/demos/images/nature-5.jpg",
    },
    {
      id: 5,
      img: "https://swiperjs.com/demos/images/nature-6.jpg",
    },
    {
      id: 6,
      img: "https://swiperjs.com/demos/images/nature-7.jpg",
    },
    {
      id: 7,
      img: "https://swiperjs.com/demos/images/nature-8.jpg",
    },
    {
      id: 8,
      img: "https://swiperjs.com/demos/images/nature-10.jpg",
    },
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="bg-[#221f1f] py-10">
      <div className="w-container mx-auto">
        <h1 className="text-5xl font-medium text-white text-center mb-8">Producd Slider</h1>
        <div className="flex gap-x-[30px] justify-between">
          <div className="h-[690px] w-[997px]">
            <Swiper
              spaceBetween={0}
              // thumbs={{ swiper: thumbsSwiper }}
              thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
              modules={[FreeMode, Navigation, Thumbs]}
              className="w-full h-full"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <img className="w-full h-full object-cover" src={item.img} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex flex-col gap-[25px]">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={24}
              slidesPerView={4.2}
              direction={"vertical"}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="h-[690px] w-[143px]"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.img} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlide;
