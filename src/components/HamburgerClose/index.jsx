import React from "react";
import close from "../../images/icon-close.svg";

function HamburgerClose({toggle}) {
  return (
    <button className="navbar__btn">
      <img src={close} alt="Click to close menu" onClick={toggle} />
    </button>
  );
}

export default HamburgerClose;
