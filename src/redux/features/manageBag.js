import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bag: [],
  totalAmount: 0,
};

export const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    emptyBag: () => initialState,
    addToBag: (state, action) => {
      state.bag.push(action.payload);
      state.totalAmount += action.payload.price;
    },
    removeFromBag: (state, action) => {
      const index = state.bag.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.totalAmount -= state.bag[index].price;
        state.bag.splice(index, 1);
      }
    },
    addPrice: (state, action) => {
      state.totalAmount += action.payload;
    },
    removePrice: (state, action) => {
      state.totalAmount -= action.payload;
    },
  },
});

export const { addToBag, removeFromBag, addPrice, removePrice, emptyBag } = bagSlice.actions;
export default bagSlice.reducer;
