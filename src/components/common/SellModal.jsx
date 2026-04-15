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
    alert('Item listed successfully (demo). Backend integration coming soon.');
    onClose();
    setFormData({ type: 'car', title: '', price: '', location: 'Lagos', description: '' });
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-50" onClick={onClose} />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-zinc-950/75 backdrop-blur-2xl border border-white/10 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-2xl font-semibold">Sell on ManoVault</h2>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-2xl">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label className="block text-sm text-zinc-400 mb-2">What are you selling?</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'car' })}
                  className={`flex-1 py-4 rounded-2xl font-medium transition-colors ${
                    formData.type === 'car'
                      ? 'bg-gradient-to-r from-accent to-cyan-300 text-zinc-950'
                      : 'bg-white/5 border border-white/10 hover:border-white/20'
                  }`}
                >
                  Car
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'part' })}
                  className={`flex-1 py-4 rounded-2xl font-medium transition-colors ${
                    formData.type === 'part'
                      ? 'bg-gradient-to-r from-accent to-cyan-300 text-zinc-950'
                      : 'bg-white/5 border border-white/10 hover:border-white/20'
                  }`}
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
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-zinc-950/40 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent focus:ring-2 focus:ring-cyan-500/20"
                placeholder="e.g. Toyota Camry 2022 or Brake Pads"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Price (NGN)</label>
                <input
                  type="number"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full bg-zinc-950/40 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="18500000"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Location</label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-zinc-950/40 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent focus:ring-2 focus:ring-cyan-500/20"
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
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-zinc-950/40 border border-white/10 rounded-3xl px-5 py-4 h-32 focus:outline-none focus:border-accent focus:ring-2 focus:ring-cyan-500/20"
                placeholder="Add more details..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-accent to-cyan-300 hover:brightness-105 text-zinc-950 py-4 rounded-3xl font-semibold text-lg transition-all active:scale-95 shadow-lg shadow-cyan-500/15"
            >
              List Item for Sale
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

