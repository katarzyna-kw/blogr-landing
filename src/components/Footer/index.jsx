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
          <ul key={item.category} className="footer__list">
            <div>{item.category}</div>
            {item.links.map((link) => (
              <li key={link} className='footer__link'>{link}</li>
            ))}
            </ul>
        ))}
      </div>
    </footer>
  )
}

export default Footer;