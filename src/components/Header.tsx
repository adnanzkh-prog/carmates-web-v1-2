import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-extrabold text-red-700">CarMates</div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 flex-1 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-red-700 transition">
            Buy
          </Link>
          <Link href="/" className="hover:text-red-700 transition">
            Sell
          </Link>
          <Link href="/" className="hover:text-red-700 transition">
            Finance
          </Link>
          <Link href="/" className="hover:text-red-700 transition">
            Reviews
          </Link>
          <Link href="/" className="hover:text-red-700 transition">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-slate-600 hover:text-slate-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
          </button>
          <Link
            href="/"
            className="rounded-full bg-red-700 px-6 py-2 text-sm font-semibold text-white hover:bg-red-800 transition"
          >
            List My Car
          </Link>
        </div>
      </div>
    </header>
  );
}
