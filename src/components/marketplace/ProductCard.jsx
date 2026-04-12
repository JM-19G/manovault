import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useState } from 'react';
import ProductDetailModal from './ProductDetailModal';

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [showDetail, setShowDetail] = useState(false);

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
        className="group cursor-pointer bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
      >
        
        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <img
            src={imageSrc}
            alt={product.title}
            className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
          />

          {/* Badge */}
          <div className="absolute top-3 right-3 bg-black/70 text-xs px-3 py-1 rounded-full">
            {product.condition || product.compatible}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-3">

          {/* Title */}
          <h3 className="font-semibold text-base leading-tight line-clamp-2">
            {product.title}
          </h3>

          {/* Location */}
          <p className="text-zinc-400 text-sm">
            {product.location}
          </p>

          {/* Price + Button */}
          <div className="flex items-center justify-between mt-4">

            {/* Price */}
            <span className="text-cyan-400 font-bold text-lg tracking-tight">
              {formatPrice(product.price)}
            </span>

            {/* Add Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
              className="bg-cyan-400 hover:bg-cyan-300 text-black px-3 py-2 rounded-lg flex items-center gap-1 text-sm font-medium shadow-md shadow-cyan-500/20 transition-all active:scale-95"
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