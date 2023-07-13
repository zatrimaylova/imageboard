/**
 * @prettier
 */

import { configureStore } from '@reduxjs/toolkit';

import catsSlice from './cats/catsSlice';
import categoriesSlice from './categories/categoriesSlice';
import forFetchSlice from './for-fetch/forFetchSlice';
import downloadedPhotosSlice from './downloded-photos/downloadedPhotosSlice';

export const store = configureStore({
  reducer: {
    catsSlice,
    categoriesSlice,
    forFetchSlice,
    downloadedPhotosSlice,
  },
});
