/**
 * @prettier
 */

import { createSlice } from '@reduxjs/toolkit';

import PICTURES from '../../constants/pictures';

const initialState = PICTURES;

const catsSlice = createSlice({
  name: 'catsResponse',
  initialState,
  reducers: {
    setCatsData: (state, action) => (state = action.payload),
    deleteCat: (state, action) => (state = state.filter((item) => item.id !== action.payload)),
    addCat: (state, action) => (state = [...state, action.payload]),
  },
});

export const { setCatsData, deleteCat, addCat } = catsSlice.actions;
export default catsSlice.reducer;
