import { createSlice } from "@reduxjs/toolkit";

const WRITE_ACCESS = [
  "hFgfQcppuQXWOjHC72Cs7XK0uQ52", // Mark
  "6ml6AfPeOjSEVWnFidImp8Bppnd2", // Alexa
  "3PFfEGHNeZYk89POk991YEQKJXj2", // Ingrid
];

export const userSlice = createSlice({
  name: "user",
  initialState: {
    noSignIn: true,
    userDetails: {
      uid: null,
      email: null,
      photoURL: null,
      displayName: null,
    },
    signedIn: false,
    writeAccess: false,
    commentAccess: false,
  },
  reducers: {
    logOut: () => {
      return {
        noSignIn: false,
        userDetails: {
          uid: null,
          email: null,
          photoURL: null,
          displayName: null,
        },
        signedIn: false,
        writeAccess: false,
        commentAccess: false,
      };
    },
    setNoSignIn: (state, action) => {
      return { ...state, noSignIn: action.payload };
    },
    setUser: (state, action) => {
      if (action.payload) {
        state.userDetails = {
          uid: action.payload.uid,
          email: action.payload.email,
          photoURL: action.payload.photoURL,
          displayName: action.payload.displayName,
        };
        state.noSignIn = false;
        state.signedIn = true;
        state.writeAccess = WRITE_ACCESS.includes(action.payload.uid);
        state.commentAccess = state.writeAccess
          ? true
          : action.payload.email.includes("@sage.com");
      } else {
        state.noSignIn = false;
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

export const { setUser, logOut, setNoSignIn } = userSlice.actions;

export const getUserDetails = (state) => state?.user?.userDetails;
export const getSignedIn = (state) => state?.user?.signedIn;
export const getWriteAccess = (state) => state?.user?.writeAccess;
export const getReadOnly = (state) => !state?.user?.writeAccess;
export const getCommentAccess = (state) => state?.user?.commentAccess;
export const getNoSignIn = (state) => state?.user?.noSignIn;

export default userSlice.reducer;
