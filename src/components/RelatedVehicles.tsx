import { prisma } from "@/lib/prisma";
import VehicleCard from "./VehicleCard";

export default async function RelatedVehicles({ currentId }: { currentId: string }) {
  const related = await prisma.listing.findMany({
    where: {
      id: { not: currentId },
    },
    take: 3,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {related.map((car) => (
        <VehicleCard key={car.id} car={car} />
      ))}
    </div>
  );
}
