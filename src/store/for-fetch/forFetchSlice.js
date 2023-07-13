/**
 * @prettier
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = 3;

const forFetchSlice = createSlice({
  name: 'fetchResponse',
  initialState,
  reducers: {
    setPage: (state, action) => (state = action.payload),
  },
});

export const { setPage } = forFetchSlice.actions;
export default forFetchSlice.reducer;
