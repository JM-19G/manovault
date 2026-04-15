import { useCartStore } from '../store/cartStore';
import ProductCard from '../components/marketplace/ProductCard';

export default function SavedItems() {
  const favorites = useCartStore((state) => state.favorites);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight">Saved Items</h1>
        <p className="text-zinc-400 mt-2">Your favorites in one place.</p>
      </div>

      {favorites.length === 0 ? (
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-zinc-400">
          No saved items yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
