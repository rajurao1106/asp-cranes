import React from "react";
import lift from "@/public/homepage/lift.png";
import whoweare1 from "@/public/homepage/whoweare1.jpg";
import Image from "next/image";
import about from "@/public/homepage/about.png";

export default function About2() {
  return (
    <section className="flex justify-center items-center ">
      {/* <div className="max-w-7xl w-full flex h-screen">
        <div className="">
          <Image src={about} alt="" width={1000} height={1000} priority />
        </div>
       <div className="flex gap-10">
         <div className="">
          <Image src={whoweare1} alt="" width={1000} height={1000} priority />
        </div>
      
        <div>
          <p className="text-lg flex font-semibold text-red-500 gap-2 border-b tracking-widest mb-4 relative">
            <Image src={lift} alt="" width={30} height={30} priority />{" "}
            <span>ABOUT US</span>
          </p>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Our Commitment To Excellence In Construction And Design
          </h2>

          <p className="text-gray-500 leading-relaxed mb-4">
            ASP Cranes (Aadishakti Projects) is a professionally managed crane
            rental company headquartered in Raipur, Chhattisgarh. We specialize
            in providing advanced lifting solutions using a diverse fleet of
            cranes and access equipment, supported by skilled manpower and
            strict safety protocols.
          </p>

          <p className="text-gray-500 leading-relaxed mb-4">
            We operate across India and cater to infrastructure developers, EPC
            contractors, power plants, steel plants, cement industries, and
            manufacturing units.
          </p>

          <button className="flex items-center pl-6 justify-between  border border-gray-800 rounded-sm font-semibold text-gray-900 w-fit hover:bg-red-600 hover:text-white transition group">
            About Us
            <span className="pb-2 px-4 h-full ml-6 text-4xl flex items-center justify-center bg-red-600 text-white group-hover:bg-white group-hover:text-gray-800 transition">
              »
            </span>
          </button>
        </div>
       </div>
      </div> */}
    </section>
  );
}
