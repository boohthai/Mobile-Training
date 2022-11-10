// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const FavSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
  },
  reducers: {
    addToList: (state, action) => {
      const itemInList = state.favorite.find((item) => item.id === action.payload.id);
      if (!itemInList)state.favorite.push({ ...action.payload });
    },
   
    removeItem: (state, action) => {
      const removeItem = state.favorite.filter((item) => item.id !== action.payload);
      state.favorite = removeItem;
    },
  },
});

export const FavListReducer = FavSlice.reducer;
export const {
  addToList,
  removeItem,
} = FavSlice.actions;