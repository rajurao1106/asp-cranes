"use client";

import React from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import cta3 from "@/public/homepage/cta3.jpg";

const Contact = () => {
  return (
    <section className="relative w-full flex items-center bg-white overflow-hidden min-h-[100vh] md:min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={cta3}
          fill
          priority
          alt="Construction worker"
          className="object-cover object-top"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/30 via-white/90 to-white md:from-transparent md:via-white/60 md:to-white" />
      </div>

      {/* Form Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 flex justify-center md:justify-end">
        <div className="w-full max-w-xl bg-white/95 md:bg-transparent p-6 sm:p-8 rounded-xl md:rounded-none shadow-lg md:shadow-none">
          
          {/* Header */}
          <div className="mb-8">
            <button className="flex items-center text-orange-600 font-bold text-xs tracking-widest uppercase mb-4 group">
              Get Free Quote
              <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Have a project in mind?
            </h2>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-gray-100 focus:ring-2 focus:ring-orange-500 outline-none text-gray-700"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 bg-gray-100 focus:ring-2 focus:ring-orange-500 outline-none text-gray-700"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 bg-gray-100 focus:ring-2 focus:ring-orange-500 outline-none text-gray-700"
              />

              <div className="relative">
                <select className="w-full p-4 bg-gray-100 focus:ring-2 focus:ring-orange-500 outline-none text-gray-500 appearance-none cursor-pointer">
                  <option>Your Inquiry</option>
                  <option>Construction</option>
                  <option>Heavy Cranes</option>
                  <option>Consulting</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <textarea
              placeholder="Message..."
              rows={5}
              className="w-full p-4 bg-gray-100 focus:ring-2 focus:ring-orange-500 outline-none text-gray-700 resize-none"
            />

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 px-8 flex items-center justify-center uppercase tracking-widest text-sm transition-colors group"
            >
              Submit Now
              <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;