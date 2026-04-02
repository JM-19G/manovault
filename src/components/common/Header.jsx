import { Car, User, ShoppingCart, Plus } from 'lucide-react';
import { useState } from 'react';
import { useCartStore } from '../../store/cartStore';
import CartDrawer from './CartDrawer';
import SellModal from './SellModal';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);

  return (
    <>
      <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
              <Car className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">ManoVault</h1>
              <p className="text-xs text-zinc-500 -mt-1">Cars & Auto Parts</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-accent transition-colors">Browse Cars</a>
            <a href="#" className="hover:text-accent transition-colors">Browse Parts</a>
            <button 
              onClick={() => setIsSellOpen(true)}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Plus className="w-4 h-4" /> Sell
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-3 hover:bg-zinc-800 rounded-xl transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </div>
              )}
            </button>

            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:bg-zinc-100 transition-colors">
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Account</span>
            </button>
          </div>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SellModal isOpen={isSellOpen} onClose={() => setIsSellOpen(false)} />
    </>
  );
}