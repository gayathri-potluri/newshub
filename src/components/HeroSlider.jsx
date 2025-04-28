"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroSlider({ slides = [] }) {
  return (
    <div className="bg-blue-700 text-white mb-8">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="headline-slider"
      >
        {slides.length > 0 ? (
          slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link href={`/news/${slide._id}`} className="block py-3 px-4 sm:py-4 sm:px-8 hover:bg-blue-600">
                <div className="container mx-auto">
                  <h3 className="text-lg font-semibold">{slide.title}</h3>
                  <p className="text-sm text-blue-100">
                    {slide.department} | {new Date(slide.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="block py-3 px-4 sm:py-4 sm:px-8">
              <div className="container mx-auto">
                <h3 className="text-lg font-semibold">Welcome to University</h3>
                <p className="text-sm text-blue-100">Explore our departments and campuses</p>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
} 