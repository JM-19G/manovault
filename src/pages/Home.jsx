import { useState } from 'react';
import { Car, Wrench } from 'lucide-react';
import VehicleSelector from '../components/common/VehicleSelector';
import ProductGrid from '../components/marketplace/ProductGrid';

export default function Home({ activeTab, setActiveTab }) {
  const [filters, setFilters] = useState({ make: '', model: '', year: '' });

  return (
    <>
      {/* 🚀 HERO SECTION */}
      <section className="relative pt-28 pb-24 text-center overflow-hidden">
        <div aria-hidden="true" className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-cyan-500/25 via-blue-500/15 to-transparent blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-56 right-0 w-[700px] h-[420px] bg-gradient-to-l from-cyan-500/15 via-transparent to-transparent blur-3xl" />
        <div className="max-w-5xl mx-auto px-6">

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Your Vault for <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Every Car & Every Part
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Buy new & used cars or find any auto part in Nigeria. 
            Fast, reliable, and built for you.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveTab('cars')}
              className={`px-8 py-3 rounded-2xl font-semibold flex items-center gap-2 transition-all shadow-lg ${
                activeTab === 'cars'
                  ? 'bg-gradient-to-r from-accent to-cyan-300 text-zinc-950 shadow-cyan-500/20'
                  : 'border border-white/10 hover:border-white/20 bg-white/5 backdrop-blur'
              }`}
            >
              <Car className="w-5 h-5" /> Browse Cars
            </button>

            <button 
              onClick={() => setActiveTab('parts')}
              className={`px-8 py-3 rounded-2xl font-semibold flex items-center gap-2 transition-all shadow-lg ${
                activeTab === 'parts'
                  ? 'bg-gradient-to-r from-accent to-cyan-300 text-zinc-950 shadow-cyan-500/20'
                  : 'border border-white/10 hover:border-white/20 bg-white/5 backdrop-blur'
              }`}
            >
              <Wrench className="w-5 h-5" /> Browse Parts
            </button>
          </div>

        </div>
      </section>

      {/* 🔍 SEARCH / FILTER */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10 pb-12">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/30">
          <VehicleSelector onFilterChange={setFilters} />
        </div>
      </div>

      {/* 🚗 PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            {activeTab === 'cars' ? 'Featured Cars' : 'Popular Auto Parts'}
          </h2>
          <p className="text-zinc-400 text-sm">
            {activeTab === 'cars' ? 'New & Used Vehicles' : 'Genuine & Aftermarket Parts'}
          </p>
        </div>

        <ProductGrid type={activeTab} filters={filters} />
      </div>
    </>
  );
}
