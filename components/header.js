class Header extends HTMLElement {
  constructor() {
    super();
  }


connectedCallback() {
  this.innerHTML = `
  <!-- Header -->
  <header id="header" class="alt">
    <h1 id="logo"><a href="index.html">Daniil Scheifes </a></h1>
    <nav id="nav">
      <ul>
        <li class="current"><a href="index.html">Home</a></li>
        <li class="submenu">
          <a href="#">Academic</a>
          <ul>
            <li><a href="phd.html">PhD</a></li>
            <li><a href="Thesis.html">Thesis topics</a></li>
            <li><a href="Teaching.html">Teaching</a></li>
          </ul>
        </li>
                      <li class="submenu">
          <a href="#">Personal</a>
          <ul>
            <li><a href="Movies.html">Movies</a></li>
            <li><a href="right-sidebar.html">Blog</a></li>
          </ul>
        </li>
        <li><a href="contact.html" >Contact</a></li>
      </ul>
    </nav>
  </header>
`;
}
}

customElements.define('header-component', Header);
