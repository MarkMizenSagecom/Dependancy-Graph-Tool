import firebase from "firebase";
import Button from "carbon-react/lib/components/button";
import Profile from "carbon-react/lib/components/profile";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getUserDetails,
  logOut,
  getNoSignIn,
  setNoSignIn,
} from "../redux/user/userSlice";

const UserDetailsWrap = styled.div`
  margin: 2rem auto;
  padding: 0 2rem;
`;

function UserDetails() {
  const dispatch = useDispatch();
  const userDetails = useSelector(getUserDetails);
  const noSignIn = useSelector(getNoSignIn);
  return (
    <UserDetailsWrap>
      {noSignIn ? (
        <>
          <Button
            mt={1}
            fullWidth
            buttonType="primary"
            onClick={() => {
              console.log('Sign in!');
              dispatch({ type: setNoSignIn.type, payload: false });
            }}
            >Click here to sign in</Button>
        </>
      ) : (
        <>
          <Profile
            size="ML"
            email={userDetails.email}
            src={userDetails.photoURL}
            name={userDetails.displayName}
          />
          <Button
            mt={2}
            size="small"
            onClick={() => {
              firebase
                .auth()
                .signOut()
                .then(() => {
                  dispatch({ type: logOut.type });
                });
            }}
          >
            Log out
          </Button>
        </>
      )}
    </UserDetailsWrap>
  );
}
export default UserDetails;
