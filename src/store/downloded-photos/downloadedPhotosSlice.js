/**
 * @prettier
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const downloadedPhotosSlice = createSlice({
  name: 'downloadedPhotosResponse',
  initialState,
  reducers: {
    setDownloadedPhotos: (state, action) => (state = action.payload),
  },
});

export const { setDownloadedPhotos } = downloadedPhotosSlice.actions;
export default downloadedPhotosSlice.reducer;
