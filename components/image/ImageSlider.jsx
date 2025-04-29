"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "../style.css";
export default function ImageSlider({ images, id, alt }) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
    >
      {images.map((src, i) => (
        <SwiperSlide key={i} style={{}}>
          <Image
            src={`http://localhost:5000/images/item/${id}/${src.name}`}
            alt={alt}
            width={400}
            height={400}
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
