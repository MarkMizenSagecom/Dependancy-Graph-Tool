import React, { useEffect } from "react";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import FirebaseAuth from "react-firebaseui/FirebaseAuth";

import { setUser } from "../redux/user/userSlice";
import { getSignedIn } from "../redux/user/userSlice";

function AuthenticationHandler() {
  const isSignedIn = useSelector(getSignedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((change) => {
        dispatch({ type: setUser.type, payload: change?.user });
      });
    // Make sure we un-register Firebase observers when the component unmounts.
    return () => unregisterAuthObserver();
  }, [dispatch]);

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult({user}) {
        const userDetails = {
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL,
        };
        dispatch({ type: setUser.type, payload: userDetails });
        return false;
      },
    },
  };

  return (
    <>
      {isSignedIn ? (
        <>Signed in!</>
      ) : (
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      )}
    </>
  );
}

export default AuthenticationHandler;
