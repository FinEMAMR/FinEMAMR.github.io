class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Marco Antonio Morales Rios
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
