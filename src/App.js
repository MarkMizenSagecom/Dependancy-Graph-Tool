import "./App.css";

// import { useDispatch, useSelector } from "react-redux";
// import { getColumns, getItems } from "./redux/dependancies/dependanciesSlice";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TreeView from "./componets/views/TreeView";
import ColumnView from "./componets/views/ColumnView";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/tree">
            <TreeView />
          </Route>
          <Route path="/">
            <ColumnView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
