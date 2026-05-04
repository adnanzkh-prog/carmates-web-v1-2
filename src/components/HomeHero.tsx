"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeHero() {
  const router = useRouter();
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    minPrice: "",
    maxPrice: "",
    year: "",
  });

  const handleSearch = () => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([k, v]) => v && params.append(k, v));
    router.push(`/listings?${params.toString()}`);
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Next <span className="text-yellow-400">Mate</span> on Wheels
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Every car comes with a 150‑point inspection and a real human mate.
        </p>

        {/* Advanced Search Bar - Mobile First */}
        <div className="bg-white rounded-lg shadow-xl p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-gray-800">
          <select
            className="p-2 border rounded"
            value={filters.make}
            onChange={(e) => setFilters({ ...filters, make: e.target.value })}
          >
            <option value="">Any Make</option>
            <option value="Toyota">Toyota</option>
            <option value="Mazda">Mazda</option>
            <option value="Kia">Kia</option>
            <option value="Subaru">Subaru</option>
          </select>
          <input
            type="text"
            placeholder="Model (e.g. RAV4)"
            className="p-2 border rounded"
            value={filters.model}
            onChange={(e) => setFilters({ ...filters, model: e.target.value })}
          />
          <input
            type="number"
            placeholder="Min Price"
            className="p-2 border rounded"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
          />
          <input
            type="number"
            placeholder="Max Price"
            className="p-2 border rounded"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          />
          <button
            onClick={handleSearch}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded"
          >
            Search Cars
          </button>
        </div>

        {/* Trust elements */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
          <span>✅ 150‑Point Inspection</span>
          <span>🤝 No bots – Chat with a Mate</span>
          <span>💵 7‑Day Money Back Guarantee</span>
        </div>
      </div>
    </section>
  );
}
