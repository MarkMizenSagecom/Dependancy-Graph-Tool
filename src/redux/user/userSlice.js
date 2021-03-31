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
  },
  reducers: {
    setUser: (state, action) => {
      console.log("TEST", { state, action });
      if (action.payload) {
        state.userDetails = {
          uid: action.payload.uid,
          email: action.payload.email,
          photoURL: action.payload.photoURL,
        };
        state.signedIn = true;
      } else {
        state.userDetails = {
          uid: null,
          email: null,
          photoURL: null,
        };
        state.signedIn = false;
      }
    },
  },
});

export const { setUser } = userSlice.actions;

export const getUserDetails = (state) => state?.user?.userDetails;
export const getSignedIn = (state) => state?.user?.signedIn;

export default userSlice.reducer;
