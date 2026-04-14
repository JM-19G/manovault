import { useCartStore } from '../store/cartStore';
import ProductCard from '../components/marketplace/ProductCard';

export default function SavedItems() {
  const favorites = useCartStore((state) => state.favorites);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-10">Saved Items</h1>

      {favorites.length === 0 ? (
        <p className="text-zinc-400">No saved items yet.</p>
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