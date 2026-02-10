"use client";
import React from "react";
import logo from "@/public/footerlogo.jpeg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white relative">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
        {/* Logo + Support */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="ASP Cranes" className="h-34 w-auto" />
          </div>

          <div className="text-sm space-y-2">
            <p className="font-semibold">Customer Support</p>
            <p className="text-gray-400">
              Write to us if you have any sales enquiry
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-8 text-lg">Quick Links</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li>Services</li>
            <li>People</li>
            <li>Middle East</li>
            <li>Policies</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-8 text-lg">Our Cranes</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li>Tower Cranes</li>
            <li>Truck-Mounted Cranes</li>
            <li>Crawler Cranes</li>
            <li>Pick & Carry Cranes</li>
            <li>Policies</li>
            <li>Policies</li>
          </ul>
        </div>
        {/* Middle Links + Contact */}
        <div className="space-y-10">
          <h3 className="font-semibold mb-8 text-lg">Services</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li>Elevate 2030</li>
            <li>Safety</li>
            <li>Projects</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* About Sanghvi */}
        <div>
          <h3 className="font-semibold mb-8 text-lg">Contact</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <div className="text-sm text-gray-300 space-y-3">
              <p>+91-20-66744700 / +966 59 705 9690</p>
              <p>enquiry@aspcranes.com</p>
            </div>
            {/* Social Icons */}
            <div className="flex gap-3">
              {["in", "f", "ig", "x", "yt"].map((icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-xs"
                >
                  {icon}
                </div>
              ))}
            </div>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 max-w-7xl mx-auto"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
        <p>
          © Copyrights {new Date().getFullYear()} Sanghvi Movers Limited. All
          Rights Reserved
        </p>

        <p className="flex gap-2">
          <span>Site Map</span>
          <span>|</span>
          <span>Privacy</span>
        </p>
      </div>
    </footer>
  );
}
