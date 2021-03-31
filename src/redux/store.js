import { configureStore } from "@reduxjs/toolkit";

import dependanciesReducer from "./dependancies/dependanciesSlice";
import connectionsReducer from "./connections/connectionsSlice";
import linkingReducer from "./linking/linkingSlice";
import optionsReducer from "./options/optionsSlice";

export default configureStore({
  reducer: {
    linking: linkingReducer,
    dependancies: dependanciesReducer,
    connections: connectionsReducer,
    options: optionsReducer,
  },
});
