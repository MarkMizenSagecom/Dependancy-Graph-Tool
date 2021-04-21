import React from "react";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import FirebaseAuth from "react-firebaseui/FirebaseAuth";

import Typography from "carbon-react/lib/components/typography";

import { getNoSignIn, setNoSignIn, setUser } from "../redux/user/userSlice";
import { getSignedIn } from "../redux/user/userSlice";
import styled from "styled-components";
import Tile from "carbon-react/lib/components/tile";
import Content from "carbon-react/lib/components/content";
import Button from "carbon-react/lib/components/button";

const GuardWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  width: 600px;
  max-width: 100%;
  font-size: 16px;
`;

function Guard({ children }) {
  const isSignedIn = useSelector(getSignedIn);
  const noSignIn = useSelector(getNoSignIn);
  const dispatch = useDispatch();

  console.log({noSignIn});

  if (noSignIn || isSignedIn) {
    return <>{children}</>;
  }

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult({ user }) {
        const userDetails = {
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL,
          displayName: user.displayName,
        };
        dispatch({ type: setUser.type, payload: userDetails });
        return false;
      },
    },
  };

  return (
    <GuardWrap>
      <Tile>
        <Content align="center">
          <Typography mb={4} variant="h1-large">
            Dependancy Graph
          </Typography>
          <p>Please sign in using SSO</p>
          <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

          <p>Or</p>
          <Button
            variant="secondary"
            onClick={() => {
              dispatch({ type: setNoSignIn, payload: true });
            }}
          >
            Continue without signing in
          </Button>
        </Content>
      </Tile>
    </GuardWrap>
  );
}

export default Guard;
