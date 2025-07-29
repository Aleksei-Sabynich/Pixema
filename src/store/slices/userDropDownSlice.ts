import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const userDropDownSlice = createSlice({
   name:'userDropDown',
   initialState:{
      isOpen: false
   },
   reducers:{
      openUserDropDown(state, action:PayloadAction<boolean>){
         state.isOpen =  !action.payload
      },
      closeUserDropDown(state){
         state.isOpen =  false
      }
   }
})

export const {openUserDropDown, closeUserDropDown} = userDropDownSlice.actions
export default userDropDownSlice.reducer