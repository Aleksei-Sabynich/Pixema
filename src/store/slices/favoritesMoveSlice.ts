import { createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface FavoritesMove{
  favoritesMove: {id: number, title:string}[]
}

const initialState: FavoritesMove = {
  favoritesMove: JSON.parse(localStorage.getItem('favorites') || '[]'),
};


export const favoritesMoveSlice = createSlice({
  name: 'favoritesMove',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<{id: number, title:string}>) => {
      const id = action.payload.id;
      const title = action.payload.title
      const favorites = state.favoritesMove;

      if (favorites.find(el => el.id === id )) {
        const newFavorites = favorites.filter(item => item.id !== id);
        state.favoritesMove = newFavorites; 
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
      } else {
        favorites.push({id: id, title:title});
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
    }
  }
});


export const { toggleFavorite} = favoritesMoveSlice.actions
export default favoritesMoveSlice.reducer

