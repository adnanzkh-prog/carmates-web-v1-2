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
    <section className="relative overflow-hidden bg-slate-950 text-white py-24 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.2),_transparent_25%)]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <span className="inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200 mb-4">
              Trusted by Australian Mates since 2024
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Find your next <span className="text-blue-400">mate</span> on wheels.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Browse hand-picked vehicles with a 150-point inspection, live human support, and transparent pricing you can trust.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button onClick={handleSearch} className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-400">
                Search available cars
              </button>
              <button
                onClick={() => router.push('/listings')}
                className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-blue-400"
              >
                Browse all listings
              </button>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-300">
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
                <p className="font-semibold text-white">150-point safety check</p>
                <p className="mt-2 text-slate-400">Every vehicle inspected by a real mate.</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
                <p className="font-semibold text-white">7-day money back</p>
                <p className="mt-2 text-slate-400">Drive with peace of mind.</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
                <p className="font-semibold text-white">Fast local support</p>
                <p className="mt-2 text-slate-400">Chat with a mate, not a bot.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-6 shadow-2xl">
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-950 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Search your next car</p>
                <div className="mt-4 space-y-3">
                  <input
                    type="text"
                    placeholder="Search make or model"
                    className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 focus:border-blue-400 focus:outline-none"
                    value={filters.model}
                    onChange={(e) => setFilters({ ...filters, model: e.target.value })}
                  />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      type="number"
                      placeholder="Min price"
                      className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 focus:border-blue-400 focus:outline-none"
                      value={filters.minPrice}
                      onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                    />
                    <input
                      type="number"
                      placeholder="Max price"
                      className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 focus:border-blue-400 focus:outline-none"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <select
                  className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 focus:border-blue-400 focus:outline-none"
                  value={filters.make}
                  onChange={(e) => setFilters({ ...filters, make: e.target.value })}
                >
                  <option value="">Any Make</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Mazda">Mazda</option>
                  <option value="Kia">Kia</option>
                  <option value="Subaru">Subaru</option>
                </select>
                <select
                  className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 focus:border-blue-400 focus:outline-none"
                  value={filters.year}
                  onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                >
                  <option value="">Any Year</option>
                  {[2024, 2023, 2022, 2021, 2020].map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleSearch}
                className="w-full rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-400"
              >
                Search now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
