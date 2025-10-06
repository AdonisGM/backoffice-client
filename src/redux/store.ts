import { configureStore } from '@reduxjs/toolkit';

import { languageSlice } from '@/redux/slices/languageSlice.ts';

export const store = configureStore({
  reducer: {
    language: languageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
