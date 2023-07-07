/**
 * @prettier
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categoriesResponse',
  initialState,
  reducers: {
    addCategory: (state, action) => (state = [...state, action.payload]),
    deleteCategory: (state, action) => (state = state.filter((item) => item !== action.payload)),
    clearCategories: (state) => (state = initialState),
  },
});

export const { addCategory, deleteCategory, clearCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
