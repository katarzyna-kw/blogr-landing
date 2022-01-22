import React, {useState, useEffect} from 'react'
import img1 from '../images/illustration-editor-mobile.svg'
import img1Desktop from '../images/illustration-editor-desktop.svg'
import img2 from '../images/illustration-phones.svg'
import img3 from '../images/illustration-laptop-mobile.svg'
import img3Desktop from '../images/illustration-laptop-desktop.svg'
import './Body.css';

function Body() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const img1Url = window.innerWidth >= 768 ? img1Desktop : img1
    const img3Url = window.innerWidth >= 768 ? img3Desktop : img3

    useEffect(() => {
        const updateImg = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", updateImg);

        return () => window.removeEventListener("resize", updateImg);
        }, []
    );

    return (
    <section className="body__container">
        <h3 className="body__h3">Designed for the future</h3>
        <div className="body__content body__content--first">
            <img className="body__img body__img--first" src={img1Url} />
            <div className="body__text body__text--first">
                <h4 className="body__h4">Introducing an extensible editor</h4>
                <p className="body__copy body__copy--first">
                    Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog. 
                </p>
                <h4 className="body__h4">Robust content management</h4>
                <p className="body__copy body__copy--first">
                    Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                    by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                </p>
            </div>
        </div>
        <article className="body__article">
            <div className="body__content body__content--article">
                <img className="body__img body__img--article" src={img2} />
                <div className="body__text body__text--article">
                    <h4 className="body__h4 body__h4--article">State of the Art Infrastructure</h4>
                    <p className="body__copy body__copy--article">
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </p>
                </div>
            </div>
        </article>
        <div className="body__content">
            <img className="body__img body__img--last" src={img3Url} />
            <div className="body__text body__text--last">
                <h4 className="body__h4">Free, open, simple</h4>
                <p className="body__copy">
                    Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                    features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                    and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                </p>
                <h4 className="body__h4 body__h4--last">Powerful tooling</h4>
                <p className="body__copy">
                    Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                    capable of producing even the most complicated sites.
                </p>
            </div>
        </div>
  </section>
  )
}

export default Body;