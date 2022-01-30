import React from "react";
import hamburger from "../../images/icon-hamburger.svg";

function HamburgerOpen({ toggle }) {
  return (
    <button className="navbar__btn">
      <img src={hamburger} alt="Click to open menu" onClick={toggle} />
    </button>
  );
}

export default HamburgerOpen;
