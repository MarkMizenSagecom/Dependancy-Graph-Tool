import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    readonly: process.env.NODE_ENV !== 'development',
  },
  reducers: {},
});

export const getReadOnly = (state) => state?.settings?.readonly;

export default settingsSlice.reducer;
