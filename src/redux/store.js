import { configureStore } from "@reduxjs/toolkit";

import dependanciesReducer from "./dependancies/dependanciesSlice";
import connectionsReducer from "./connections/connectionsSlice";

export default configureStore({
  reducer: {
    dependancies: dependanciesReducer,
    connections: connectionsReducer,
  },
});
