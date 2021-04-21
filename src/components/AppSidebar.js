import { Route, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "carbon-react/lib/components/button";

import { addColumn } from "../redux/dependancies/dependanciesSlice";
import { getReadOnly } from "../redux/user/userSlice";

import UserDetails from "./UserDetails";
import ComponentSearch from "./ComponentSearch";
import SaveButton from "./SaveButton";
import Typography from "carbon-react/lib/components/typography";

const SidebarWrap = styled.div`
  width: 320px;
  flex: 0 0 320px;
  background: rgb(242, 245, 246);
  position: relative;
  z-index: 2;
`;

const SidebarActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  gap: 1rem;
`;

const Hr = styled.hr`
  margin: 2rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

function AppSidebar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const readonly = useSelector(getReadOnly);
  return (
    <SidebarWrap>

      <Typography variant="h1">Dependancy Graph</Typography>

      <UserDetails />
      <Hr />

      <ComponentSearch />

      <Hr />

      <SidebarActions>
        <Route path="/tree/">
          <Button fullWidth onClick={() => history.push("/")}>
            Columns View
          </Button>
          <Button fullWidth onClick={() => history.goBack()}>
            Back
          </Button>
        </Route>
        <Route exact path="/">
          {!readonly && (
            <Button
              onClick={() => {
                dispatch({ type: addColumn.toString() });
              }}
              fullWidth
              iconType="plus"
            >
              Add New Column
            </Button>
          )}
        </Route>
        <SaveButton />
      </SidebarActions>
    </SidebarWrap>
  );
}

export default AppSidebar;
