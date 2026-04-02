import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { mockCars, mockParts } from '../../data/mockData';

export default function ProductGrid({ type }) {
  const [searchTerm, setSearchTerm] = useState('');

  const products = type === 'cars' ? mockCars : mockParts;

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;
    return products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.make && product.make.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (product.model && product.model.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (product.compatible && product.compatible.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [products, searchTerm]);

  return (
    <div>
      {/* Search Bar for Products */}
      <div className="mb-8">
        <input
          type="text"
          placeholder={`Search ${type === 'cars' ? 'cars...' : 'parts...'}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-accent placeholder-zinc-500"
        />
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-zinc-400">No matching {type} found</p>
          <p className="text-sm text-zinc-500 mt-2">Try a different search term</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}