import React, { useState, useEffect } from "react";
import HamburgerOpen from "../HamburgerOpen";
import HamburgerClose from "../HamburgerClose";
import Navbar from "../Navbar";
import desktopBg from "../../images/bg-pattern-intro-desktop.svg";
import mobileBg from "../../images/bg-pattern-intro-mobile.svg";
import logo from "../../images/logo.svg";
import "./Header.css";

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const bgUrl = window.innerWidth >= 700 ? desktopBg : mobileBg;
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = windowWidth >= 700 ? true : false;

  useEffect(() => {
    const updateWindow = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindow);

    return () => window.removeEventListener("resize", updateWindow);
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section
      className="header__container"
      style={{
        backgroundImage: `url(${bgUrl}), var(--gradient-header)`,
        objectFit: "cover",
      }}
    >
      <div className="header__head">
        <img className="header__logo" src={logo} alt="Blogr logo" />
        {!isOpen && !isDesktop && <HamburgerOpen toggle={handleToggle} />}
        {isOpen && !isDesktop && <HamburgerClose toggle={handleToggle} />}
        {isDesktop && <Navbar desktop={isDesktop} />}
      </div>
      {isOpen && !isDesktop && <Navbar />}
      <h1 className="header__h1">A modern publishing platform</h1>
      <h2 className="header__h2">
        Grow your audience and build your online brand
      </h2>
      <div className="btn__container">
        <button className="header__btn btn btn--filled">Start for Free</button>
        <button className="header__btn btn btn--outline">Learn More</button>
      </div>
    </section>
  );
}

export default Header;
