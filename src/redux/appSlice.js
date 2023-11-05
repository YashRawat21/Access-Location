import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  location: []
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateLocation: (state, action) => {
      state.location = action.payload;
    }
  }
})

export const {
  updateLocation
} = appSlice.actions;
export default appSlice.reducer;