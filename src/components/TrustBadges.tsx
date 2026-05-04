export default function TrustBadges() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Meet the Mates behind the machine</h2>
          <p className="text-gray-600 mt-2">
            We're more than a marketplace – we're enthusiasts dedicated to finding you the perfect car.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded shadow">
            <div className="text-5xl mb-4">🔧</div>
            <h3 className="text-xl font-bold">Expert Vetting</h3>
            <p>Every car is personally inspected by our team of expert "Mates".</p>
          </div>
          <div className="text-center p-6 bg-white rounded shadow">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-bold">Transparent Pricing</h3>
            <p>No hidden fees, no "doc" charges – the price you see is the mate's rate.</p>
          </div>
          <div className="text-center p-6 bg-white rounded shadow">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold">Ongoing Support</h3>
            <p>Need a service or spare part? Just call your Mate – we stick with you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
