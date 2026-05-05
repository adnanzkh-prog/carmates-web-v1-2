import { prisma } from "@/lib/prisma";
import VehicleCard from "./VehicleCard";

export default async function FeaturedListings() {
  const featured = await prisma.listing.findMany({
    where: { isMatesPick: true },
    take: 3,
  });

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">
        Featured <span className="text-blue-400">Mateship Picks</span>
      </h2>
      <p className="text-center text-slate-400 mb-12">
        Hand‑selected by our expert mates – ready to drive away today.
      </p>
      {featured.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((car) => (
            <VehicleCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-10 text-center text-slate-300">
          <p className="text-lg font-semibold">No featured vehicles are available right now.</p>
          <p className="mt-2 text-slate-400">Please check back later or explore our full listings.</p>
        </div>
      )}
    </section>
  );
}
