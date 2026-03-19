"use client";
"use client";
import React from "react";
import Link from "next/link";
import lift from "@/public/homepage/lift.png";
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
import Button1 from "@/ui/buttons/Button1";

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
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-8">
        {/* Heading */}

        <div className="flex justify-between items-end mb-10">
          <div className="">
            <p className="text-lg inline-flex font-bold text-red-500 gap-2 border-b tracking-widest mb-4 relative">
              <Image src={lift} alt="" width={30} height={30} priority />
              <span>OUR CRANES</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Engineered Equipment For Every Lift
            </h2>
          </div>
          <Button1 button1={"See More"} link="/our-cranes" />
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
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="services-slider"
        >
          {services.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="group shadow rounded-lg m-4">
                {/* Image */}
                <div className="overflow-hidden ">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[340px] rounded-t-lg object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Title + Arrow */}
                <Link
                  href="/"
                  className="flex items-center rounded-sm justify-between p-4"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
