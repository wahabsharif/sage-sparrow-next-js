import useActive from "@/hooks/useActive";
import React from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleBanner from "./SingleBanner";

SwiperCore.use([EffectFade, Pagination, Navigation, Autoplay]);

const options = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  pagination: {
    el: "#main-slider-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
};

const Banner = ({
  sliders = [],
  className = "",
  navClassName = "main-slider__nav",
  showShape = false,
  id = "",
}) => {
  const ref = useActive(id);

  return (
    <section ref={ref} className={`main-slider ${className}`} id={id}>
      <Swiper {...options}>
        <div className="swiper-wrapper">
          {sliders.map((slider) => (
            <SwiperSlide key={slider.id}>
              <SingleBanner slider={slider} showShape={showShape} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Banner;
