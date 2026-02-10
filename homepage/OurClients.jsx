"use client";
import Image from "next/image";
import React, { useState } from "react";

const clients = [
  {
    name: "ACC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/ACC_Limited_logo.svg",
  },
  {
    name: "Adani",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Adani_logo.svg",
  },
  {
    name: "JSW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/JSW_Group_logo.svg",
  },
  {
    name: "Reliance",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9b/Reliance_Industries_Logo.svg",
  },
  {
    name: "NCC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/NCC_Logo.svg",
  },
  {
    name: "Afcons",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/Afcons_Logo.svg",
  },
  {
    name: "Suzlon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Suzlon_logo.svg",
  },
  {
    name: "L&T",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Larsen_%26_Toubro_Logo.svg",
  },
  {
    name: "FLSmidth",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/FLSmidth_logo.svg",
  },
  {
    name: "Tata Chemicals",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Tata_Chemicals_logo.svg",
  },
  {
    name: "Vedanta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Vedanta_Logo.svg",
  },
  {
    name: "Siemens Gamesa",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Siemens_Gamesa_logo.svg",
  },
  {
    name: "BHEL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/BHEL_logo.svg",
  },
  { name: "BANDR", logo: "https://via.placeholder.com/160x80?text=BANDR" },
  {
    name: "HP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Hindustan_Petroleum_Logo.svg",
  },
  {
    name: "GAIL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/GAIL_Logo.svg",
  },
  {
    name: "Indian Oil",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Indian_Oil_Logo.svg",
  },
  {
    name: "UltraTech",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/UltraTech_Cement_Logo.svg",
  },
  {
    name: "ONGC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/ONGC_Logo.svg",
  },
  {
    name: "TATA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
  },
  {
    name: "Dalmia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Dalmia_Bharat_logo.svg",
  },
  {
    name: "Thermax",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Thermax_Logo.svg",
  },
  {
    name: "Shree Cement",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Shree_Cement_logo.svg",
  },
  {
    name: "Thyssenkrupp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Thyssenkrupp_logo.svg",
  },
];

export default function OurClients() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Heading */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">
              Trusted Partners
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-600">Clients</span>
            </h2>
          </div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Partnering with industry leaders to deliver excellence across
            sectors
          </p>
        </div>

        {/* Enhanced Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
              }}
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-orange-500/0 group-hover:from-blue-500/10 group-hover:to-orange-500/10 transition-all duration-300"></div>

              {/* Logo Container */}
              <div className="relative flex items-center justify-center h-16">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
    priority
                  className="max-h-12 max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
