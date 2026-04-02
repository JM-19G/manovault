import { X, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

export default function ProductDetailModal({ product, isOpen, onClose }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (!isOpen || !product) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-50" onClick={onClose} />
      
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-zinc-900 border border-zinc-700 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-zinc-700">
            <h2 className="text-2xl font-semibold">Product Details</h2>
            <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-xl">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full aspect-video object-cover rounded-3xl"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-zinc-800 text-xs px-3 py-1 rounded-full">
                    {product.condition || product.compatible || product.category}
                  </span>
                </div>
                
                <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
                <p className="text-zinc-400 mb-6">{product.location} • {product.year || ''}</p>
                
                <div className="text-4xl font-bold text-accent mb-8">
                  {formatPrice(product.price)}
                </div>

                {product.make && (
                  <div className="mb-6">
                    <p className="text-sm text-zinc-400">Make / Model</p>
                    <p className="font-medium">{product.make} {product.model}</p>
                  </div>
                )}

                {product.compatible && (
                  <div className="mb-6">
                    <p className="text-sm text-zinc-400">Compatible with</p>
                    <p className="font-medium">{product.compatible}</p>
                  </div>
                )}

                <button
                  onClick={() => {
                    addToCart(product);
                    onClose();
                  }}
                  className="w-full bg-accent hover:bg-cyan-400 text-black py-5 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all active:scale-95"
                >
                  <ShoppingCart className="w-6 h-6" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}