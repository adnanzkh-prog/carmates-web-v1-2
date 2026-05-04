import Image from "next/image";
import Link from "next/link";

interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  images: string[];
  isMatesPick: boolean;
}

export default function VehicleCard({ car }: { car: Car }) {
  return (
    <Link href={`/vehicle/${car.id}`} className="group block">
      <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <div className="relative h-48 w-full">
          <Image
            src={car.images[0] || "/placeholder-car.jpg"}
            alt={`${car.make} ${car.model}`}
            fill
            className="object-cover group-hover:scale-105 transition"
          />
          {car.isMatesPick && (
            <span className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
              Mate's Pick ⭐
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold truncate">
            {car.make} {car.model} {car.year}
          </h3>
          <p className="text-gray-500 text-sm">
            {car.mileage.toLocaleString()} km • {car.fuelType}
          </p>
          <p className="text-xl font-bold text-blue-600 mt-2">
            ${car.price.toLocaleString()}
          </p>
          <button className="mt-3 w-full bg-gray-100 text-center py-2 rounded group-hover:bg-blue-600 group-hover:text-white transition">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}
