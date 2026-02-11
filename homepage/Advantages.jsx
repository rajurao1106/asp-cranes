"use client";
import React from "react";
import hook from "@/public/homepage/hook.png";
import advantages from "@/public/homepage/advantages.jpeg";
import Image from "next/image";

export default function Advantages() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-900">
              Advantages of Renting
            </h2>
            <p className="text-lg text-gray-500 mt-2">
              through the ASP Cranes platform
            </p>

            {/* For Customers */}
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600">
                  <span className="text-black text-lg">👤</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  For Customers
                </h3>
              </div>

              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  Expedited Procurement
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  Nationwide Access to Extensive Crane Inventory
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  Competitive MOB/DEMOB Rates Comparison and Transparency
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  Unified and Simplified Proposal Tracking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  Expert Engineering and Logistics Support
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  All-in-One Rental Agreement
                </li>
              </ul>
            </div>

            {/* For Rental Company */}
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600">
                  <span className="text-black text-lg">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  For Rental Company
                </h3>
              </div>

              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  Company Account Registration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  Hassle-Free Fleet Upload and Document Sharing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  Access to Verified Customers and Rental Enquiries
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  Contract Documents and Terms & Conditions Support
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  Streamlined Rental Process and Documentation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  Boosting Opportunities, Efficiency, and Profitability
                </li>
              </ul>
            </div>

            {/* Button */}
            <div className="mt-10">
              <button className="flex items-center pl-4 justify-between border-2 border-gray-800 rounded-sm font-semibold text-gray-900 w-fit hover:bg-red-600 hover:text-white transition group">
                Register Now
                <span className="pb-2 px-4 h-full ml-4 text-4xl flex items-center justify-center bg-red-600 text-white group-hover:bg-white group-hover:text-gray-800 transition">
                  »
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end ">
            <Image
              src={advantages}
              alt="Crane Hook"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
