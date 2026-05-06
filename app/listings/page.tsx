import { prisma } from "@/lib/prisma";
import FilterSidebar from "@/components/FilterSidebar";
import VehicleCard from "@/components/VehicleCard";
import Pagination from "@/components/Pagination";
import Link from "next/link";

interface SearchParams {
  make?: string;
  model?: string;
  minPrice?: string;
  maxPrice?: string;
  year?: string;
  fuelType?: string;
  page?: string;
  sort?: string;
}

export default async function ListingsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const page = parseInt(searchParams.page || "1");
  const pageSize = 12;
  const skip = (page - 1) * pageSize;

  const sort = searchParams.sort || "newest";
  const sortOptions = {
    newest: { label: "Newest first", orderBy: { createdAt: "desc" } },
    price_asc: { label: "Price: Low to High", orderBy: { price: "asc" } },
    price_desc: { label: "Price: High to Low", orderBy: { price: "desc" } },
  } as const;

  const orderBy = sortOptions[sort as keyof typeof sortOptions]?.orderBy || { createdAt: "desc" };

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
      orderBy,
    }),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value && key !== "page") params.set(key, value as string);
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900">Find Your Next Mate</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Browse Australia's most trusted community-driven car marketplace. Transparent history, real mates, better deals.
          </p>
          <p className="text-green-600 font-semibold mt-2">
            🟢 {total} Mates available online
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4 flex-shrink-0">
            <FilterSidebar currentFilters={searchParams} />
          </aside>

          {/* Main content */}
          <main className="lg:w-3/4">
            {/* Sort options */}
            <div className="mb-8 flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-700">Sort by:</p>
              <div className="flex gap-2">
                {Object.entries(sortOptions).map(([key, option]) => (
                  <Link
                    key={key}
                    href={`/listings?${new URLSearchParams({ ...Object.fromEntries(params.entries()), sort: key }).toString()}`}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                      sort === key
                        ? "bg-red-700 text-white"
                        : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                    }`}
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            </div>

            {listings.length === 0 ? (
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-12 text-center">
                <h2 className="text-2xl font-bold text-gray-900">No results found</h2>
                <p className="mt-2 text-gray-600">
                  We couldn't find any vehicles matching your filters. Remove filters or browse all available cars.
                </p>
                <Link href="/listings" className="mt-6 inline-flex rounded-full bg-red-700 px-6 py-3 font-semibold text-white hover:bg-red-800">
                  View all cars
                </Link>
              </div>
            ) : (
              <>
                {/* Vehicle grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {listings.map((car) => (
                    <VehicleCard key={car.id} car={car} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination currentPage={page} totalPages={totalPages} />
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
