import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { render, unmountComponentAtNode } from "react-dom";

class ReactElement extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["selectedvalue", "toggle"];
  }
  connectedCallback() {
    render(<App />, this);
  }

  disconnectedCallback() {
    this.unmount();
  }

  update() {
    this.unmount();

    render(<App />, this);
  }
  attributeChangedCallback(name: any, oldValue: any, newValue: any) {
    switch (name) {
      case "selectedvalue":
        console.log(`Value changed from ${oldValue} to ${newValue}`);

        render(<App />, this);
        break;
      case "toggle":
        console.log(`Value changed from ${oldValue} to ${newValue}`);

        render(<App />, this);
        break;
    }
  }

  unmount() {
    unmountComponentAtNode(this);
  }
}

console.log("index.tsx");

if (process.env.NODE_ENV === "production")
  customElements.define("my-react-app", ReactElement);
else {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}
