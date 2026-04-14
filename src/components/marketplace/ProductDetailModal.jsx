import { X, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    if (isOpen && product) setCurrentImageIndex(0);
  }, [isOpen, product?.id]);

  if (!isOpen || !product) return null;

  const primaryImage = (product.imageUrl && product.imageUrl.trim())
    ? product.imageUrl.trim()
    : product.image;

  const images =
    product.type === 'car' && product.extraImages
      ? [primaryImage, ...product.extraImages.filter((img) => img !== primaryImage)]
      : [primaryImage];

  const currentImage = images[currentImageIndex] || primaryImage;
  const canNavigate = images.length > 1;

  const mediaAspect = 
    product.type === 'part' ? 'aspect-[4/3]' : 'aspect-[5/4]';

  const goPrev = () => {
    if (!canNavigate) return;
    setCurrentImageIndex((i) => (i - 1 + images.length) % images.length);
  };

  const goNext = () => {
    if (!canNavigate) return;
    setCurrentImageIndex((i) => (i + 1) % images.length);
  };

  const handleMainImageError = (e) => {
    if (e.currentTarget.dataset.fallbackApplied === '1') return;
    e.currentTarget.dataset.fallbackApplied = '1';
    e.currentTarget.src = product.image;
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70 z-50" onClick={onClose} />

      {/* Modal */}
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

          {/* Content */}
          <div className="flex-1 overflow-auto p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* Images Section */}
              <div>
                <div className="relative bg-black rounded-3xl overflow-hidden">
                  <img
                    src={currentImage}
                    alt={product.title}
                    className={`w-full ${mediaAspect} object-cover`}
                    referrerPolicy="no-referrer"
                    onError={handleMainImageError}
                  />

                  {canNavigate && (
                    <>
                      {/* Left Arrow */}
                      <button
                        onClick={goPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/85 border border-white/10 w-10 h-10 rounded-xl flex items-center justify-center"
                      >
                        <ChevronLeft className="w-5 h-5 text-white" />
                      </button>

                      {/* Right Arrow */}
                      <button
                        onClick={goNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/85 border border-white/10 w-10 h-10 rounded-xl flex items-center justify-center"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>

                      {/* Counter */}
                      <div className="absolute bottom-3 right-3 bg-black/70 px-3 py-1 rounded-full text-xs text-white">
                        {currentImageIndex + 1} / {images.length}
                      </div>
                    </>
                  )}
                </div>

                {/* ✅ CLEAN SMALL THUMBNAILS */}
                {canNavigate && (
                  <div className="mt-4 flex justify-center">
                    <div className="flex gap-2 bg-zinc-800/50 p-2 rounded-2xl">
                      {images.map((img, index) => (
                        <button
                          key={img + index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-12 h-9 rounded-lg overflow-hidden border transition-all ${
                            index === currentImageIndex
                              ? 'border-accent scale-105'
                              : 'border-zinc-700 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.condition && (
                      <span className="bg-zinc-800 px-4 py-1.5 rounded-full text-xs">
                        {product.condition}
                      </span>
                    )}
                    {product.year && (
                      <span className="bg-zinc-800 px-4 py-1.5 rounded-full text-xs">
                        {product.year}
                      </span>
                    )}
                  </div>

                  <h1 className="text-3xl font-bold">{product.title}</h1>
                  <p className="text-zinc-400">{product.location}</p>
                </div>

                <div className="text-4xl font-bold text-accent">
                  {formatPrice(product.price)}
                </div>

                {product.make && product.model && (
                  <div>
                    <p className="text-sm text-zinc-400">Make / Model</p>
                    <p className="font-semibold">
                      {product.make} {product.model}
                    </p>
                  </div>
                )}

                {product.compatible && (
                  <div>
                    <p className="text-sm text-zinc-400">Compatible with</p>
                    <p>{product.compatible}</p>
                  </div>
                )}

                <button
                  onClick={() => {
                    addToCart(product);
                    onClose();
                  }}
                  className="w-full mt-6 bg-accent hover:bg-cyan-300 text-zinc-950 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 active:scale-[0.99] transition"
                >
                  <ShoppingCart className="w-5 h-5" />
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
