import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import GlobalStyle from "carbon-react/lib/style/global-style";

import "firebase/firestore";
import { FirebaseAppProvider } from "reactfire";

import firebaseConfig from "./firebaseConfig";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Provider store={store}>
        <App />
      </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
