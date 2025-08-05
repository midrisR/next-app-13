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
      {images
        .filter(({ published }) => published)
        .map(({ image, id, name }) => (
          <SwiperSlide key={id}>
            <img
              className="overflow-hidden"
              src={`https://api.projectme.my.id/images/banner/${id}/${image}`}
              alt={name}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
