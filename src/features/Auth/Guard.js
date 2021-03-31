import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";
import { setUser } from "../../redux/user/userSlice";
import { getSignedIn } from "../../redux/user/userSlice";
import AuthView from "./AuthView";

const Guard = ({ children }) => {
  const dispatch = useDispatch();

  const isSignedIn = useSelector(getSignedIn);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((change) => {
        dispatch({ type: setUser.type, payload: change?.user });
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, [dispatch]);

  if (!isSignedIn) {
    return <AuthView />;
  }

  return <>{children}</>;
};

export default Guard;
