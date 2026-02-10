"use client";
"use client";
import React from "react";
import crane1 from "@/public/homepage/crane1.jpg";
import crane2 from "@/public/homepage/hero1.png";
import crane3 from "@/public/homepage/crane3.jpg";
import crane4 from "@/public/homepage/crane4.jpg";
import crane5 from "@/public/homepage/crane5.jpg";
import crane6 from "@/public/homepage/crane6.jpg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function WhatWeOffer() {
  const services = [
    { title: "Tower Cranes", img: crane1 },
    { title: "Truck-Mounted Cranes", img: crane2 },
    { title: "Crawler Cranes", img: crane3 },
    { title: "Pick & Carry Cranes", img: crane4 },
    { title: "Aerial Work Platforms (AWP)", img: crane5 },

    { title: "Multi-Axle Platform Trailers", img: crane6 },
  ];

  return (
    <section className="w-full bg-white pb-24">
      <div className="max-w-6xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-red-500 tracking-widest mb-3">
            WHAT WE OFFER
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Provide Quality Services
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          loop={true} // ♾ infinite
          autoplay={{
            delay: 2500, // ⏱ auto slide
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="services-slider"
        >
          {services.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="group">
                {/* Image */}
                <div className="overflow-hidden rounded-sm mb-6">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[340px] object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Title + Arrow */}
                <div className="flex items-center border rounded-sm justify-between pl-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <div className="w-10 h-10 bg-red-600 text-3xl pb-2 rounded-r-sm text-white flex items-center justify-center">
                    »
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
