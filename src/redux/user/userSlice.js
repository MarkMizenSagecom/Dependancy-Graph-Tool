import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: {
      uid: null,
      email: null,
      photoURL: null,
    },
    signedIn: false,
    writeAccess: false,
  },
  reducers: {
    setUser: (state, action) => {
      if (action.payload) {
        state.userDetails = {
          uid: action.payload.user.uid,
          email: action.payload.user.email,
          photoURL: action.payload.user.photoURL,
        };
        state.signedIn = true;
        state.writeAccess =
          action.payload.user.uid === "hFgfQcppuQXWOjHC72Cs7XK0uQ52";
      } else {
        state.userDetails = {
          uid: null,
          email: null,
          photoURL: null,
        };
        state.signedIn = false;
        state.writeAccess = false;
      }
    },
  },
});

export const { setUser } = userSlice.actions;

export const getUserDetails = (state) => state?.user?.userDetails;
export const getSignedIn = (state) => state?.user?.signedIn;
export const getWriteAccess = (state) => state?.user?.writeAccess;

export default userSlice.reducer;
