import { X, Trash2 } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/70 z-50"
        onClick={onClose}
      />
      
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-zinc-900 border-l border-zinc-700 shadow-2xl z-50 flex flex-col">
        <div className="p-6 border-b border-zinc-700 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Your Cart ({cart.length})</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-xl transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <div className="mx-auto w-20 h-20 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 text-4xl">🛒</div>
              <p className="text-xl text-zinc-400">Your cart is empty</p>
              <p className="text-sm text-zinc-500 mt-2">Add some cars or parts to get started</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 bg-zinc-800 rounded-2xl p-4">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium line-clamp-2 mb-1">{item.title}</h4>
                  <p className="text-sm text-zinc-400">{item.location}</p>
                  <p className="text-accent font-semibold mt-1">
                    {formatPrice(item.price)}
                  </p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-500 self-start p-1"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-zinc-700 space-y-4">
            <div className="flex justify-between text-lg font-medium">
              <span>Total</span>
              <span className="text-accent">{formatPrice(totalPrice)}</span>
            </div>
            
            <button 
              onClick={() => alert("✅ Checkout with Paystack coming soon!")}
              className="w-full bg-accent hover:bg-cyan-400 text-black py-4 rounded-2xl font-semibold text-lg active:scale-95 transition-all"
            >
              Proceed to Checkout
            </button>
            
            <button 
              onClick={clearCart}
              className="w-full text-red-400 hover:text-red-500 py-3 text-sm"
            >
              Clear All Items
            </button>
          </div>
        )}
      </div>
    </>
  );
}