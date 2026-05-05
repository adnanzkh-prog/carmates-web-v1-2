import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-slate-900">
          Carmates
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/listings" className="hover:text-blue-600">
            Listings
          </Link>
          <Link href="/" className="hover:text-blue-600">
            About Us
          </Link>
          <Link href="/" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>
        <Link
          href="/listings"
          className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
        >
          Browse Vehicles
        </Link>
      </div>
    </header>
  );
}
