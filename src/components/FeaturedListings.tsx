import { prisma } from "@/lib/prisma";
import VehicleCard from "./VehicleCard";
import Link from "next/link";

export default async function FeaturedListings() {
  const featured = await prisma.listing.findMany({
    where: { isMatesPick: true },
    take: 3,
  });

  return (
    <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl font-black text-gray-900">
            Featured Mateship Picks
          </h2>
          <p className="text-gray-600 mt-2">
            Hand-vetted by our local experts this week.
          </p>
        </div>
        <Link href="/listings" className="text-red-700 font-semibold hover:text-red-800 flex items-center gap-2">
          View all listings →
        </Link>
      </div>

      {featured.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((car) => (
            <VehicleCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-12 text-center">
          <p className="text-lg font-semibold text-gray-900">No featured vehicles are available right now.</p>
          <p className="mt-2 text-gray-600">Please check back later or explore our full listings.</p>
        </div>
      )}
    </section>
  );
}
