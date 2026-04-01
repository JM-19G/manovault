import ProductCard from './ProductCard';
import { mockCars, mockParts } from '../../data/mockData';

export default function ProductGrid({ type }) {
  const products = type === 'cars' ? mockCars : mockParts;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}