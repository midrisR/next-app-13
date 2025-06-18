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
      zoom={true}
      navigation={true}
      pagination={{
        type: "fraction",
      }}
      modules={[Navigation]}
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <Image
            className="h-96 overflow-hidden"
            src={`https://api.projectme.my.id/images/item/${id}/${src.name}`}
            alt={alt}
            width={500}
            height={500}
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
