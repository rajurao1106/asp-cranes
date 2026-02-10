"use client";
import React from "react";
import about from "@/public/homepage/about.png";
import Image from "next/image";
export default function About() {
  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Content */}
        <div className="flex max-lg:flex-col gap-10 items-start">
          {/* Left Crane Image */}
          <div className="relative w-full h-full">
            <Image
              src={about} // replace with crane image
              alt="Crane"
              className="w-full"

            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-sm font-semibold text-orange-500 border-b tracking-widest mb-4 relative inline-block">
              ABOUT US
            </p>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Our Commitment To 
              Excellence In Construction 
              And Design
            </h2>

            <p className="text-gray-500 leading-relaxed mb-4">
              ASP Cranes (Aadishakti Projects) is a professionally managed crane
              rental company headquartered in Raipur, Chhattisgarh. We
              specialize in providing advanced lifting solutions using a diverse
              fleet of cranes and access equipment, supported by skilled
              manpower and strict safety protocols.
            </p>

            <p className="text-gray-500 leading-relaxed mb-4">
              We operate across India and cater to infrastructure developers,
              EPC contractors, power plants, steel plants, cement industries,
              and manufacturing units.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Founded with a vision to support India’s growing infrastructure
              sector, ASP Cranes is part of the Rajdev Group — a diversified
              business group with experience across logistics, construction
              support, and heavy engineering services. Our strength lies in
              modern equipment, technical expertise, and a customer-first
              approach.
            </p>

            <button className="flex items-center pl-6 justify-between  border border-gray-800 rounded-sm font-semibold text-gray-900 w-fit hover:bg-red-600 hover:text-white transition group">
              About Us
              <span className="pb-2 px-4 h-full ml-6 text-4xl flex items-center justify-center bg-red-600 text-white group-hover:bg-white group-hover:text-gray-800 transition">
                »
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Image Strip */}
      {/* <div className="relative mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="relative rounded-t-[40px] overflow-hidden">
            <img
              src="/construction-team.jpg" // replace image
              alt="Construction Team"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
}
