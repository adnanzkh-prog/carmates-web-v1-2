import Image from "next/image";

export default function TheDifference() {
  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Image with testimonial */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1606611281537-25b63f7d5a2e?auto=format&fit=crop&w=600&q=80"
                alt="Family with car"
                width={500}
                height={400}
                className="w-full object-cover"
              />
            </div>
            {/* Testimonial card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg p-4">
              <div className="flex gap-1 mb-2">
                {[1,2,3,4,5].map(i => <span key={i} className="text-red-600">★</span>)}
              </div>
              <p className="text-sm font-semibold text-gray-900">
                "It didn't feel like a dealership. It felt like two mates meeting for a beer to talk cars."
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
                <div className="text-xs">
                  <p className="font-semibold text-gray-900">Sarah T. Brisbane</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Text content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-gray-900">
              Trust isn't built with words,<br />
              but with miles.
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Over 15,000 Australians have found their next "mate" through us. We pride ourselves on the relationships, not the transaction.
            </p>

            {/* Feature list */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-red-700 text-2xl flex-shrink-0">📍</div>
                <div>
                  <h4 className="font-bold text-gray-900">Community First</h4>
                  <p className="text-gray-600 text-sm">
                    We're not some faceless corporation – we're your neighbors and mates invested in this community.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-red-700 text-2xl flex-shrink-0">🔧</div>
                <div>
                  <h4 className="font-bold text-gray-900">20 Years of Experience</h4>
                  <p className="text-gray-600 text-sm">
                    Mechanics first, salespeople never. We know what we're talking about under the hood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - The difference */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <h3 className="text-3xl font-black text-gray-900 mb-6">The CarMates Difference</h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
            Searching for your next vehicle shouldn't be stressful. At CarMates Australia, we're reimagining the Australian car-buying experience by focusing on what truly matters: the Australian car-buying experience by focusing on what truly matters – <strong>honest advice</strong> and <strong>human connection</strong>. While other platforms feast on inventory volume, we focus on the quality of the journey. Every vehicle listed here has been personally vetted by our Mates. Every price is transparent. Every question gets answered by a real human who actually knows cars. You're not joining a marketplace – you're joining a community that values honest advice and long-term satisfaction. Experience the difference today – where buying a car feels like it's for a friend.
          </p>
        </div>
      </div>
    </section>
  );
}
