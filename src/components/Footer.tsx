import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div>
            <div className="text-2xl font-black text-red-600 mb-2">CarMates</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Making car buying feel like a handshake, not a transaction. Serving Australians since 2024.
            </p>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-bold mb-4 text-white">COMPANY</h5>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white transition">Locations</Link></li>
              <li><Link href="/" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/" className="hover:text-white transition">Reviews</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-bold mb-4 text-white">SUPPORT</h5>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="/" className="hover:text-white transition">Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-bold mb-4 text-white">LEGAL</h5>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 Carmates Australia. Built for Mateship.
            </p>
            <button className="mt-4 md:mt-0 bg-red-700 hover:bg-red-800 text-white rounded-full p-3 transition">
              ✉️
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
