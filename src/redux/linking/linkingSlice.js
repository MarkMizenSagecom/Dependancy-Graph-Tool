import { createSlice } from "@reduxjs/toolkit";

export const linkingSlice = createSlice({
  name: "linking",
  initialState: {
    source: false,
  },
  reducers: {
    startLinking: (state, action) => {
      state.source = action.payload.id;
    },
    doneLinking: (state) => {
      state.source = false;
    },
  },
});

export const { startLinking, doneLinking } = linkingSlice.actions;

export const getLinkingSource = (state) => state?.linking?.source;
export const getIsLinking = (state) => !!state?.linking?.source;

export default linkingSlice.reducer;
