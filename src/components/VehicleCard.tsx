import Image from "next/image";
import Link from "next/link";

interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission?: string;
  fuelType: string;
  images: string[];
  isMatesPick: boolean;
}

export default function VehicleCard({ car }: { car: Car }) {
  return (
    <Link href={`/vehicle/${car.id}`} className="group block">
      <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition border border-gray-200 bg-white">
        {/* Image section */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={car.images[0] || "/placeholder-car.jpg"}
            alt={`${car.make} ${car.model}`}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
          {/* Badges */}
          {car.isMatesPick && (
            <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              MATE'S PICK
            </span>
          )}
          <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow hover:shadow-lg flex items-center justify-center">
            ♡
          </button>
        </div>

        {/* Content section */}
        <div className="p-4 space-y-3">
          {/* Make & Model & Price */}
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {car.year} {car.make} {car.model}
            </h3>
            <p className="text-red-700 font-bold text-2xl mt-1">
              ${car.price.toLocaleString()}
            </p>
          </div>

          {/* Details */}
          <div className="flex gap-3 text-xs font-semibold text-gray-700">
            <div className="flex items-center gap-1">
              🔴 {car.mileage.toLocaleString()}km
            </div>
            <div className="flex items-center gap-1">
              ⚙️ {car.transmission || 'Automatic'}
            </div>
            <div className="flex items-center gap-1">
              🔋 {car.fuelType}
            </div>
          </div>

          {/* Seller info & Button */}
          <div className="border-t border-gray-200 pt-3">
            <p className="text-xs text-gray-600 font-medium mb-3">
              PRIVATE SELLER • VIC
            </p>
            <button className="w-full bg-gray-200 text-gray-900 font-semibold py-2 rounded-lg hover:bg-gray-300 transition text-sm">
              Enquire with a Mate
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
