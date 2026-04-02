import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { mockCars, mockParts } from '../../data/mockData';

export default function ProductGrid({ type, filters }) {
  const [searchTerm, setSearchTerm] = useState('');

  const products = type === 'cars' ? mockCars : mockParts;

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = !searchTerm || 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.make && product.make.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (product.model && product.model.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesMake = !filters.make || product.make === filters.make;
      const matchesModel = !filters.model || product.model === filters.model;

      return matchesSearch && matchesMake && matchesModel;
    });
  }, [products, searchTerm, filters]);

  return (
    <div>
      <div className="mb-8">
        <input
          type="text"
          placeholder={`Search ${type === 'cars' ? 'cars' : 'auto parts'}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-accent placeholder-zinc-500"
        />
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-zinc-400">No matching {type} found for your filter</p>
          <p className="text-sm text-zinc-500 mt-2">Try changing the vehicle selection or search term</p>
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