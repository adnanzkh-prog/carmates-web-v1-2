import { Suspense } from "react";
import HomeHero from "@/components/HomeHero";
import FeaturedListings from "@/components/FeaturedListings";
import TrustBadges from "@/components/TrustBadges";
import TheDifference from "@/components/TheDifference";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HomeHero />
      <Suspense fallback={<div className="py-16 text-center">Loading featured listings...</div>}>
        <FeaturedListings />
      </Suspense>
      <TrustBadges />
      <TheDifference />
    </main>
  );
}
