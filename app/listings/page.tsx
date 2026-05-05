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
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4">
          <FilterSidebar currentFilters={searchParams} />
        </aside>

        <main className="lg:w-3/4">
          <div className="mb-6 rounded-3xl border border-slate-800 bg-slate-900 p-6 text-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Available cars</p>
                <h1 className="text-3xl font-bold mt-2">{total} Mates available online</h1>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {Object.entries(sortOptions).map(([key, option]) => (
                  <Link
                    key={key}
                    href={`/listings?${new URLSearchParams({ ...Object.fromEntries(params.entries()), sort: key }).toString()}`}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      sort === key ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {listings.length === 0 ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center text-slate-300">
              <h2 className="text-2xl font-bold text-white">No results found</h2>
              <p className="mt-2 text-slate-400">
                We couldn’t find any vehicles matching your filters. Remove filters or browse all available cars.
              </p>
              <Link href="/listings" className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                View all cars
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {listings.map((car) => (
                  <VehicleCard key={car.id} car={car} />
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination currentPage={page} totalPages={totalPages} />
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
