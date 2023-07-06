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
  },
});

export const { setCatsData } = catsSlice.actions;
export default catsSlice.reducer;
