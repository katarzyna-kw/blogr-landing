import React, { useState, useEffect } from "react";
import First from "./First";
import Article from "./Article";
import Last from "./Last";
import img1 from "../../images/illustration-editor-mobile.svg";
import img1Desktop from "../../images/illustration-editor-desktop.svg";
import img3 from "../../images/illustration-laptop-mobile.svg";
import img3Desktop from "../../images/illustration-laptop-desktop.svg";
import "./Body.css";

function Body() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const img1Url = window.innerWidth >= 700 ? img1Desktop : img1;
  const img3Url = window.innerWidth >= 700 ? img3Desktop : img3;

  useEffect(() => {
    const updateImg = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateImg);

    return () => window.removeEventListener("resize", updateImg);
  }, []);

  return (
    <section className="body__container">
      <h3 className="body__h3">Designed for the future</h3>
      <First url1={img1Url} />
      <Article />
      <Last url3={img3Url} />
    </section>
  );
}

export default Body;
