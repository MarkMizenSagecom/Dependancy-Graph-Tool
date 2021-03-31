import "./App.css";

// import { useDispatch, useSelector } from "react-redux";
// import { getColumns, getItems } from "./redux/dependancies/dependanciesSlice";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TreeView from "./features/Tree/TreeView";
import ColumnsView from "./features/Columns/ColumnsView";

import Guard from "./features/Auth/Guard";

import AppHeader from "./components/AppHeader";

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />

        <Guard>
          <Switch>
            <Route path="/tree/:itemId" component={TreeView} />
            <Route path="/columns" component={ColumnsView} />

            <Route path="/">
              <div>
                <Link to="/tree">Tree</Link>
                <Link to="/columns">Columns</Link>
              </div>
            </Route>
          </Switch>
        </Guard>
      </Router>
    </div>
  );
}

export default App;
