import React from 'react'
import logo from '../../images/logo.svg'
import { navbarLinks } from '../../data'
import './Footer.css'

function Footer() {

  return ( 
    <footer className="footer__container">
      <img className="footer__logo" src={logo} alt="Blogr logo" />
      {navbarLinks.map((item) => (
        <ul className="footer__list">{item.category}
          {item.links.map((link) => (
            <li className='footer__link'>{link}</li>
          ))}
          </ul>
      ))}
    </footer>
    )
}

export default Footer;