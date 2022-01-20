import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import desktopBg from '../../images/bg-pattern-intro-desktop.svg'
import mobileBg from '../../images/bg-pattern-intro-mobile.svg'
import logo from '../../images/logo.svg'
import hamburger from '../../images/icon-hamburger.svg'
import close from '../../images/icon-close.svg'
import './Header.css';

function Header() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const bgUrl = window.innerWidth >= 600 ? desktopBg : mobileBg
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateBg = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", updateBg);

    return () => window.removeEventListener("resize", updateBg);
    },
  []);

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <section className="header__container" style={{backgroundImage: `url(${bgUrl}), var(--gradient-header)`, objectFit: "cover"}}>
        <div className="header__head">
          <img src={logo} alt="Blogr logo" />
          {!isOpen && 
          <button className="navbar__btn">
            <img 
              src={hamburger} 
              alt="Click to open menu" 
              onClick={handleToggle}
            />
            </button>}
          {isOpen && 
          <button className="navbar__btn">
            <img 
              src={close} 
              alt="Click to close menu" 
              onClick={handleToggle}
            />
            </button>}
        </div>
        {isOpen && <Navbar />}
        <h1 className="header__h1">
          A modern publishing platform
        </h1>
        <h2 className="header__h2">
          Grow your audience and build your online brand
        </h2>
        <div className="btn__container">
            <button className="btn btn--filled">Start for Free</button>
            <button className="btn btn--outline">Learn More</button>
        </div>
    </section>
  )
}

export default Header;
