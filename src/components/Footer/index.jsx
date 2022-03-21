import React from 'react'
import logo from '../../images/logo.svg'
import { navbarLinks } from '../../data'
import './Footer.css'

function Footer() {

  return ( 
    <footer className="footer__container">
      <img className="footer__logo" src={logo} alt="Blogr logo" />
      <div className="footer__links">
        {navbarLinks.map((item) => (
          <div className="list__wrapper" key={item.category}>
            <div className="list__title">{item.category}</div>
            <ul key={item.category} className="footer__list">
            {item.links.map((link) => (
              <li key={link} className='footer__link'>{link}</li>
            ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer;