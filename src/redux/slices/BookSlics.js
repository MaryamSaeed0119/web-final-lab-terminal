// src/redux/slices/bookSlice.js
import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    list: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.list.push(action.payload);
    },
    removeBook: (state, action) => {
      state.list = state.list.filter(book => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export const selectBooks = state => state.books.list;
export default bookSlice.reducer;
