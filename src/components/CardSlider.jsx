import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Parallax } from "swiper/modules";

const CardSlider = () => {
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

  const containerRef = useRef(null);

  const [fullWith, setFullWith] = useState(0);
  const [containerWith, setContainerWith] = useState(0);

  // main screen With ==============
  useEffect(() => {
    const width = () => {
      setFullWith(window.innerWidth);
    };
    width();
    window.addEventListener("resize", width);
    return () => window.removeEventListener("resize", width);
  }, []);
  //  console.log("main screen with", fullWith);

  // container screen with ==============
  useEffect(() => {
    if (containerRef.current) {
      setContainerWith(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWith(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //  console.log("container screen with", containerWith);

  // onse side with =============
  const paddingWith = (fullWith - containerWith) / 2;
  //   console.log('onse side with', paddingWith);

  return (
    <section className='bg-[#221f1f] py-10 overflow-hidden"'>
      <div ref={containerRef} className="w-container mx-auto">
        <h1 className="text-5xl text-white text-center font-medium">Card Slider</h1>
        <div className=" relative">
          <div className="my-10 flex gap-x-5 absolute top-[-5px] left-[50%]">
            <button className="swiper-button-next"></button>
            <button className="swiper-button-prev"></button>
          </div>
        </div>
      </div>
      <div className="mt-[90px]">
        <Swiper
          //  rewind={true}
          slidesPerView={4.5}
          initialSlide={0}
          spaceBetween={30}
          style={{
            paddingLeft: paddingWith,
          }}
          loop={false}
          //  centeredSlides={false}
          //  grabCursor={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation, Pagination, Parallax]}
          className=""
        >
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              className="h-[380px] w-[380px] overflow-hidden "
            >
              <div className="h-[450px] w-[380px] overflow-hidden ">
                <img className="w-full h-full object-cover" src={item.img} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CardSlider;
