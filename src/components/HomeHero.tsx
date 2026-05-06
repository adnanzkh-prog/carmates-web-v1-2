"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeHero() {
  const router = useRouter();
  const [filters, setFilters] = useState({
    make: "",
    maxPrice: "",
  });

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (filters.make) params.append("make", filters.make);
    if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);
    router.push(`/listings?${params.toString()}`);
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background image */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&w=1400&q=80")',
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-black space-y-6">
          {/* Guarantee badge */}
          <div className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-red-700">
            REST/SHIP GUARANTEE
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Your Trusted <span className="text-red-700">Mate</span>
            <br />
            for Every Mile.
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-700 max-w-lg">
            Real people, reliable cars, and a handshake you can trust. Welcome to the CarMates family where we treat every deal like it's a friend.
          </p>

          {/* Search form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase">Make & Model</label>
                <select
                  value={filters.make}
                  onChange={(e) => setFilters({ ...filters, make: e.target.value })}
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                >
                  <option value="">Any Make</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Mazda">Mazda</option>
                  <option value="Kia">Kia</option>
                  <option value="Subaru">Subaru</option>
                  <option value="Hyundai">Hyundai</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase">Price</label>
                <select
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                >
                  <option value="">Any Price</option>
                  <option value="25000">Under $25k</option>
                  <option value="50000">Under $50k</option>
                  <option value="75000">Under $75k</option>
                  <option value="100000">Under $100k</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={handleSearch}
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg transition"
                >
                  🔍 Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Chat assistant widget */}
        <div className="flex justify-end">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xs border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
              <div>
                <p className="font-semibold text-sm text-gray-900">Need Help?</p>
                <p className="text-xs text-gray-500">Chat with a Mate</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              "I'm here to help you find your perfect car. Ask me anything!"
            </p>
            <button className="w-full mt-4 text-red-700 font-semibold text-sm hover:text-red-800">
              Start a conversation →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
