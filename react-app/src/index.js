import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import App from "./App";

class ReactElement extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["selectedvalue", "toggle"];
  }
  connectedCallback() {
    this._innerHTML = this.innerHTML;

    const props = {
      selectedvalue: this.getAttribute("selectedvalue"),
      toggleval: this.getAttribute("toggle"),
    };
    render(<App {...props} />, this);
  }

  disconnectedCallback() {
    this.unmount();
  }

  update() {
    this.unmount();

    const props = {
      selectedvalue: this.getAttribute("selectedvalue"),
      toggleval: this.getAttribute("toggle"),
    };
    render(<App {...props} />, this);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    const props = {
      selectedvalue: this.getAttribute("selectedvalue"),
      toggleval: this.getAttribute("toggle"),
    };

    switch (name) {
      case "selectedvalue":
        console.log(`Value changed from ${oldValue} to ${newValue}`);

        render(<App {...props} />, this);
        break;
      case "toggle":
        console.log(`Value changed from ${oldValue} to ${newValue}`);

        render(<App {...props} />, this);
        break;
    }
  }

  unmount() {
    unmountComponentAtNode(this);
  }
}

customElements.define("react-app", ReactElement);
