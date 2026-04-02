import { useState } from 'react';
import { Car, Wrench, Search } from 'lucide-react';
import VehicleSelector from '../components/common/VehicleSelector';
import ProductGrid from '../components/marketplace/ProductGrid';

export default function Home() {
  const [activeTab, setActiveTab] = useState('cars');

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-zinc-900 to-black">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
            Your Vault for<br />
            <span className="text-accent">Every Car</span> &amp; <span className="text-accent">Every Part</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
            Buy new &amp; used cars or find any auto part in Nigeria.<br />
            Fast. Reliable. From Lagos to anywhere.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveTab('cars')}
              className={`px-10 py-4 rounded-2xl font-semibold flex items-center gap-3 text-lg transition-all ${activeTab === 'cars' 
                ? 'bg-accent text-black shadow-lg shadow-accent/30' 
                : 'border-2 border-zinc-700 hover:border-white'}`}
            >
              <Car className="w-6 h-6" /> 
              Browse Cars
            </button>

            <button 
              onClick={() => setActiveTab('parts')}
              className={`px-10 py-4 rounded-2xl font-semibold flex items-center gap-3 text-lg transition-all ${activeTab === 'parts' 
                ? 'bg-accent text-black shadow-lg shadow-accent/30' 
                : 'border-2 border-zinc-700 hover:border-white'}`}
            >
              <Wrench className="w-6 h-6" /> 
              Browse Parts
            </button>
          </div>
        </div>
      </section>

      {/* Search Bar + Vehicle Selector */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10 pb-12">
        <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-8 shadow-2xl">
          <div className="relative mb-6">
            <Search className="absolute left-6 top-5 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Search Toyota Camry, engine parts, tyres..." 
              className="w-full bg-zinc-800 border border-zinc-700 pl-16 py-4 rounded-2xl text-lg focus:outline-none focus:border-accent placeholder-zinc-500"
            />
          </div>

          <VehicleSelector />
        </div>
      </div>

              {/* Products Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-semibold">
            {activeTab === 'cars' ? 'Featured Cars' : 'Popular Auto Parts'}
          </h2>
          <p className="text-zinc-400 text-sm">
            {activeTab === 'cars' ? 'New & Used Vehicles' : 'Genuine & Aftermarket Parts'}
          </p>
        </div>
        
        <ProductGrid type={activeTab} />
      </div>
    </>
  );
}