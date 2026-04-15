import { Car, User, ShoppingCart, Plus, Heart } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useEffect, useMemo, useState } from 'react';
import CartDrawer from './CartDrawer';
import SellModal from './SellModal';
import AccountModal from './AccountModal';

export default function Header({ setPage }) {
  const cart = useCartStore((state) => state.cart);
  const favorites = useCartStore((state) => state.favorites);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [cartBump, setCartBump] = useState(false);
  const [favBump, setFavBump] = useState(false);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + (item.quantity || 1), 0),
    [cart]
  );

  const favoritesCount = favorites.length;

  useEffect(() => {
    if (cartCount <= 0) return;
    setCartBump(true);
    const t = setTimeout(() => setCartBump(false), 220);
    return () => clearTimeout(t);
  }, [cartCount]);

  useEffect(() => {
    if (favoritesCount <= 0) return;
    setFavBump(true);
    const t = setTimeout(() => setFavBump(false), 220);
    return () => clearTimeout(t);
  }, [favoritesCount]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <div 
            onClick={() => setPage('home')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-accent to-cyan-300 flex items-center justify-center shadow-lg shadow-cyan-500/15">
              <Car className="w-6 h-6 text-zinc-950" />
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
              className="text-zinc-200 hover:text-accent transition-colors"
            >
              Browse Cars
            </button>

            <button 
              onClick={() => setPage('home')}
              className="text-zinc-200 hover:text-accent transition-colors"
            >
              Browse Parts
            </button>

            <button 
              onClick={() => setIsSellOpen(true)}
              className="flex items-center gap-2 text-zinc-200 hover:text-accent transition-colors"
            >
              <Plus className="w-4 h-4" /> Sell
            </button>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* ❤️ FAVORITES */}
            <button
              onClick={() => setPage('saved')}
              className="relative p-3 hover:bg-white/5 rounded-2xl transition-colors"
            >
              <Heart className="w-6 h-6" />
              {favoritesCount > 0 && (
                <div
                  className={`absolute -top-1 -right-1 bg-rose-500 text-white text-xs font-bold min-w-5 h-5 px-1 rounded-full flex items-center justify-center shadow shadow-rose-500/25 ${
                    favBump ? 'scale-110' : 'scale-100'
                  } transition-transform`}
                >
                  {favoritesCount}
                </div>
              )}
            </button>

            {/* 🛒 CART */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-3 hover:bg-white/5 rounded-2xl transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <div
                  className={`absolute -top-1 -right-1 bg-rose-500 text-white text-xs font-bold min-w-5 h-5 px-1 rounded-full flex items-center justify-center shadow shadow-rose-500/25 ${
                    cartBump ? 'scale-110' : 'scale-100'
                  } transition-transform`}
                >
                  {cartCount}
                </div>
              )}
            </button>

            {/* ACCOUNT */}
            <button 
              onClick={() => setIsAccountOpen(true)}
              className="flex items-center gap-2 bg-white/95 text-zinc-950 px-6 py-3 rounded-2xl font-semibold hover:bg-white transition-colors shadow-lg shadow-black/20"
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
