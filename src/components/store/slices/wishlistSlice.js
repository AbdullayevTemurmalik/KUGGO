import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    toggleWishlist: (state, action) => {
      const product = action.payload;
      const index = state.items.findIndex((item) => item.id === product.id);

      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(product);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;

export const selectWishlistItems = (state) => state.wishlist.items;
export const selectWishlistCount = (state) => state.wishlist.items.length;

export const isWishlisted = (state, productId) =>
  state.wishlist.items.some((item) => item.id === productId);

export default wishlistSlice.reducer;
