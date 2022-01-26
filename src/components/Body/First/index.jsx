import React from "react";
import "../Body.css";
import "./Body.First.css";

function First({ url1 }) {
  return (
    <div className="body__content body__content--first">
      <img
        className="body__img body__img--first"
        src={url1}
        alt="illustration of desktop screen with colorful content on it"
      />
      <div className="body__text body__text--first">
        <h4 className="body__h4">Introducing an extensible editor</h4>
        <p className="body__copy body__copy--first">
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
        <h4 className="body__h4">Robust content management</h4>
        <p className="body__copy body__copy--first">
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </p>
      </div>
    </div>
  );
}

export default First;
