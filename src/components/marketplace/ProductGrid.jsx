import ProductCard from './ProductCard';

const mockCars = [
  {
    id: 1,
    type: 'car',
    title: "Toyota Camry 2022",
    price: 18500000,
    location: "Lagos",
    image: "https://picsum.photos/id/1071/400/300",
    condition: "Used"
  },
  {
    id: 2,
    type: 'car',
    title: "Honda Civic 2023",
    price: 16500000,
    location: "Abuja",
    image: "https://picsum.photos/id/1072/400/300",
    condition: "Used"
  }
];

const mockParts = [
  {
    id: 3,
    type: 'part',
    title: "Toyota Camry Brake Pads",
    price: 45000,
    location: "Lagos",
    image: "https://picsum.photos/id/1060/400/300",
    compatible: "2018-2024 Camry"
  },
  {
    id: 4,
    type: 'part',
    title: "LED Headlights Pair",
    price: 85000,
    location: "Lagos",
    image: "https://picsum.photos/id/1061/400/300",
    compatible: "Most Toyota & Honda"
  }
];

export default function ProductGrid({ type }) {
  const products = type === 'cars' ? mockCars : mockParts;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}