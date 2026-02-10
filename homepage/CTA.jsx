"use client";
import React from "react";
import Image from "next/image";
import hero from "@/public/homepage/cta2.png";

export default function CTA() {
  return (
    <section className="w-full py-12">
      <div className="max-w-7xl relative mx-auto px-4 sm:px-6">
        <div className=" bg-gray-100 rounded-xl overflow-hidden">
          <div className="flex flex-col-reverse lg:flex-row items-center min-h-[360px]">
            
            {/* LEFT CONTENT */}
            <div className="w-full lg:w-1/2 p-6 sm:p-10 z-10">
              <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
                Need to rent a crane?
              </h2>

              <p className="mb-6 text-gray-700 max-w-xl">
                Tell us about your project requirements, and our team will
                provide the most suitable equipment and pricing.
              </p>

              <button className="flex items-center pl-4 bg-white justify-between border-2 border-gray-800 rounded-sm font-semibold text-gray-900 w-fit hover:bg-red-600 hover:text-white transition group">
                Register Now
                <span className="pb-2 px-4 ml-4 text-4xl flex items-center justify-center bg-red-600 text-white group-hover:bg-white group-hover:text-gray-800 transition">
                  »
                </span>
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="absolute w-full lg:w-1/2 -top-10 lg:right-0 h-[240px] sm:h-[300px] lg:h-full">
              <Image
                src={hero}
                alt="Crane Truck"
                
                className="object-contain lg:object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
