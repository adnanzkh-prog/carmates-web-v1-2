# Carmates Website v1.2

A modern vehicle marketplace built with [Next.js](https://nextjs.org/), TypeScript, Prisma, and Tailwind CSS. Features pixel-perfect design from design specifications with a focus on reliability and human connection.

## Features

✨ **Core Features**
- 🏠 Hero landing page with search filters
- 📋 Featured "Mateship Picks" listings
- 🔍 Advanced filtering (Make, Model, Price, Year, Fuel Type)
- 🚗 Vehicle detail pages with gallery
- 📧 Enquiry form with 30-minute SLA
- 💬 WhatsApp integration for direct messaging
- ⭐ "Mate's Pick" badge system
- 🔗 Related vehicles recommendations
- 📱 Fully responsive design

## Project Structure

```
carmates-website v1.2/
├── prisma/
│   └── schema.prisma        # Database schema (Listing, Enquiry)
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Home page
│   │   ├── globals.css      # Tailwind imports
│   │   ├── listings/
│   │   │   └── page.tsx     # Listings with filters & pagination
│   │   ├── vehicle/
│   │   │   └── [id]/
│   │   │       └── page.tsx # Vehicle detail page
│   │   └── api/
│   │       ├── listings/
│   │       │   └── route.ts # GET/POST listings
│   │       └── enquiries/
│   │           └── route.ts # GET/POST enquiries
│   ├── components/
│   │   ├── HomeHero.tsx        # Hero section with search
│   │   ├── FeaturedListings.tsx # Featured cars grid
│   │   ├── TrustBadges.tsx      # Trust section
│   │   ├── TheDifference.tsx    # Brand story section
│   │   ├── VehicleCard.tsx      # Reusable car card
│   │   ├── FilterSidebar.tsx    # Advanced filters
│   │   ├── Pagination.tsx       # Page navigation
│   │   ├── EnquiryForm.tsx      # Lead capture form
│   │   └── RelatedVehicles.tsx  # Related cars section
│   └── lib/
│       ├── prisma.ts        # Prisma client singleton
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
├── .env.local.example
└── .gitignore
```

## Prerequisites

- **Node.js 18+**
- **npm or yarn**
- **PostgreSQL** (local or [Neon.tech](https://neon.tech))

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

This installs:
- Next.js 14
- Prisma ORM
- TypeScript
- Tailwind CSS

### 2. Set Up Database

Create a `.env.local` file (copy from `.env.local.example`):

```env
DATABASE_URL="postgresql://username:password@localhost:5432/carmates"
NODE_ENV="development"
```

**For PostgreSQL locally:**
```bash
# Install PostgreSQL if not already installed
# Create a new database:
createdb carmates
```

**Or use Neon.tech (serverless PostgreSQL):**
1. Go to [neon.tech](https://neon.tech)
2. Create a project
3. Copy the connection string to `DATABASE_URL`

### 3. Run Prisma Migrations

```bash
npx prisma migrate dev --name init
```

This creates the database tables for `Listing` and `Enquiry`.

### 4. (Optional) Seed Sample Data

Create a `prisma/seed.ts` file:

```typescript
import { prisma } from '../src/lib/prisma';

async function main() {
  await prisma.listing.createMany({
    data: [
      {
        make: 'Toyota',
        model: 'RAV4',
        year: 2023,
        price: 35000,
        mileage: 5000,
        fuelType: 'Petrol',
        transmission: 'Automatic',
        colour: 'Silver',
        description: 'Immaculate condition, full service history, perfect family SUV.',
        images: ['/placeholder-car.jpg'],
        isMatesPick: true,
      },
      // Add more sample vehicles...
    ],
  });
}

main();
```

Then run:
```bash
npx prisma db seed
```

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## API Endpoints

### Listings API
- `GET /api/listings` - Get all listings with optional filters
  - Query params: `make`, `model`, `minPrice`, `maxPrice`, `year`, `fuelType`
- `POST /api/listings` - Create a new listing

### Enquiries API
- `GET /api/enquiries` - Get all enquiries
  - Query params: `listingId` (optional)
- `POST /api/enquiries` - Submit an enquiry
  - Body: `{ listingId, name, email, phone, message? }`

## Database Schema

### Listing Model
```typescript
model Listing {
  id            String   @id @default(cuid())
  make          String
  model         String
  year          Int
  price         Int
  mileage       Int
  fuelType      String
  transmission  String
  colour        String
  vin           String?  @unique
  description   String
  images        String[]
  isMatesPick   Boolean  @default(false)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  enquiries     Enquiry[]
}

model Enquiry {
  id        String   @id @default(cuid())
  listingId String
  listing   Listing  @relation(fields: [listingId], references: [id])
  name      String
  email     String
  phone     String
  message   String?
  status    String   @default("pending")
  createdAt DateTime @default(now())
}
```

## Key Components

### HomeHero
Search interface with filters for Make, Model, Price range. Routes to filtered listings page.

### VehicleCard
Reusable card component showing car thumbnail, details, price, and "Mate's Pick" badge (if applicable).

### FilterSidebar
Advanced filter controls with Make, Model, Price range, Year, and Fuel Type. Client-side with URL query params.

### EnquiryForm
Lead capture form with:
- Real-time form state
- Form submission to `/api/enquiries`
- Success screen with WhatsApp fallback
- 30-minute SLA messaging

### Pagination
Dynamic pagination component that preserves filter parameters in URLs.

## Styling

The project uses **Tailwind CSS** for all styling. Configuration in `tailwind.config.js` includes custom colors:
- Primary blue: `#1e40af`
- Secondary yellow: `#fbbf24`

All components are responsive (mobile-first approach) with breakpoints:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://...` |
| `NODE_ENV` | Environment (development/production) | `development` |

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

```bash
vercel env add DATABASE_URL
```

### Deploy to Other Platforms

The project works on any Node.js hosting (Railway, Render, AWS, etc.):

```bash
npm run build
npm start
```

## TODO / Future Enhancements

- [ ] Email notifications for enquiries
- [ ] WhatsApp API integration for messages
- [ ] Admin dashboard for managing listings
- [ ] User authentication for sellers
- [ ] Payment integration for featured listings
- [ ] Search analytics and reporting
- [ ] Image upload and optimization
- [ ] SMS notifications
- [ ] Vehicle history integration

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -am 'Add feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

## License

MIT

## Support

For issues or questions, contact the Carmates team.

## Quick Start Checklist

- [ ] Install Node.js 18+
- [ ] Clone/download this repo
- [ ] Run `npm install`
- [ ] Set up PostgreSQL database
- [ ] Create `.env.local` with `DATABASE_URL`
- [ ] Run `npx prisma migrate dev --name init`
- [ ] Run `npm run dev`
- [ ] Visit http://localhost:3000
- [ ] Add sample listings (optional via seed)
- [ ] Test search, filters, and enquiry form

