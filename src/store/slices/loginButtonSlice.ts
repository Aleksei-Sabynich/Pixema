import { createSlice,  type PayloadAction } from "@reduxjs/toolkit";


interface LoginButtonSlice {
  isActive: boolean;
}

const initialState: LoginButtonSlice = {
  isActive: false, 
};

export const loginButtonSlice = createSlice({
  name: 'loginButton',
  initialState,
  reducers: {
    changeIsActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload
    },
  },
});

export const { changeIsActive } = loginButtonSlice.actions;
export default loginButtonSlice.reducer;