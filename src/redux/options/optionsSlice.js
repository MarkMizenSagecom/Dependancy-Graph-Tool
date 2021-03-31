import { createSlice } from "@reduxjs/toolkit";

export const optionsSlice = createSlice({
  name: "options",
  initialState: {
    showOtherRelations: false,
    showAllArrows: true,
  },
  reducers: {
    setOption: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { setOption } = optionsSlice.actions;

export const getShowOtherRelations = (state) =>
  state?.options?.showOtherRelations;

export default optionsSlice.reducer;
