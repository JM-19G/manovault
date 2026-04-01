import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function VehicleSelector() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const makes = [
    'Toyota', 'Honda', 'Mercedes-Benz', 'Lexus', 'Hyundai', 
    'Kia', 'Ford', 'Nissan', 'Volkswagen', 'BMW'
  ];

  const models = {
    'Toyota': ['Camry', 'Corolla', 'Hilux', 'RAV4', 'Land Cruiser'],
    'Honda': ['Accord', 'Civic', 'CR-V', 'Pilot'],
    'Mercedes-Benz': ['C-Class', 'E-Class', 'GLC', 'GLE'],
    'Lexus': ['RX', 'ES', 'NX', 'GX'],
    'Hyundai': ['Tucson', 'Santa Fe', 'Elantra', 'Accent'],
    'Kia': ['Sorento', 'Sportage', 'Optima'],
    'Ford': ['Explorer', 'Escape', 'Ranger'],
    'Nissan': ['Altima', 'Pathfinder', 'X-Trail']
  };

  const years = Array.from({ length: 15 }, (_, i) => (2026 - i).toString());

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Make */}
      <div>
        <label className="block text-sm text-zinc-400 mb-2">Make</label>
        <div className="relative">
          <select 
            value={make}
            onChange={(e) => {
              setMake(e.target.value);
              setModel(''); // reset model when make changes
            }}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-accent"
          >
            <option value="">Select Make</option>
            {makes.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-5 top-5 w-5 h-5 text-zinc-500 pointer-events-none" />
        </div>
      </div>

      {/* Model */}
      <div>
        <label className="block text-sm text-zinc-400 mb-2">Model</label>
        <div className="relative">
          <select 
            value={model}
            onChange={(e) => setModel(e.target.value)}
            disabled={!make}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-accent disabled:opacity-50"
          >
            <option value="">Select Model</option>
            {make && models[make] && models[make].map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-5 top-5 w-5 h-5 text-zinc-500 pointer-events-none" />
        </div>
      </div>

      {/* Year */}
      <div>
        <label className="block text-sm text-zinc-400 mb-2">Year</label>
        <div className="relative">
          <select 
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-accent"
          >
            <option value="">Select Year</option>
            {years.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-5 top-5 w-5 h-5 text-zinc-500 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}