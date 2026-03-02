import React from 'react';

const insights = [
  {
    id: 1,
    category: 'Safety',
    title: 'Top 5 Safety Protocols for High-Rise Lifts',
    description: 'Ensuring crew safety and load stability during complex urban maneuvers.',
    image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&q=80&w=800', 
  },
  {
    id: 2,
    category: 'Fleet',
    title: 'Mobile vs. Tower Cranes: Choosing the Right Rig',
    description: 'A comprehensive guide to selecting the most cost-effective crane for your project.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    category: 'Innovation',
    title: 'The Future of Remote-Operated Lifting',
    description: 'How digital twins and IoT are revolutionizing efficiency on modern construction sites.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Blog() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto font-sans bg-white">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
          Industry Insights
        </h2>
        {/* <button className="hidden md:block text-sm font-bold uppercase tracking-widest text-blue-600 border-b-2 border-blue-600 pb-1 hover:text-blue-800 hover:border-blue-800 transition-colors">
          View All News
        </button> */}
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {insights.map((item) => (
          <div key={item.id} className="group shadow rounded-xl cursor-pointer">
            {/* Image Container with Aspect Ratio */}
            <div className="relative aspect-video w-full mb-6 overflow-hidden rounded-t-xl bg-gray-200">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col px-4 pb-4 items-start">
              <span className="mb-3 px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-white bg-red-600 rounded">
                {item.category}
              </span>
              <h3 className="text-2xl font-bold text-slate-800 leading-tight mb-3  transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
              <div className="mt-4 flex items-center text-sm group-hover:text-red-700 font-semibold text-slate-900 group-hover:gap-2 transition-all">
                Read Article 
                {/* <span className="ml-1">→</span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}