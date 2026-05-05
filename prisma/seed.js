require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const count = await prisma.listing.count();
  if (count > 0) {
    console.log(`Database already has ${count} listing(s). No seed required.`);
    return;
  }

  const listings = [
    {
      make: 'Toyota',
      model: 'RAV4',
      year: 2023,
      price: 49990,
      mileage: 18000,
      fuelType: 'Petrol',
      transmission: 'Automatic',
      colour: 'Graphite',
      vin: 'JTMBFREV0PD123456',
      description: 'A well-maintained SUV with all the latest safety features and a smooth ride.',
      images: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80',
      ],
      isMatesPick: true,
    },
    {
      make: 'Mazda',
      model: 'CX-5',
      year: 2022,
      price: 41990,
      mileage: 24000,
      fuelType: 'Petrol',
      transmission: 'Automatic',
      colour: 'Soul Red',
      vin: 'JM0KF2WY4N0123456',
      description: 'A sporty SUV with premium comfort and strong fuel efficiency for everyday drives.',
      images: [
        'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
      ],
      isMatesPick: true,
    },
    {
      make: 'Kia',
      model: 'Cerato',
      year: 2024,
      price: 27990,
      mileage: 8000,
      fuelType: 'Petrol',
      transmission: 'Automatic',
      colour: 'Snow White',
      vin: 'KNADH4A31R1234567',
      description: 'A compact sedan with modern features, low running costs and a comfortable interior.',
      images: [
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      ],
      isMatesPick: false,
    },
    {
      make: 'Subaru',
      model: 'Outback',
      year: 2021,
      price: 42990,
      mileage: 32000,
      fuelType: 'Petrol',
      transmission: 'Automatic',
      colour: 'Crystal Black',
      vin: 'JF1BW5L69LG123456',
      description: 'A rugged wagon that is perfect for weekend adventures and city driving alike.',
      images: [
        'https://images.unsplash.com/photo-1517632298125-1f86ffb0f157?auto=format&fit=crop&w=1200&q=80',
      ],
      isMatesPick: false,
    },
    {
      make: 'Hyundai',
      model: 'Tucson',
      year: 2023,
      price: 43990,
      mileage: 15000,
      fuelType: 'Petrol',
      transmission: 'Automatic',
      colour: 'Shimmering Silver',
      vin: 'KM8J3CAL7PU123456',
      description: 'Reliable performance, smart technology and a premium feel without the premium price.',
      images: [
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
      ],
      isMatesPick: false,
    },
  ];

  await prisma.listing.createMany({ data: listings });
  console.log(`Seeded ${listings.length} sample listings.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
