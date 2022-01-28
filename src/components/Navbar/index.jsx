import React, { useState } from "react";
import upArrow from "../../images/icon-arrow-dark.svg";
import upArrowDesktop from "../../images/icon-arrow-light.svg";
import { navbarProducts, navbarContact, navbarConnect } from "../../data";
import "./Navbar.css";

function Navbar({ desktop }) {
  const arrow = window.innerWidth >= 700 ? upArrowDesktop : upArrow;
  const [productIsOpen, setProductIsOpen] = useState(false);
  const [companyIsOpen, setCompanyIsOpen] = useState(false);
  const [connectIsOpen, setConnectIsOpen] = useState(false);

  const handleProductToggle = () => {
    setProductIsOpen((prev) => !prev);
    setCompanyIsOpen(false);
    setConnectIsOpen(false);
  };

  const handleCompanyToggle = () => {
    setCompanyIsOpen((prev) => !prev);
    setProductIsOpen(false);
    setConnectIsOpen(false);
  };

  const handleConnectToggle = () => {
    setConnectIsOpen((prev) => !prev);
    setProductIsOpen(false);
    setCompanyIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar__nav">
        {navbarProducts.map((item) => (
          <nav className="navbar__item">
            <button
              className={
                productIsOpen
                  ? "navbar__btn navbar__btn--active"
                  : "navbar__btn"
              }
              onClick={handleProductToggle}
            >
              {item.category}
              <img
                className={
                  productIsOpen ? "navbar__arrow--reverse" : "navbar__arrow"
                }
                src={arrow}
                alt="click to open links for this category"
              />
            </button>
            {productIsOpen && (
              <ul className="navbar__section">
                {item.links.map((link) => (
                  <li className="navbar__link">{link}</li>
                ))}
              </ul>
            )}
          </nav>
        ))}
        {navbarContact.map((item) => (
          <nav className="navbar__item">
            <button
              className={
                companyIsOpen
                  ? "navbar__btn navbar__btn--active"
                  : "navbar__btn"
              }
              onClick={handleCompanyToggle}
            >
              {item.category}
              <img
                className={
                  companyIsOpen ? "navbar__arrow--reverse" : "navbar__arrow"
                }
                src={arrow}
                alt="click to open links for this category"
              />
            </button>
            {companyIsOpen && (
              <ul className="navbar__section">
                {item.links.map((link) => (
                  <li className="navbar__link">{link}</li>
                ))}
              </ul>
            )}
          </nav>
        ))}

        {navbarConnect.map((item) => (
          <nav className="navbar__item">
            <button
              className={
                connectIsOpen
                  ? "navbar__btn navbar__btn--active"
                  : "navbar__btn"
              }
              onClick={handleConnectToggle}
            >
              {item.category}
              <img
                className={
                  connectIsOpen ? "navbar__arrow--reverse" : "navbar__arrow"
                }
                src={arrow}
                alt="click to open links for this category"
              />
            </button>
            {connectIsOpen && (
              <ul className="navbar__section">
                {item.links.map((link) => (
                  <li className="navbar__link">{link}</li>
                ))}
              </ul>
            )}
          </nav>
        ))}
      </div>
      {!desktop && <div className="navbar__divider"></div>}
      <div className="navbar__btn__container">
        <button className="navbar__btn btn btn--borderless">Login</button>
        <button className="navbar__btn btn btn--gradient">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
