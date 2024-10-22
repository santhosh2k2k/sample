import { createSlice } from '@reduxjs/toolkit';
import products from '../data/product.json';

const initialState = {
  items: products.products.map((product) => ({ ...product, quantity: 0 })),
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
