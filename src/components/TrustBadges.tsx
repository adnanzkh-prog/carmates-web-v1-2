export default function TrustBadges() {
  return (
    <section className="bg-white py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900">Meet the Mates behind the machine</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We're more than a marketplace – we're enthusiasts dedicated to making car buying feel like a handshake.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Expert Vetting */}
          <div className="text-center p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Expert Vetting</h3>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              Every car is personally inspected by our team of expert "Mates" before it's ever for sale.
            </p>
          </div>

          {/* Transparent Pricing */}
          <div className="text-center p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👁️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Transparent Pricing</h3>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              No hidden fees, no surprises – the price you see is the mate's rate you pay.
            </p>
          </div>

          {/* Ongoing Support */}
          <div className="text-center p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Ongoing Support</h3>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              Need a service or spare part? Just call your Mate – we stick with you forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
