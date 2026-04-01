import Image from "next/image";
import Link from "next/link";
import { cranes } from "../data"; // Navigate up to find data.js

// This function tells Next.js which paths to pre-render (Static Site Generation)
export async function generateStaticParams() {
  return cranes.map((crane) => ({
    slug: crane.slug,
  }));
}

export default async function CraneDetailPage({ params }) {
  const { slug } = await params; // Await params for Next.js 15 compatibility
  
  const crane = cranes.find((c) => c.slug === slug);

  if (!crane) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Crane Not Found!</h1>
        <Link href="/our-cranes" className="text-red-500 underline mt-4">Back to Fleet</Link>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <Link href="/our-cranes" className="text-red-500 font-bold mb-6 inline-block hover:underline">
        ← Back to Fleet
      </Link>

      <div className="flex flex-col md:flex-row gap-10 mt-6">
        {/* LEFT SIDE: IMAGE */}
        <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-lg border">
          <Image 
            src={crane.image} 
            alt={crane.name} 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT SIDE: DETAILS */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{crane.name}</h1>
          <p className="text-lg text-gray-600 mb-8">{crane.description}</p>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold mb-4 border-b pb-2 text-red-600">Technical Specifications</h3>
            <div className="grid grid-cols-1 gap-4">
              {Object.entries(crane.specs).map(([key, val]) => (
                <div key={key} className="flex justify-between items-center border-b border-gray-200 py-2 last:border-0">
                  <span className="text-gray-500 font-medium">{key}</span>
                  <span className="text-gray-900 font-bold">{val}</span>
                </div>
              ))}
            </div>
          </div>
          
          <button className="w-full mt-8 bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition shadow-lg">
            Inquire About This Crane
          </button>
        </div>
      </div>
    </section>
  );
}