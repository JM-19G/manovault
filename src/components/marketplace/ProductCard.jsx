export default function ProductCard({ product }) {
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
        <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-xs">
          {product.condition || product.compatible}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{product.title}</h3>
        <p className="text-sm text-zinc-400 mb-4">{product.location}</p>
        
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-bold text-accent">
              {formatPrice(product.price)}
            </span>
          </div>
          <button className="bg-accent hover:bg-cyan-400 text-black px-6 py-2.5 rounded-2xl font-medium text-sm transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}