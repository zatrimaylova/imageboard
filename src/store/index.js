/**
 * @prettier
 */

import { configureStore } from '@reduxjs/toolkit';

import catsSlice from './cats/catsSlice';

export const store = configureStore({
  reducer: {
    catsBasic: catsSlice,
  },
});
