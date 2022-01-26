import React from "react";
import "../Body.css";
import "./Body.Last.css";

function Last({ url3 }) {
  return (
    <div className="body__content">
      <img
        className="body__img body__img--last"
        src={url3}
        alt="illustration of laptop screen with colorful content on it"
      />
      <div className="body__text body__text--last">
        <h4 className="body__h4">Free, open, simple</h4>
        <p className="body__copy">
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
        <h4 className="body__h4 body__h4--last">Powerful tooling</h4>
        <p className="body__copy">
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze,but capable of
          producing even the most complicated sites.
        </p>
      </div>
    </div>
  );
}

export default Last;
