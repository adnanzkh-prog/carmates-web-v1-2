# Carmates Website v1.2 - Quick Setup Guide

## 🚀 5-Minute Quick Start

### Step 1: Install Dependencies
```bash
cd "carmates-website v1.2"
npm install
```

### Step 2: Set Up Database
Copy `.env.local.example` to `.env.local` and add your PostgreSQL URL:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/carmates"
```

**Don't have PostgreSQL?** Use [Neon.tech](https://neon.tech) (free serverless option)

### Step 3: Run Migrations
```bash
npx prisma migrate dev --name init
```

### Step 4: Start Dev Server
```bash
npm run dev
```

Visit **[http://localhost:3000](http://localhost:3000)** ✅

---

## 📂 File Structure

Key files you'll want to know about:

- **`prisma/schema.prisma`** - Database schema for Listings & Enquiries
- **`src/app/page.tsx`** - Home page (hero + featured listings)
- **`src/app/listings/page.tsx`** - Listings page with filters
- **`src/app/vehicle/[id]/page.tsx`** - Individual vehicle detail page
- **`src/components/`** - All reusable React components
- **`src/app/api/`** - API endpoints for listings & enquiries
- **`src/lib/prisma.ts`** - Prisma client setup

---

## 🎨 Pages Overview

| Page | Route | Features |
|------|-------|----------|
| Home | `/` | Hero search, featured listings, trust badges |
| Listings | `/listings` | Grid view, filters, pagination |
| Vehicle Detail | `/vehicle/[id]` | Gallery, description, enquiry form |
| API: Listings | `/api/listings` | CRUD operations |
| API: Enquiries | `/api/enquiries` | Lead capture |

---

## 🔧 Common Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run linter
npx prisma studio   # Open Prisma UI (view/edit database)
npx prisma db push  # Sync schema to database
```

---

## 📋 Database Schema

**Listing** (cars for sale)
- id, make, model, year, price, mileage
- fuelType, transmission, colour, vin
- description, images[], isMatesPick

**Enquiry** (customer inquiries)
- id, listingId, name, email, phone
- message, status, createdAt

---

## ✅ Testing the App

1. **Test Home Page**
   - Visit `/` 
   - Try searching for a car (need listings in DB first)

2. **Test Listings Page**
   - Visit `/listings`
   - Try filters (Make, Price range, Year, etc.)

3. **Add Sample Data**
   - Use `POST /api/listings` to create test cars
   - Or write a `prisma/seed.ts` file

4. **Test Enquiry Form**
   - Visit a vehicle detail page `/vehicle/[id]`
   - Fill out enquiry form
   - Confirm submission at `/api/enquiries`

---

## 🚨 Troubleshooting

**"Cannot find module '@prisma/client'"**
```bash
npm install @prisma/client prisma
```

**"PRISMA_DATABASE_URL not found"**
- Create `.env.local` file
- Add `DATABASE_URL="postgresql://..."`

**"relation \"public.Listing\" does not exist"**
```bash
npx prisma migrate dev --name init
```

**Port 3000 already in use**
```bash
npm run dev -- -p 3001
```

---

## 🌍 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Add `DATABASE_URL` env var
4. Deploy!

### Other Platforms (Railway, Render, etc.)
```bash
npm run build
npm start
```

---

## 📖 Further Reading

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## 💡 Next Steps

- [ ] Add more sample vehicles
- [ ] Set up email notifications for enquiries
- [ ] Add WhatsApp webhook integration
- [ ] Create admin dashboard
- [ ] Set up authentication for sellers
- [ ] Add image upload functionality

---

Need help? Check the main [README.md](README.md) for detailed documentation.
