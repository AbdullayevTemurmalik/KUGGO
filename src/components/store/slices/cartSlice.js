import { createSlice } from "@reduxjs/toolkit";

const calculateCartTotal = (items) => {
  return items.reduce((total, item) => {
    const price =
      parseInt(item.currentPrice.replace(/\s/g, "")) * item.quantity;
    return total + price;
  }, 0);
};

const calculateTotalItemsCount = (items) => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartTotal: 0,
    totalItemsCount: 0,
    cartCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const exists = state.items.find((item) => item.id === product.id);

      if (exists) {
        exists.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.cartCount = state.items.length;
      state.totalItemsCount = calculateTotalItemsCount(state.items);
      state.cartTotal = calculateCartTotal(state.items);
    },

    updateQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;

      if (newQuantity < 1) {
        state.items = state.items.filter((item) => item.id !== productId);
      } else {
        const item = state.items.find((item) => item.id === productId);
        if (item) {
          item.quantity = newQuantity;
        }
      }

      state.cartCount = state.items.length;
      state.totalItemsCount = calculateTotalItemsCount(state.items);
      state.cartTotal = calculateCartTotal(state.items);
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);

      state.cartCount = state.items.length;
      state.totalItemsCount = calculateTotalItemsCount(state.items);
      state.cartTotal = calculateCartTotal(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      state.cartCount = 0;
      state.totalItemsCount = 0;
      state.cartTotal = 0;
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) => state.cart.cartCount;
export const selectCartTotal = (state) => state.cart.cartTotal;
export const selectTotalItemsCount = (state) => state.cart.totalItemsCount;

export default cartSlice.reducer;
