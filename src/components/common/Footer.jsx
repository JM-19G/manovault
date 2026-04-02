export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center">
                🚗
              </div>
              <h3 className="text-2xl font-bold">ManoVault</h3>
            </div>
            <p className="text-zinc-400">Nigeria's trusted marketplace for cars and auto parts.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Marketplace</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>Browse Cars</li>
              <li>Browse Parts</li>
              <li>Sell Your Item</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>Help Center</li>
              <li>Shipping Policy</li>
              <li>Return Policy</li>
            </ul>
            <p className="text-xs text-zinc-500 mt-6">Made with ❤️ in Lagos, Nigeria</p>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-sm text-zinc-500">
          © 2026 ManoVault. All rights reserved.
        </div>
      </div>
    </footer>
  );
}