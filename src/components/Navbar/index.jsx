import React, {useState} from 'react'
import upArrow from '../../images/icon-arrow-dark.svg'
import { navbarLinks, navbarProducts, navbarContact, navbarConnect } from '../../data';
import './Navbar.css';

function Navbar() {

  const [productIsOpen, setProductIsOpen] = useState(false)
  const [companyIsOpen, setCompanyIsOpen] = useState(false)
  const [connectIsOpen, setConnectIsOpen] = useState(false)

  const handleProductToggle = () => {
    setProductIsOpen(prev => !prev)
  }

  const handleCompanyToggle = () => {
    setCompanyIsOpen(prev => !prev)
  }

  const handleConnectToggle = () => {
    setConnectIsOpen(prev => !prev)
  }

  return (
  <div className='navbar'>
    {navbarProducts.map((item) => (
      <nav className="navbar__nav">
        <button className={productIsOpen ? "navbar__btn navbar__btn--active" : "navbar__btn"} onClick={handleProductToggle}>
          {item.category}
            <img className={productIsOpen ? "navbar__arrow--reverse" : "navbar__arrow"} src={upArrow} alt="click to open links for this category" />
        </button>
        {productIsOpen &&
        <ul className="navbar__section">
         {item.links.map((link) => (
          <li className="navbar__link">{link}</li>
        ))}
        </ul>
        }
      </nav>
    ))}
    {navbarContact.map((item) => (
      <nav className="navbar__nav">
        <button className={companyIsOpen ? "navbar__btn navbar__btn--active" : "navbar__btn"} onClick={handleCompanyToggle}>
          {item.category}
          <img className={companyIsOpen ? "navbar__arrow--reverse" : "navbar__arrow"} src={upArrow} alt="click to open links for this category" />
      </button>
      {companyIsOpen &&
        <ul className="navbar__section">
         {item.links.map((link) => (
          <li className="navbar__link">{link}</li>
        ))}
        </ul>
        }
      </nav>
    ))}

{navbarConnect.map((item) => (
      <nav className="navbar__nav">
        <button className={connectIsOpen ? "navbar__btn navbar__btn--active" : "navbar__btn"} onClick={handleConnectToggle}>
          {item.category}
          <img className={connectIsOpen ? "navbar__arrow--reverse" : "navbar__arrow"} src={upArrow} alt="click to open links for this category" />
      </button>
        {connectIsOpen &&
        <ul className="navbar__section">
         {item.links.map((link) => (
          <li className="navbar__link">{link}</li>
        ))}
        </ul>
        }
      </nav>
    ))}
    {/* {navbarLinks.map((item) => (
      <ul className="navbar__section">
        {item.category}
        <img className="navbar__arrow--dark" src={upArrow} alt="click to open links for this category" />
        {item.links.map((link) => (
          <li className='navbar__link'>{link}</li>
        ))}
      </ul>
    ))} */}
    <div className="navbar__divider"></div>
    <div className="navbar__btn-container">
      <button className='btn btn--borderless'>
        Login
      </button>
      <button className='btn btn--gradient'>
        Sign Up
      </button>
    </div>
  </div>
  )
}

export default Navbar;