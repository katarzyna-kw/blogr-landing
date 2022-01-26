import React from "react";
import img2 from "../../../images/illustration-phones.svg";
import "../Body.css";
import "./Body.Article.css";

function Article() {
  return (
    <article className="body__article">
      <div className="body__content body__content--article">
        <img
          className="body__img body__img--article"
          src={img2}
          alt="illustration of 2 smartphones, one showing the Blogr logo and the other showing a Blogr layout"
        />
        <div className="body__text body__text--article">
          <h4 className="body__h4 body__h4--article">
            State of the Art Infrastructure
          </h4>
          <p className="body__copy body__copy--article">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </article>
  );
}

export default Article;
