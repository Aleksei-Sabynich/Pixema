import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IsAuthorized{
  authorizedState: boolean
}
const initialState:IsAuthorized = {
   authorizedState:!!localStorage.getItem('session_id')
}

export const isAuthorizedSlice = createSlice({
   name: 'isAuthorized',
   initialState,
   reducers:{
      onAuthorized: (state, action: PayloadAction<boolean>) => {
       state.authorizedState = action.payload;
      },
      offAuthorized: state => {
        state.authorizedState = false;
        localStorage.removeItem('session_id')
      },
   }
})
export const {onAuthorized, offAuthorized } = isAuthorizedSlice.actions
export default isAuthorizedSlice.reducer

