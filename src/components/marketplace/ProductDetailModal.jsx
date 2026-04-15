import { ChevronLeft, ChevronRight, ShoppingCart, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useCartStore } from '../../store/cartStore';

export default function ProductDetailModal({ product, isOpen, onClose }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen && product) setCurrentImageIndex(0);
  }, [isOpen, product?.id]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  const primaryImage = useMemo(() => {
    if (product?.imageUrl && product.imageUrl.trim()) return product.imageUrl.trim();
    return product?.image;
  }, [product]);

  const images = useMemo(() => {
    if (!product) return [];
    if (product.type === 'car' && Array.isArray(product.extraImages) && product.extraImages.length) {
      const extras = product.extraImages.filter((img) => img && img !== primaryImage);
      return [primaryImage, ...extras].filter(Boolean);
    }
    return [primaryImage].filter(Boolean);
  }, [product, primaryImage]);

  const canNavigate = images.length > 1;
  const currentImage = images[currentImageIndex] || primaryImage;

  const mediaAspect = product?.type === 'part' ? 'aspect-[4/3]' : 'aspect-[5/4]';

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
    e.currentTarget.src = product?.image;
  };

  if (!isOpen || !product) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-50" onClick={onClose} />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-zinc-950/75 backdrop-blur-2xl border border-white/10 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-2xl font-semibold">Product Details</h2>
            <button
              onClick={onClose}
              className="p-3 hover:bg-white/5 rounded-2xl transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-auto p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <div className="relative bg-black rounded-3xl overflow-hidden border border-white/10">
                  <img
                    src={currentImage}
                    alt={product.title}
                    className={`w-full ${mediaAspect} object-cover`}
                    referrerPolicy="no-referrer"
                    onError={handleMainImageError}
                  />

                  {canNavigate && (
                    <>
                      <button
                        type="button"
                        onClick={goPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 border border-white/10 w-11 h-11 rounded-2xl flex items-center justify-center transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>
                      <button
                        type="button"
                        onClick={goNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 border border-white/10 w-11 h-11 rounded-2xl flex items-center justify-center transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>

                      <div className="absolute bottom-4 right-4 bg-black/60 border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-white">
                        {currentImageIndex + 1} / {images.length}
                      </div>
                    </>
                  )}
                </div>

                {canNavigate && (
                  <div className="flex justify-center gap-3 mt-6">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3.5 h-3.5 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-accent scale-125' : 'bg-zinc-600 hover:bg-zinc-400'
                        }`}
                        aria-label={`View image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.condition && (
                      <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs">
                        {product.condition}
                      </span>
                    )}
                    {product.year && (
                      <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs">
                        {product.year}
                      </span>
                    )}
                    {product.category && (
                      <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs">
                        {product.category}
                      </span>
                    )}
                  </div>

                  <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                  <p className="text-zinc-400 text-lg">{product.location}</p>
                </div>

                <div className="text-5xl font-extrabold text-accent tracking-tight">
                  {formatPrice(product.price)}
                </div>

                {product.make && product.model && (
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Make / Model</p>
                    <p className="font-semibold text-xl">
                      {product.make} {product.model}
                    </p>
                  </div>
                )}

                {product.compatible && (
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Compatible with</p>
                    <p className="font-medium">{product.compatible}</p>
                  </div>
                )}

                {product.specs && (
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
                    <p className="text-sm text-zinc-400 mb-3">Key details</p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      {product.specs.transmission && (
                        <div className="text-zinc-300">
                          <span className="text-zinc-500">Transmission: </span>
                          {product.specs.transmission}
                        </div>
                      )}
                      {product.specs.fuel && (
                        <div className="text-zinc-300">
                          <span className="text-zinc-500">Fuel: </span>
                          {product.specs.fuel}
                        </div>
                      )}
                      {product.specs.drivetrain && (
                        <div className="text-zinc-300">
                          <span className="text-zinc-500">Drive: </span>
                          {product.specs.drivetrain}
                        </div>
                      )}
                      {typeof product.specs.mileageKm === 'number' && (
                        <div className="text-zinc-300">
                          <span className="text-zinc-500">Mileage: </span>
                          {product.specs.mileageKm.toLocaleString()} km
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => {
                    addToCart(product);
                    onClose();
                  }}
                  className="w-full mt-8 bg-gradient-to-r from-accent to-cyan-300 hover:brightness-105 text-zinc-950 py-5 rounded-3xl font-semibold text-lg flex items-center justify-center gap-3 transition-all active:scale-[0.99] shadow-lg shadow-cyan-500/15"
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

