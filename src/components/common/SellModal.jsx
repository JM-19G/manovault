import { X } from 'lucide-react';
import { useState } from 'react';

export default function SellModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    type: 'car',
    title: '',
    price: '',
    location: 'Lagos',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Item listed successfully! (Backend integration coming soon)");
    onClose();
    setFormData({ type: 'car', title: '', price: '', location: 'Lagos', description: '' });
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-50" onClick={onClose} />
      
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-zinc-900 border border-zinc-700 rounded-3xl w-full max-w-lg">
          <div className="flex items-center justify-between p-6 border-b border-zinc-700">
            <h2 className="text-2xl font-semibold">Sell on ManoVault</h2>
            <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-xl">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label className="block text-sm text-zinc-400 mb-2">What are you selling?</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({...formData, type: 'car'})}
                  className={`flex-1 py-4 rounded-2xl font-medium ${formData.type === 'car' ? 'bg-accent text-black' : 'bg-zinc-800 border border-zinc-700'}`}
                >
                  Car
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({...formData, type: 'part'})}
                  className={`flex-1 py-4 rounded-2xl font-medium ${formData.type === 'part' ? 'bg-accent text-black' : 'bg-zinc-800 border border-zinc-700'}`}
                >
                  Part
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-accent"
                placeholder="e.g. Toyota Camry 2022 or Brake Pads"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Price (₦)</label>
                <input
                  type="number"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-accent"
                  placeholder="18500000"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Location</label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-accent"
                >
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Port Harcourt</option>
                  <option>Ibadan</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-3xl px-5 py-4 h-32 focus:border-accent"
                placeholder="Add more details..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-cyan-400 text-black py-4 rounded-2xl font-semibold text-lg transition-all"
            >
              List Item for Sale
            </button>
          </form>
        </div>
      </div>
    </>
  );
}