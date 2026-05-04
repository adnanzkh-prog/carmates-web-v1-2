"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FilterSidebar({ currentFilters }: { currentFilters: any }) {
  const router = useRouter();
  const [filters, setFilters] = useState({
    make: currentFilters.make || "",
    model: currentFilters.model || "",
    minPrice: currentFilters.minPrice || "",
    maxPrice: currentFilters.maxPrice || "",
    year: currentFilters.year || "",
    fuelType: currentFilters.fuelType || "",
  });

  const applyFilters = () => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([k, v]) => v && params.append(k, v));
    router.push(`/listings?${params.toString()}`);
  };

  const clearFilters = () => {
    setFilters({ make: "", model: "", minPrice: "", maxPrice: "", year: "", fuelType: "" });
    router.push("/listings");
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-bold text-lg mb-4">Filters</h3>
      <div className="space-y-3">
        <select
          className="w-full p-2 border rounded"
          value={filters.make}
          onChange={(e) => setFilters({ ...filters, make: e.target.value })}
        >
          <option value="">All Makes</option>
          <option>Toyota</option>
          <option>Mazda</option>
          <option>Kia</option>
          <option>Subaru</option>
          <option>Hyundai</option>
        </select>
        <input
          type="text"
          placeholder="Model"
          className="w-full p-2 border rounded"
          value={filters.model}
          onChange={(e) => setFilters({ ...filters, model: e.target.value })}
        />
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min Price"
            className="w-1/2 p-2 border rounded"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
          />
          <input
            type="number"
            placeholder="Max Price"
            className="w-1/2 p-2 border rounded"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          />
        </div>
        <select
          className="w-full p-2 border rounded"
          value={filters.year}
          onChange={(e) => setFilters({ ...filters, year: e.target.value })}
        >
          <option value="">Any Year</option>
          {[2024, 2023, 2022, 2021, 2020].map((y) => (
            <option key={y}>{y}</option>
          ))}
        </select>
        <select
          className="w-full p-2 border rounded"
          value={filters.fuelType}
          onChange={(e) => setFilters({ ...filters, fuelType: e.target.value })}
        >
          <option value="">Fuel Type</option>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Hybrid</option>
          <option>Electric</option>
        </select>
        <button
          onClick={applyFilters}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Apply Filters
        </button>
        <button
          onClick={clearFilters}
          className="w-full text-gray-600 underline text-sm"
        >
          Clear all
        </button>
      </div>
    </div>
  );
}
