import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// import LoadData from "./components/LoadData";
import Guard from "./components/Guard";
import FirebaseSync from "./components/FirebaseSync";
import TreeView from "./features/Tree/TreeView";
import ColumnsView from "./features/Columns/ColumnsView";

import AppSidebar from "./components/AppSidebar";

import styled from "styled-components";

const AppWrap = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  align-items: stretch;
`;

const Wrap = styled.div`
  flex: 0 1 calc(100% - 320px);
  max-width: calc(100% - 320px);
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <AppWrap>
      <Guard>
        {/* <LoadData /> */}
        <FirebaseSync />
        <Router>
          <AppSidebar />

          <Wrap>
            <Switch>
              <Route path="/tree/:itemId" component={TreeView} />
              <Route path="/" component={ColumnsView} />
            </Switch>
          </Wrap>
        </Router>
      </Guard>
    </AppWrap>
  );
}

export default App;
