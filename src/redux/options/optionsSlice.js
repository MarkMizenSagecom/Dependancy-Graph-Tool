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
    toggleOption: (state, action) => {
      if (!action.payload) {
        return;
      }
      state[action.payload] = !state[action.payload];
    },
  },
});

export const { setOption, toggleOption } = optionsSlice.actions;

export const getShowOtherRelations = (state) =>
  state?.options?.showOtherRelations;

export const getShowAllArrows = (state) => state?.options?.showAllArrows;

export default optionsSlice.reducer;
