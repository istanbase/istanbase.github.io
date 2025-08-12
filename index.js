class MyP extends HTMLElement {
  static observedAttributes = ["style"];
  
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("my p has been connected!!");
  }
  
  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  connectedMoveCallback() {
    console.log("Custom element moved with moveBefore()");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }  
  
  connectedMoveCallback() {
    console.log("Custom move-handling logic here.");
  }

  attributeChangedCallback(name, oldValue, newValue) {    
    console.log(
      `Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
    )
  }
}

customElements.define("my-p", MyP);
