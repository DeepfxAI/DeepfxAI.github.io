import React from 'react';

const Navbar = () => {
  return (
    <nav className="teal lighten-1">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo left">Deep FX AI</a>
        <a href="/#" data-activates="mobile-demo" className="button-collapse right">
          <i className="material-icons">menu</i>
        </a>
        <ul id="mobile-demo" className="right hide-on-med-and-down">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Who we are</a>
          </li>
          <li>
            <a href="https://github.com/DeepfxAI">Github</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
