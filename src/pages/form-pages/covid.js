import React from "react";
import RightPanel from "../../components/RightPanel";
import "../../stylesheets/form-pages.css";
import NavBar from "../../components/nav-bar/NavBar";

const PAGE = 3;

export default function Covid() {
  return (
    <div className="form-page-container">
      <section className="left-panel">
        <h1 className="header">Covid Stuff</h1>
        <NavBar page={PAGE} />
      </section>
      <section className="right-panel">
        <RightPanel page={PAGE - 1} />
      </section>
    </div>
  );
}
