import React, { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import ProductDetailModal from './ProductDetailModal';

function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const favorites = useCartStore((state) => state.favorites);
  const toggleFavorite = useCartStore((state) => state.toggleFavorite);

  const [showDetail, setShowDetail] = useState(false);
  const [imageReady, setImageReady] = useState(false);

  const isFavorite = favorites.some((item) => item.id === product.id);
  const isPart = product.type === 'part';

  const imageSrc =
    product.imageUrl && product.imageUrl.trim()
      ? product.imageUrl.trim()
      : product.image;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setShowDetail(true)}
        className="group cursor-pointer bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_60px_-35px_rgba(0,0,0,0.85)] hover:border-white/20 hover:-translate-y-0.5 transition-all will-change-transform"
      >

        {/* IMAGE */}
        <div className="relative overflow-hidden">
          
          {/* Loading Skeleton */}
          {!imageReady && (
            <div className="absolute inset-0 bg-zinc-800 animate-pulse"></div>
          )}

          <img
            src={imageSrc}
            alt={product.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            onLoad={() => setImageReady(true)}
            onError={(e) => {
              // Many hosts block hotlinking; fall back to the local placeholder.
              if (e.currentTarget.dataset.fallbackApplied === '1') return;
              e.currentTarget.dataset.fallbackApplied = '1';
              e.currentTarget.src = product.image;
              setImageReady(true);
            }}
            className={`w-full ${isPart ? 'h-56' : 'h-48'} object-cover transition-opacity duration-300 ${imageReady ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

          {/* Badge */}
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur text-xs px-3 py-1 rounded-full border border-white/10">
            {product.condition || product.compatible}
          </div>

          {/* ❤️ Wishlist */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(product);
            }}
            className="absolute top-3 left-3 w-10 h-10 rounded-2xl bg-black/45 backdrop-blur-md flex items-center justify-center border border-white/10 transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <Heart
              className={`w-4 h-4 ${
                isFavorite ? 'fill-cyan-400 text-cyan-400' : 'text-white'
              }`}
            />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-5 space-y-3">

          {/* Title */}
          <h3 className="font-semibold text-[15px] md:text-base leading-tight line-clamp-2">
            {product.title}
          </h3>

          {/* Location */}
          <p className="text-zinc-400 text-sm">
            {product.location}
          </p>

          {/* Price + Button */}
          <div className="flex items-center justify-between mt-4">

            {/* Price */}
            <span className="text-accent font-extrabold text-lg tracking-tight">
              {formatPrice(product.price)}
            </span>

            {/* Add Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
              className="bg-gradient-to-r from-accent to-cyan-300 text-zinc-950 px-4 py-2 rounded-2xl flex items-center gap-2 text-sm font-semibold hover:brightness-105 active:scale-95 transition shadow-lg shadow-cyan-500/15"
              >
              <ShoppingCart className="w-4 h-4" />
               Add
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <ProductDetailModal
        product={product}
        isOpen={showDetail}
        onClose={() => setShowDetail(false)}
      />
    </>
  );
}
export default React.memo(ProductCard);
