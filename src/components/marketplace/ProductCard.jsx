import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-accent transition-all group">
      <div className="relative h-56">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full text-xs font-medium">
          {product.condition || product.compatible}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{product.title}</h3>
        <p className="text-sm text-zinc-400 mb-3">{product.location}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-accent">
              {formatPrice(product.price)}
            </span>
          </div>
          
          <button 
            onClick={() => addToCart(product)}
            className="bg-accent hover:bg-cyan-400 text-black px-5 py-3 rounded-2xl font-medium flex items-center gap-2 transition-all active:scale-95"
          >
            <ShoppingCart className="w-5 h-5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}