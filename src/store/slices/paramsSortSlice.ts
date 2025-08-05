import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SortMenuState{
  params: string
}

const initialState:SortMenuState = {
   params:''
}

export const paramsSortSlice = createSlice({
   name: 'paramsSort',
   initialState,
   reducers:{
      toggleSotrParams(state, action:PayloadAction<string>){
         state.params =  action.payload;
      }
   }
})
export const {toggleSotrParams } = paramsSortSlice.actions
export default paramsSortSlice.reducer

