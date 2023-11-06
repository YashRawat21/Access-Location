import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  location: [],
  postalCode: '',
  loading: false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
    updatePostalCode : (state,action) => {
      state.postalCode = action.payload
    },
    updateLoading: (state, action) => {
        state.loading = action.payload;
    }
  }
})

export const {
  updateLocation,updatePostalCode, updateLoading
} = appSlice.actions;
export default appSlice.reducer;