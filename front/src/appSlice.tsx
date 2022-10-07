import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type appSliceState = {
  isMobile: boolean;
}

const initialState: appSliceState = {
  isMobile: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsMobile(state: appSliceState, action: PayloadAction<boolean>) {
      state.isMobile = action.payload
    }
  }
})

export const { setIsMobile } = appSlice.actions;

export default appSlice.reducer;