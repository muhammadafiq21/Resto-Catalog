class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabindex="0">
        <ul>
          <li>Copyright © 2022 - Katalog Resto</li>
          <li>Dicoding Submission 3</li>
        </ul>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
