"use client";

import { useState } from "react";
import Image from "next/image";

const cranes = [
  {
    id: 1,
    name: "Tower Crane",
    description: "Tower cranes provide exceptional height and lifting capacity for high-rise and large-scale construction projects.",
    specs: {
      "Model/Type": "Hammerhead / Luffing",
      "Lifting Capacity": "350 MT",
      "Unladen Weight": "70.7 MT",
      "Main Boom Length": "63 Mtr",
      "Jib Length": "30 Mtr",
      "Counter Weight": "100 MT",
    },
  },
  {
    id: 2,
    name: "Truck-Mounted Crane",
    description: "Highly mobile cranes designed for quick setup and transportation between multiple job sites.",
    specs: {
      "Model/Type": "Telescopic Hydraulic",
      "Lifting Capacity": "50 MT - 500 MT",
      "Gross Vehicle Weight": "Approx 48 MT",
      "Mobility": "On-Road High Speed",
    },
  },
  {
    id: 3,
    name: "Crawler Crane",
    description: "Designed for super-heavy lifting, crawler cranes deliver unmatched stability and performance.",
    specs: {
      "Model/Type": "Lattice Boom Crawler",
      "Lifting Capacity": "350 MT",
      "Operating Weight": "Approx 210 MT",
      "Main Boom Length": "63 Mtr",
    },
  },
  {
    id: 4,
    name: "Pick & Carry Crane",
    description: "Versatile, articulated cranes used for moving loads over short distances without outriggers.",
    specs: {
      "Model/Type": "Articulated / Next-Gen",
      "Lifting Capacity": "9 MT - 30 MT",
      "Unladen Weight": "12 MT - 20 MT",
      "Steering": "Articulated",
    },
  },
  {
    id: 5,
    name: "Aerial Work Platform (AWP)",
    description: "Provides safe temporary access for people or equipment to inaccessible heights.",
    specs: {
      "Model/Type": "Boom / Scissor Lift",
      "Platform Capacity": "230 kg - 450 kg",
      "Machine Weight": "Approx 15 MT",
      "Power": "Electric / Diesel",
    },
  },
  {
    id: 6,
    name: "Multi-Axle Platform Trailer",
    description: "Heavy-duty modular trailers designed for transporting oversized and ultra-heavy cargo.",
    specs: {
      "Model/Type": "Hydraulic Modular Trailer",
      "Payload Capacity": "500+ MT",
      "Tare Weight": "Approx 3.5 MT/Axle",
      "Axles": "Modular Configuration",
    },
  },
];

const typeOfWorkOptions = ["General Construction", "Erection (Tower)", "Loading/Unloading", "Material Handling", "Concrete Pouring", "Other"];
const durationOptions = ["1-7 Days", "1 Month", "2 Months", "3 Months", "4-6 Months", "6+ Months (Long Term)"];

export default function Cranes() {
  const [openId, setOpenId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedCrane, setSelectedCrane] = useState("");
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    contactNumber: "",
    designation: "",
    typeOfWork: "",
    location: "",
    startDate: "",
    noOfShifts: "1",
    shiftHours: "8hrs",
    duration: "",
    modelType: "",
    reqCapacity: "",
    loadWeight: "",
    reqRadius: "",
    maxHeight: "",
  });

  const toggle = (id) => setOpenId(openId === id ? null : id);

  const openQuoteForm = (craneName) => {
    setSelectedCrane(craneName);
    setIsModalOpen(true);
    setShowMore(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Quote request submitted successfully!");
    setIsModalOpen(false);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8">Our Fleet</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cranes.map((crane) => (
          <div key={crane.id} className="border rounded-xl shadow bg-white overflow-hidden flex flex-col">
            <div className="relative h-44 bg-gray-200">
              <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" alt={crane.name} fill className="object-cover" />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-bold text-lg">{crane.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{crane.description}</p>

              {/* <button onClick={() => toggle(crane.id)} className="text-red-500 text-sm font-bold mb-3 text-left hover:underline">
                {openId === crane.id ? "✕ Close Details" : "→ See Details"}
              </button> */}

              {openId === crane.id && (
                <ul className="bg-gray-50 p-3 rounded mb-4 text-sm space-y-1 animate-in fade-in duration-300">
                  {Object.entries(crane.specs).map(([key, val]) => (
                    <li key={key} className="flex justify-between border-b border-gray-100 last:border-0 py-1">
                      <span className="font-medium text-gray-500">{key}</span>
                      <span className="font-bold text-gray-800">{val}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto flex gap-2">
                <button onClick={() => openQuoteForm(crane.name)} className="flex-1 bg-red-500 text-white py-2 rounded text-sm font-bold hover:bg-red-600 transition">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- QUOTE MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            {/* Header (Sticky Top) */}
            <div className="p-6 border-b flex justify-between items-center bg-white z-20">
              <h3 className="text-xl font-bold">Request Quote: {selectedCrane}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-3xl text-gray-400 hover:text-black">
                &times;
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="overflow-y-auto flex-1 p-6">
              <form id="quote-form" onSubmit={handleSubmit}>
                {/* BASIC DETAILS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-gray-500">Company Name</label>
                    <input type="text" name="companyName" onChange={handleInputChange} required className="w-full border p-2 rounded outline-none focus:ring-1 focus:ring-red-500" placeholder="Enter company" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-gray-500">Enter Name</label>
                    <input type="text" name="contactPerson" onChange={handleInputChange} required className="w-full border p-2 rounded outline-none focus:ring-1 focus:ring-red-500" placeholder="Your Name" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-gray-500">Contact Number</label>
                    <input type="tel" name="contactNumber" onChange={handleInputChange} required className="w-full border p-2 rounded outline-none focus:ring-1 focus:ring-red-500" placeholder="+91 00000 00000" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-gray-500">Designation</label>
                    <input type="text" name="designation" onChange={handleInputChange} className="w-full border p-2 rounded outline-none focus:ring-1 focus:ring-red-500" placeholder="Manager/Site-head" />
                  </div>
                </div>

                {/* TOGGLE BUTTON */}
                {!showMore && (
                  <button 
                    type="button" 
                    onClick={() => setShowMore(true)}
                    className="mt-6 w-full py-2 border-2 border-dashed border-red-500 text-red-500 font-bold rounded-lg hover:bg-red-50 transition"
                  >
                    + Add Technical & Site Details (Optional)
                  </button>
                )}

                {/* HIDDEN DETAILS */}
                {showMore && (
                  <div className="mt-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-gray-500">Model / Type Required</label>
                      <input type="text" name="modelType" onChange={handleInputChange} className="w-full border p-2 rounded outline-none focus:ring-1 focus:ring-red-500" placeholder="e.g. Hammerhead, Luffing" />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="text-xs font-bold text-gray-600 uppercase mb-3">Technical Requirements</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-red-600 uppercase">Req. Crane Capacity (MT)</label>
                          <input type="text" name="reqCapacity" onChange={handleInputChange} className="w-full border p-2 rounded bg-white" placeholder="Capacity" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-blue-600 uppercase">Actual Load Weight (MT)</label>
                          <input type="text" name="loadWeight" onChange={handleInputChange} className="w-full border p-2 rounded bg-white" placeholder="Weight" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold uppercase text-gray-500">Working Radius (Mtr)</label>
                          <input type="text" name="reqRadius" onChange={handleInputChange} className="w-full border p-2 rounded bg-white" placeholder="Radius" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold uppercase text-gray-500">Max Height (Mtr)</label>
                          <input type="text" name="maxHeight" onChange={handleInputChange} className="w-full border p-2 rounded bg-white" placeholder="Height" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-gray-500">Type of Work</label>
                        <select name="typeOfWork" onChange={handleInputChange} className="w-full border p-2 rounded bg-white">
                          <option value="">Select Work Type</option>
                          {typeOfWorkOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-gray-500">Location</label>
                        <input type="text" name="location" onChange={handleInputChange} className="w-full border p-2 rounded" placeholder="Address" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-gray-500">No. of Shifts</label>
                        <input type="number" name="noOfShifts" onChange={handleInputChange} defaultValue="1" className="w-full border p-2 rounded" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-gray-500">Shift Hours</label>
                        <input type="text" name="shiftHours" onChange={handleInputChange} placeholder="e.g. 8hrs" className="w-full border p-2 rounded" />
                      </div>
                      <div className="md:col-span-2 space-y-1">
                        <label className="text-xs font-bold uppercase text-gray-500">Required Duration</label>
                        <select name="duration" onChange={handleInputChange} className="w-full border p-2 rounded bg-white">
                          <option value="">Select Duration</option>
                          {durationOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Sticky Submit Button Footer */}
            <div className="p-4 border-t bg-white sticky bottom-0 z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
              <button 
                type="submit" 
                form="quote-form" // This links the button to the form inside the scrollable area
                className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition shadow-lg"
              >
                Submit Quote Request
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}