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

  // Handle images for Cars vs Parts
  const images = product.type === 'car' && product.extraImages 
    ? [product.image, ...product.extraImages.filter(img => img !== product.image)] 
    : [product.image];

  const currentImage = images[currentImageIndex] || product.image;

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-50" onClick={onClose} />
      
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-zinc-900 border border-zinc-700 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-700">
            <h2 className="text-2xl font-semibold">Product Details</h2>
            <button 
              onClick={onClose} 
              className="p-3 hover:bg-zinc-800 rounded-2xl transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-auto p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* Images Section */}
              <div>
                <div className="relative bg-black rounded-3xl overflow-hidden">
                  <img 
                    src={currentImage} 
                    alt={product.title}
                    className="w-full aspect-video object-cover"
                  />
                </div>

                {/* Navigation Dots - only show if multiple images */}
                {images.length > 1 && (
                  <div className="flex justify-center gap-3 mt-6">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3.5 h-3.5 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'bg-accent scale-125' 
                            : 'bg-zinc-600 hover:bg-zinc-400'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Product Information */}
              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.condition && (
                      <span className="bg-zinc-800 px-4 py-1.5 rounded-full text-xs font-medium">
                        {product.condition}
                      </span>
                    )}
                    {product.year && (
                      <span className="bg-zinc-800 px-4 py-1.5 rounded-full text-xs font-medium">
                        {product.year}
                      </span>
                    )}
                  </div>

                  <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                  <p className="text-zinc-400 text-lg">{product.location}</p>
                </div>

                <div className="text-5xl font-bold text-accent tracking-tight">
                  {formatPrice(product.price)}
                </div>

                {product.make && product.model && (
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Make / Model</p>
                    <p className="font-semibold text-xl">{product.make} {product.model}</p>
                  </div>
                )}

                {product.compatible && (
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Compatible with</p>
                    <p className="font-medium">{product.compatible}</p>
                  </div>
                )}

                <button
                  onClick={() => {
                    addToCart(product);
                    onClose();
                  }}
                  className="w-full mt-8 bg-accent hover:bg-cyan-400 text-black py-5 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
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