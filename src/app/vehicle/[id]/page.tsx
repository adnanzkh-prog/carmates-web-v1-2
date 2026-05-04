import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import EnquiryForm from "@/components/EnquiryForm";
import RelatedVehicles from "@/components/RelatedVehicles";

export default async function VehicleDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const vehicle = await prisma.listing.findUnique({
    where: { id: params.id },
  });

  if (!vehicle) notFound();

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Image Gallery - mimicking design layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-2">
          <div className="relative h-96 w-full bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={vehicle.images[0] || "/placeholder-car.jpg"}
              alt={`${vehicle.make} ${vehicle.model}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {vehicle.images.slice(1, 5).map((img, idx) => (
              <div key={idx} className="relative h-24 w-full bg-gray-100 rounded overflow-hidden">
                <Image src={img} alt={`thumbnail ${idx}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle Info */}
        <div>
          <h1 className="text-3xl font-bold">
            {vehicle.make} {vehicle.model} {vehicle.year}
          </h1>
          <p className="text-gray-500 mt-1">
            {vehicle.mileage.toLocaleString()} km • {vehicle.fuelType} • {vehicle.transmission}
          </p>
          <div className="text-4xl font-bold text-blue-600 mt-4">
            ${vehicle.price.toLocaleString()}
          </div>

          {/* Mate's Description - Human copy */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-bold mb-2">The Mate's Description</h2>
            <p className="text-gray-700">{vehicle.description}</p>
            <p className="mt-2 text-sm text-gray-500">– Dave Henderson, Senior Mate at CarMates Sydney</p>
          </div>

          {/* Mate's Guarantee badges */}
          <div className="mt-6 grid grid-cols-3 gap-2 text-center text-sm">
            <div className="p-2 bg-green-50 rounded">🔧 150‑Point Inspection</div>
            <div className="p-2 bg-green-50 rounded">💬 Human Support – No bots</div>
            <div className="p-2 bg-green-50 rounded">💵 7‑Day Money Back</div>
          </div>

          {/* Enquiry CTA */}
          <EnquiryForm listingId={vehicle.id} />
        </div>
      </div>

      {/* Related vehicles */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Other Mates You'll Love</h2>
        <RelatedVehicles currentId={vehicle.id} />
      </section>
    </main>
  );
}
