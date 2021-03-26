import { configureStore } from "@reduxjs/toolkit";

import dependanciesReducer from "./dependancies/dependanciesSlice";

export default configureStore({
  reducer: {
    dependancies: dependanciesReducer,
  },
});
