import { createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface FavoritesMove{
  favoritesMove: number[]
}

const initialState: FavoritesMove = {
  favoritesMove: JSON.parse(localStorage.getItem('favorites') || '[]'),
};


export const favoritesMoveSlice = createSlice({
  name: 'favoritesMove',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const favorites = state.favoritesMove;

      if (favorites.includes(id)) {
        const newFavorites = favorites.filter(item => item !== id);
        state.favoritesMove = newFavorites; 
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
      } else {
        favorites.push(id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
    }
  }
});


export const { toggleFavorite} = favoritesMoveSlice.actions
export default favoritesMoveSlice.reducer

