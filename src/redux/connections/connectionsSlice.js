import { createSlice } from "@reduxjs/toolkit";

export const connectionsSlice = createSlice({
  name: "connections",
  initialState: {
    scrollLeft: 0,
  },
  reducers: {
    updateScrollLeft: (state, action) => {
      const { value } = action.payload;
      state.scrollLeft = value;
    },
  },
});

export const {
    updateScrollLeft,
} = connectionsSlice.actions;

export const getScrollLeft = (state) => state?.connections?.scrollLeft;

export default connectionsSlice.reducer;
