// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
import {
  Navigation,
  Thumbs,
  Pagination,
  Autoplay,
  Grid,
  EffectFade,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Slider = ({ slides }) => {
  return (
    <Swiper
      loop={false}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      autoplay={false}
      slidesPerView={4}
      spaceBetween={12}
      mousewheelControl={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      // navigation={{
      //   nextEl: ".destination-button-next",
      //   prevEl: ".destination-button-prev",
      // }}
      breakpoints={{
        0: {
          slidesPerView: 1.2,
        },
        480: {
          slidesPerView: 1.6,
        },
        580: {
          slidesPerView: 1.6,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        840: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img src={slide.image} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>


  );
};
export default Slider;
