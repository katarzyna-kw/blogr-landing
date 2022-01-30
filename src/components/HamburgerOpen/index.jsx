import React from "react";
import hamburger from "../../images/icon-hamburger.svg";
import './Hamburger.css'

function HamburgerOpen({ toggle }) {
  return (
    <button className="header__btn--hamburger">
      <img src={hamburger} alt="Click to open menu" onClick={toggle} />
    </button>
  );
}

export default HamburgerOpen;
