import React from "react";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import ReactDOM, { render, unmountComponentAtNode } from "react-dom";

let persistor = persistStore(store);

const AppWrapper = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

class ReactElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this._innerHTML = this.innerHTML;

    render(<AppWrapper />, this);
  }

  disconnectedCallback() {
    this.unmount();
  }

  update() {
    this.unmount();

    render(<AppWrapper />, this);
  }

  unmount() {
    unmountComponentAtNode(this);
  }
}

if (process.env.NODE_ENV === "production") {
  console.log("react-redux-toolkit-persist");
  customElements.define("react-redux-toolkit-persist", ReactElement);
} else {
  ReactDOM.render(
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
