class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div tabindex="0" class="hero__text">
        <h1 class="hero__title">Welcome to Resto</h1>

        <p class="hero__subtitle">
        Find the Best Place to Find a Recommended Place to Eat
        </p>

        <a href="#main-content" class="btn">Read More</a>
      </div>
    `;
  }
}

customElements.define('hero-content', HeroContent);
