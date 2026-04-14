import { Car, User, ShoppingCart, Plus, Heart } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useState } from 'react';
import CartDrawer from './CartDrawer';
import SellModal from './SellModal';
import AccountModal from './AccountModal';

export default function Header({ setPage }) {
  const cart = useCartStore((state) => state.cart);
  const favorites = useCartStore((state) => state.favorites);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <>
      <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <div 
            onClick={() => setPage('home')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
              <Car className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">ManoVault</h1>
              <p className="text-xs text-zinc-500 -mt-1">Cars & Auto Parts</p>
            </div>
          </div>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button 
              onClick={() => setPage('home')}
              className="hover:text-accent transition-colors"
            >
              Browse Cars
            </button>

            <button 
              onClick={() => setPage('home')}
              className="hover:text-accent transition-colors"
            >
              Browse Parts
            </button>

            <button 
              onClick={() => setIsSellOpen(true)}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Plus className="w-4 h-4" /> Sell
            </button>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* ❤️ FAVORITES */}
            <button
              onClick={() => setPage('saved')}
              className="relative p-3 hover:bg-zinc-800 rounded-xl transition-colors"
            >
              <Heart className="w-6 h-6" />
              {favorites.length > 0 && (
                <div className="absolute -top-1 -right-1 bg-cyan-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {favorites.length}
                </div>
              )}
            </button>

            {/* 🛒 CART */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-3 hover:bg-zinc-800 rounded-xl transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <div className="absolute -top-1 -right-1 bg-cyan-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </div>
              )}
            </button>

            {/* ACCOUNT */}
            <button 
              onClick={() => setIsAccountOpen(true)}
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:bg-zinc-100 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Account</span>
            </button>
          </div>
        </div>
      </header>

      {/* MODALS */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SellModal isOpen={isSellOpen} onClose={() => setIsSellOpen(false)} />
      <AccountModal isOpen={isAccountOpen} onClose={() => setIsAccountOpen(false)} />
    </>
  );
}