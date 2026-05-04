import { prisma } from "@/lib/prisma";
import FilterSidebar from "@/components/FilterSidebar";
import VehicleCard from "@/components/VehicleCard";
import Pagination from "@/components/Pagination";

interface SearchParams {
  make?: string;
  model?: string;
  minPrice?: string;
  maxPrice?: string;
  year?: string;
  fuelType?: string;
  page?: string;
}

export default async function ListingsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const page = parseInt(searchParams.page || "1");
  const pageSize = 12;
  const skip = (page - 1) * pageSize;

  // Build filter object
  const where: any = {};
  if (searchParams.make) where.make = searchParams.make;
  if (searchParams.model) where.model = { contains: searchParams.model, mode: "insensitive" };
  if (searchParams.minPrice) where.price = { gte: parseInt(searchParams.minPrice) };
  if (searchParams.maxPrice) where.price = { ...where.price, lte: parseInt(searchParams.maxPrice) };
  if (searchParams.year) where.year = parseInt(searchParams.year);
  if (searchParams.fuelType) where.fuelType = searchParams.fuelType;

  const [total, listings] = await prisma.$transaction([
    prisma.listing.count({ where }),
    prisma.listing.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters - matches design document */}
        <aside className="lg:w-1/4">
          <FilterSidebar currentFilters={searchParams} />
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              <strong>{total}</strong> Mates available online
            </p>
            <select className="border rounded p-2">
              <option>Sort by: Newest first</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((car) => (
              <VehicleCard key={car.id} car={car} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination currentPage={page} totalPages={totalPages} />
          )}
        </main>
      </div>
    </div>
  );
}
