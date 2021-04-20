import { Route, Link, useHistory } from "react-router-dom";
import ComponentSearch from "./ComponentSearch";
import SaveButton from "./SaveButton";
import styled from "styled-components";
import Button from "carbon-react/lib/components/button";
import { useDispatch } from "react-redux";
import { addColumn } from "../redux/dependancies/dependanciesSlice";

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
  return (
    <SidebarWrap>
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
          <Button
            onClick={() => {
              dispatch({ type: addColumn.toString() });
            }}
            fullWidth
            iconType="plus"
          >
            Add New Column
          </Button>
        </Route>
        <SaveButton />
      </SidebarActions>
    </SidebarWrap>
  );
}

export default AppSidebar;
