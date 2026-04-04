import { X, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useState } from 'react';

export default function ProductDetailModal({ product, isOpen, onClose }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (!isOpen || !product) return null;

  // For Cars: Use multiple images (main + extras)
  // For Parts: Use only the single image
  const images = product.type === 'car' 
    ? [product.image, ...(product.extraImages || [])] 
    : [product.image];

  const currentImage = images[currentImageIndex] || product.image;

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-50" onClick={onClose} />
      
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-zinc-900 border border-zinc-700 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-700">
            <h2 className="text-2xl font-semibold">Product Details</h2>
            <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-xl">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* Image Gallery - Only for Cars */}
              <div>
                <div className="relative">
                  <img 
                    src={currentImage} 
                    alt={product.title}
                    className="w-full aspect-video object-cover rounded-3xl"
                  />
                  
                  {/* Image Navigation (only show if multiple images) */}
                  {images.length > 1 && (
                    <div className="flex gap-3 mt-4 justify-center">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === currentImageIndex 
                              ? 'bg-accent scale-125' 
                              : 'bg-zinc-600 hover:bg-zinc-500'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Image Type Labels */}
                {product.type === 'car' && (
                  <div className="mt-6 flex gap-4 text-sm">
                    <div className="px-4 py-2 bg-zinc-800 rounded-2xl">Exterior</div>
                    <div className="px-4 py-2 bg-zinc-800 rounded-2xl">Interior</div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-zinc-800 text-xs px-4 py-1.5 rounded-full">
                    {product.condition || product.compatible || product.category}
                  </span>
                  {product.year && (
                    <span className="bg-zinc-800 text-xs px-4 py-1.5 rounded-full">
                      {product.year}
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
                <p className="text-zinc-400 mb-6">{product.location}</p>
                
                <div className="text-5xl font-bold text-accent mb-8">
                  {formatPrice(product.price)}
                </div>

                {product.make && product.model && (
                  <div className="mb-6">
                    <p className="text-sm text-zinc-400">Make / Model</p>
                    <p className="font-medium text-lg">{product.make} {product.model}</p>
                  </div>
                )}

                {product.compatible && (
                  <div className="mb-8">
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