"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../style.css";
export default function BannerSlider({ images }) {
  return (
    <Swiper
      zoom={true}
      navigation={true}
      pagination={{
        type: "fraction",
      }}
      modules={[Navigation]}
    >
      {images.map(({ image, id, name }) => (
        <SwiperSlide key={id}>
          <img
            className="overflow-hidden"
            src={`http://localhost:5000/images/banner/${id}/${image}`}
            alt={name}
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
