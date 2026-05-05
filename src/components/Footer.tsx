export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 text-sm">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h4 className="text-white font-bold mb-2">Carmates</h4>
            <p className="max-w-md text-slate-400">
              A trusted car marketplace with human support, honest inspections, and a better buyer experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <h5 className="font-semibold text-white mb-2">Company</h5>
              <ul className="space-y-2 text-slate-400">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-2">Resources</h5>
              <ul className="space-y-2 text-slate-400">
                <li>How it works</li>
                <li>FAQ</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-slate-500 text-center">
          © {new Date().getFullYear()} Carmates. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
