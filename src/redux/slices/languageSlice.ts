import type { RootState } from '@/redux/store.ts';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultLanguage } from '@/configs/locale.ts';

type LanguageType = {
  value: string;
};

const initialState: LanguageType = {
  value: localStorage.getItem('lang') || defaultLanguage,
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { change } = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.language.value;

export default languageSlice.reducer;
