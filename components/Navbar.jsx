"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              priority
              className="h-14 w-auto"
            />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-black">
            <NavItem label="Home" />
            <NavItem label="About Us" />
            <NavItem label="Our Cranes" />
            <NavItem label="Services" />
            <NavItem label="Projects" />
            <NavItem label="Blog" />
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <button className="bg-red-600 hover:bg-white hover:text-black rounded-sm border border-red-600 text-white text-sm font-semibold px-3 py-2 transition">
              Request a Quote
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-3xl text-black"
            aria-label="Toggle Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden bg-gray-100 transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] border-t" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4 text-sm font-medium text-black">
          <NavItem label="Home" />
          <NavItem label="About Us" />
          <NavItem label="Our Cranes" />
          <NavItem label="Services" />
          <NavItem label="Projects" />
          <NavItem label="Blog" />

          <button className="mt-4 bg-red-600 hover:bg-white hover:text-black rounded-sm border border-red-600 text-white text-sm font-semibold px-6 py-3 transition">
            Request a Quote
          </button>
        </nav>
      </div>
    </header>
  );
}

/* NAV ITEM */
const NavItem = ({ label }) => {
  return (
    <span className="cursor-pointer hover:text-red-600 transition">
      {label}
    </span>
  );
};
