import firebase from "firebase";
import { useDispatch } from "react-redux";
import FirebaseAuth from "react-firebaseui/FirebaseAuth";
import Tile from "carbon-react/lib/components/tile";
import Content from "carbon-react/lib/components/content";
import Typography from "carbon-react/lib/components/typography";
import { setUser } from "../../redux/user/userSlice";

import styled from "styled-components";

const AuthWrap = styled.div`
  max-width: 32rem;
  padding: 0 1rem;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
`;

function AuthView() {
  const dispatch = useDispatch();
  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult(user) {
        dispatch({ type: setUser.type, payload: user });
        return false;
      },
    },
  };

  return (
    <AuthWrap>
      <Tile orientation="vertical" mt={6}>
        <Content style={{ textAlign: "center" }}>
          <Typography pb={2} variant="h2" as="h1">
            Dependancy Graph
          </Typography>
          <Typography>This is a test</Typography>
          <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </Content>
      </Tile>
    </AuthWrap>
  );
}

export default AuthView;
