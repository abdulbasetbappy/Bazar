// store/cart.ts
import { defineStore } from 'pinia';

interface CartState {
  cartItems: CartItem[];
}

interface CartItem {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
}

export const useCartStore = defineStore({
  id: 'cart',
  state: (): CartState => ({
    cartItems: [] as CartItem[],
  }),
  getters: {
    cartCount: (state) => state.cartItems.reduce((count, item) => count + item.quantity, 0),
  },
  actions: {
    addToCart(newItem: CartItem) {
      const existingItem = this.cartItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        existingItem.quantity += 1;
      } else {
        // If the item is not in the cart, add it
        newItem.quantity = 1;
        this.cartItems = [...this.cartItems, newItem]; // Use pinia.patch to ensure reactivity
      }

      // Save the updated cart to local storage
      this.saveToLocalStorage();
    },
    removeFromCart(index: number) {
      this.cartItems.splice(index, 1);
      // Save the updated cart to local storage
      this.saveToLocalStorage();
    },
    incrementQuantity(index: number) {
      this.cartItems[index].quantity += 1;
      // Save the updated cart to local storage
      this.saveToLocalStorage();
    },
    decrementQuantity(index: number) {
      const currentItem = this.cartItems[index];
      if (currentItem.quantity > 1) {
        currentItem.quantity -= 1;
      } else {
        // Remove the item if the quantity becomes 0
        this.cartItems.splice(index, 1);
      }
      // Save the updated cart to local storage
      this.saveToLocalStorage();
    },
    loadFromLocalStorage() {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.cartItems = JSON.parse(storedCart).map((item: CartItem) => ({
          ...item,
          quantity: item.quantity || 1,
        }));
      }
    },
    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    },
  },
});
