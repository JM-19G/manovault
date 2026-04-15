import { Heart, LogOut, Settings, User, X } from 'lucide-react';
import { useState } from 'react';

export default function AccountModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('profile');

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-50" onClick={onClose} />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-zinc-950/75 backdrop-blur-2xl border border-white/10 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <User className="w-6 h-6" /> My Account
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-2xl">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            <div className="flex gap-2 mb-6 bg-white/5 border border-white/10 p-1 rounded-2xl">
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === 'profile' ? 'bg-zinc-950 shadow' : 'text-zinc-300'
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab('listings')}
                className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === 'listings' ? 'bg-zinc-950 shadow' : 'text-zinc-300'
                }`}
              >
                My Listings
              </button>
            </div>

            {activeTab === 'profile' ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-accent to-cyan-300 rounded-3xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/15">
                    <User className="w-10 h-10 text-zinc-950" />
                  </div>
                  <h3 className="text-xl font-semibold">Manoah</h3>
                  <p className="text-zinc-400">Lagos, Nigeria</p>
                </div>

                <div className="space-y-3">
                  <button className="w-full flex items-center gap-4 p-4 hover:bg-white/5 border border-white/10 rounded-3xl transition-colors">
                    <Heart className="w-5 h-5 text-red-300" />
                    <span>Favorites</span>
                  </button>
                  <button className="w-full flex items-center gap-4 p-4 hover:bg-white/5 border border-white/10 rounded-3xl transition-colors">
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                  </button>
                  <button className="w-full flex items-center gap-4 p-4 hover:bg-white/5 border border-white/10 rounded-3xl transition-colors text-red-300">
                    <LogOut className="w-5 h-5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-zinc-400">You have no active listings yet.</p>
                <button onClick={onClose} className="mt-6 text-accent hover:underline">
                  Start selling
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

