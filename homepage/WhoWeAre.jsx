"use client"

import { motion } from "framer-motion";
import whoweare1 from "@/public/homepage/whoweare1.jpg";
import whoweare2 from "@/public/homepage/whoweare2.jpg";
import whoweare3 from "@/public/homepage/whoweare3.jpg";
import Image from "next/image";

const services = [
  {
    title: "We are Leaders",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at, eos fugiat excepturi veniam vero doloribus nam alias itaque aspernatur accusantium minima nobis, suscipit exercitationem sunt enim neque dolores inventore?",
    image: whoweare1,
    top: "top-0",
    link: "/products",
  },
  {
    title: "We Are Experience",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at, eos fugiat excepturi veniam vero doloribus nam alias itaque aspernatur accusantium minima nobis, suscipit exercitationem sunt enim neque dolores inventore?",
    image: whoweare2,
    top: "top-20 max-lg:top-0",
    link: "/products",
  },
  {
    title: "We are Solutions",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at, eos fugiat excepturi veniam vero doloribus nam alias itaque aspernatur accusantium minima nobis, suscipit exercitationem sunt enim neque dolores inventore?",
    image: whoweare3,
    top: "top-0",
    link: "/products",
  },
];

export default function WhoWeAre() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-white flex flex-col justify-center items-center">
      <div className="text-center mb-14">
        {/* <p className="text-sm text-gray-500">We are More than</p> */}
        <h2 className="text-3xl font-bold text-red-600">WHO WE ARE</h2>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={card}
            className={`group relative overflow-hidden shadow-lg`}
          >
            {/* Background Image */}
            <Image
              src={service.image}
              alt={service.title}
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Default Bottom Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t to-black/10 from-black/80 text-white p-5 transition-all duration-500 group-hover:opacity-0">
              <h3 className="text-4xl font-semibold mb-2">{service.title}</h3>
              <p>Read More »</p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-linear-to-t to-black/0 from-black/90 text-white p-6 translate-y-full group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end">
              <div>
                <h3 className="text-4xl font-bold mt-3">{service.title}</h3>
                <p className="text-sm mt-3 leading-relaxed">{service.desc}</p>
                <a
                  href={service.link}
                  className="mt-5 hover:text-red-600 inline-flex items-center gap-2 font-semibold"
                >
                  Read More »
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
