import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],
  favorites: [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);

      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      }

      return {
        cart: [...state.cart, { ...product, quantity: 1 }]
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id)
    })),

  clearCart: () => set({ cart: [] }),

  toggleFavorite: (product) =>
    set((state) => {
      const exists = state.favorites.some((item) => item.id === product.id);

      if (exists) {
        return {
          favorites: state.favorites.filter((item) => item.id !== product.id)
        };
      }

      return {
        favorites: [...state.favorites, product]
      };
    })
}));

