import { ShoppingCart, Trash2, X } from 'lucide-react';
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

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-50" onClick={onClose} />

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-zinc-950/75 backdrop-blur-2xl border-l border-white/10 shadow-2xl z-50 flex flex-col">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Your Cart ({cart.length})</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-2xl transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <div className="mx-auto w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-6">
                <ShoppingCart className="w-10 h-10 text-accent" />
              </div>
              <p className="text-xl text-zinc-400">Your cart is empty</p>
              <p className="text-sm text-zinc-500 mt-2">Add some cars or parts to get started</p>
            </div>
          ) : (
            cart.map((item) => {
              const itemImage =
                item.imageUrl && item.imageUrl.trim() ? item.imageUrl.trim() : item.image;

              return (
                <div
                  key={item.id}
                  className="flex gap-4 bg-white/5 border border-white/10 rounded-3xl p-4"
                >
                  <img
                    src={itemImage}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-2xl flex-shrink-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium line-clamp-2 mb-1">{item.title}</h4>
                    <p className="text-sm text-zinc-400">{item.location}</p>
                    <p className="text-accent font-semibold mt-1">{formatPrice(item.price)}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-300 self-start p-2 rounded-2xl hover:bg-white/5 transition-colors"
                    aria-label="Remove from cart"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 space-y-4">
            <div className="flex justify-between text-lg font-medium">
              <span>Total</span>
              <span className="text-accent">{formatPrice(totalPrice)}</span>
            </div>

            <button
              onClick={() => {
                alert(
                  'Redirecting to Paystack...\\n\\nPayment successful (demo).\\n\\nThank you for shopping on ManoVault.'
                );
                clearCart();
                onClose();
              }}
              className="w-full bg-[#00A65A] hover:bg-[#00A65A]/90 text-white py-4 rounded-3xl font-semibold text-lg flex items-center justify-center gap-3 transition-all active:scale-95"
            >
              <span>Pay with Paystack</span>
              <span className="text-xs bg-white/10 border border-white/10 px-2 py-1 rounded-full">
                NGN
              </span>
            </button>

            <button onClick={clearCart} className="w-full text-red-300 hover:text-red-200 py-3 text-sm">
              Clear All Items
            </button>

            <p className="text-center text-xs text-zinc-500">Secure checkout powered by Paystack</p>
          </div>
        )}
      </div>
    </>
  );
}

