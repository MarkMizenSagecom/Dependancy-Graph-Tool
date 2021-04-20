import { configureStore } from "@reduxjs/toolkit";

import dependanciesReducer from "./dependancies/dependanciesSlice";
import connectionsReducer from "./connections/connectionsSlice";
import linkingReducer from "./linking/linkingSlice";
import optionsReducer from "./options/optionsSlice";
import userReducer from "./user/userSlice";
import settingsReducer from "./settings/settingsSlice";

export default configureStore({
  reducer: {
    linking: linkingReducer,
    dependancies: dependanciesReducer,
    connections: connectionsReducer,
    options: optionsReducer,
    user: userReducer,
    settings: settingsReducer,
  },
});
