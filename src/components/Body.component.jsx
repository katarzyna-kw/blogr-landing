import React from 'react'
import img1 from '../images/illustration-editor-mobile.svg'
import img2 from '../images/illustration-phones.svg'
import img3 from '../images/illustration-laptop-mobile.svg'
import './Body.css';

function Body() {
  return (
  <section className="body__container">
        <h3 className="body__h3">Designed for the future</h3>
        <img className="body__img" src={img1} />
        <h3 className="body__h3">Introducing an extensible editor</h3>
        <p className="body__copy">
            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog. 
        </p>
        <h3 className="body__h3">Robust content management</h3>
        <p className="body__copy">
            Flexible content management enables users to easily move through posts. Increase the usability of your blog 
            by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
        </p>
        <article class="body__article">
        <img className="body__img body__img--article" src={img2} />
            <h3 className="body__h3 body__h3--article">State of the Art Infrastructure</h3>
            <p className="body__copy body__copy--article">
                With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
            </p>
        </article>
        <img className="body__img" src={img3} />
        <h3 className="body__h3">Free, open, simple</h3>
        <p className="body__copy">
            Blogr is a free and open source application backed by a large community of helpful developers. It supports 
            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
        </p>
        <h3 className="body__h3">Powerful tooling</h3>
        <p className="body__copy">
            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
            capable of producing even the most complicated sites.
        </p>
  </section>
  )
}

export default Body;