import React from "react";
import close from "../../images/icon-close.svg";
import '../HamburgerOpen/Hamburger.css'

function HamburgerClose({toggle}) {
  return (
    <button className="header__btn--hamburger">
      <img src={close} alt="Click to close menu" onClick={toggle} />
    </button>
  );
}

export default HamburgerClose;