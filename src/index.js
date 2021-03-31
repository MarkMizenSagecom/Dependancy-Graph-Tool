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

/* Add your config from the Firebase Console */
const firebaseConfig = {
  apiKey: "AIzaSyAESY7RU998b2rdyyWMhCkt4mfQXfEdpyM",
  authDomain: "dependancy-graph.firebaseapp.com",
  projectId: "dependancy-graph",
  storageBucket: "dependancy-graph.appspot.com",
  messagingSenderId: "257602314188",
  appId: "1:257602314188:web:b6daa829c5e07f23648769",
};

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
