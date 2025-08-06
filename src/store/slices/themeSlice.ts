import { createSlice } from "@reduxjs/toolkit";

interface themeSliceState{
  mode: 'light' | 'dark'
}



const parsed = localStorage.getItem('themeColor')

const initialState:themeSliceState = {
    mode: parsed === 'light' || parsed === 'dark' ? parsed : 'dark'
}

export const themeSlice = createSlice({
   name: 'theme',
   initialState,
   reducers:{
      toggleTheme(state){
         state.mode = state.mode === 'dark' ? 'light' : 'dark';
         localStorage.setItem('themeColor', state.mode);
      }
   }
})
export const {toggleTheme } = themeSlice.actions
export default themeSlice.reducer

