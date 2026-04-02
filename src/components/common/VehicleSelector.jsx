import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function VehicleSelector({ onFilterChange }) {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const makes = ['Toyota', 'Honda', 'Mercedes-Benz', 'Lexus', 'Hyundai', 'Kia', 'Ford', 'Nissan'];

  const models = {
    'Toyota': ['Camry', 'Corolla', 'Hilux', 'RAV4'],
    'Honda': ['Civic', 'Accord', 'CR-V'],
    'Mercedes-Benz': ['C-Class', 'E-Class', 'GLC'],
    'Lexus': ['RX', 'ES', 'NX'],
    'Hyundai': ['Tucson', 'Santa Fe'],
  };

  const handleChange = (newMake, newModel, newYear) => {
    setMake(newMake);
    setModel(newModel);
    setYear(newYear);
    onFilterChange?.({ make: newMake, model: newModel, year: newYear });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="block text-sm text-zinc-400 mb-2">Make</label>
        <div className="relative">
          <select 
            value={make}
            onChange={(e) => handleChange(e.target.value, '', '')}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 appearance-none focus:border-accent"
          >
            <option value="">Any Make</option>
            {makes.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <ChevronDown className="absolute right-5 top-5 w-5 h-5 text-zinc-500 pointer-events-none" />
        </div>
      </div>

      <div>
        <label className="block text-sm text-zinc-400 mb-2">Model</label>
        <div className="relative">
          <select 
            value={model}
            onChange={(e) => handleChange(make, e.target.value, year)}
            disabled={!make}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 appearance-none focus:border-accent disabled:opacity-50"
          >
            <option value="">Any Model</option>
            {make && models[make] && models[make].map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-5 top-5 w-5 h-5 text-zinc-500 pointer-events-none" />
        </div>
      </div>

      <div>
        <label className="block text-sm text-zinc-400 mb-2">Year</label>
        <div className="relative">
          <select 
            value={year}
            onChange={(e) => handleChange(make, model, e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 appearance-none focus:border-accent"
          >
            <option value="">Any Year</option>
            {Array.from({ length: 12 }, (_, i) => 2026 - i).map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-5 top-5 w-5 h-5 text-zinc-500 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}