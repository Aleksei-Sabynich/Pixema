import { createSlice, type PayloadAction,  } from '@reduxjs/toolkit';

interface SearchState {
  home: string;
  trends: string;
  favorites: string;
}

const initialState: SearchState = {
  home: '',
  trends: '',
  favorites: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<{rout: keyof SearchState, searchValue: string }>) => {
      state[action.payload.rout] = action.payload.searchValue;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;