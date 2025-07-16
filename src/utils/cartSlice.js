import { createSlice } from "@reduxjs/toolkit";

// This file defines a Redux slice for managing a shopping cart.
// It includes actions to add an item, remove the last item, and clear the cart.

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: state => {
      state.items.pop();
    },
    clearCart: state => {
      state.items.length = 0;
    }
  }
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
