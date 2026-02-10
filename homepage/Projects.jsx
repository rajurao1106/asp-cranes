"use client";

import { useState } from "react";
import Image from "next/image";

const filters = [
  "Architecture",
  "Gardening",
  "Interior",
  "Landscaping",
  "Renovation",
];

const projects = [
  { id: 1, category: "Architecture", image: "/projects/p1.jpg" },
  { id: 2, category: "Architecture", image: "/projects/p2.jpg" },
  { id: 3, category: "Interior", image: "/projects/p3.jpg" },
  { id: 4, category: "Landscaping", image: "/projects/p4.jpg" },
  { id: 5, category: "Architecture", image: "/projects/p5.jpg" },
  { id: 6, category: "Renovation", image: "/projects/p6.jpg" },
];

export default function ProjectsSection() {
  const [active, setActive] = useState("Architecture");

  const filteredProjects = projects.filter(
    (p) => p.category === active
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-wide">
            Our <span className="text-red-600">Projects</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-8 mb-14">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`text-sm uppercase font-semibold transition ${
                active === item
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-600 hover:text-red-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative w-full h-72 overflow-hidden group"
            >
              <Image
                src={project.image}
                alt="Project"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center w-full justify-center items-center flex mt-16">
          <button className="flex items-center bg-white pl-4 justify-between border border-gray-800 rounded-sm font-semibold text-gray-900 w-fit hover:bg-red-600 hover:text-white transition group">
              Load More
              <span className="pb-2 px-4 h-full text-4xl flex ml-4 items-center justify-center rounded-r-sm bg-red-600 text-white group-hover:bg-white group-hover:text-gray-800 transition">
                »
              </span>
            </button>
        </div>
      </div>
    </section>
  );
}
