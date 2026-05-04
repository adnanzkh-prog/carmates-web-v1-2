import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const make = searchParams.get("make");
    const model = searchParams.get("model");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const year = searchParams.get("year");
    const fuelType = searchParams.get("fuelType");

    const where: any = {};
    if (make) where.make = make;
    if (model) where.model = { contains: model, mode: "insensitive" };
    if (minPrice) where.price = { gte: parseInt(minPrice) };
    if (maxPrice) where.price = { ...where.price, lte: parseInt(maxPrice) };
    if (year) where.year = parseInt(year);
    if (fuelType) where.fuelType = fuelType;

    const listings = await prisma.listing.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(listings, { status: 200 });
  } catch (error) {
    console.error("Error fetching listings:", error);
    return NextResponse.json(
      { error: "Failed to fetch listings" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { make, model, year, price, mileage, fuelType, transmission, colour, description, images } = body;

    if (!make || !model || !year || !price) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const listing = await prisma.listing.create({
      data: {
        make,
        model,
        year,
        price,
        mileage,
        fuelType,
        transmission,
        colour,
        description,
        images: images || [],
      },
    });

    return NextResponse.json(listing, { status: 201 });
  } catch (error) {
    console.error("Error creating listing:", error);
    return NextResponse.json(
      { error: "Failed to create listing" },
      { status: 500 }
    );
  }
}
